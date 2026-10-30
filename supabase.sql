-- KHEDMA V15 schema
create extension if not exists pgcrypto;
create table if not exists public.profiles (id uuid primary key references auth.users(id) on delete cascade, full_name text not null, role text not null check(role in ('customer','professional')), phone text, whatsapp text, city text, service_key text, bio text, avatar_url text, rating numeric(2,1) default 0, reviews_count integer default 0, verified boolean default false, is_published boolean default false, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.requests (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, service_key text not null, city text not null, description text not null, phone text not null, status text not null default 'open' check(status in ('open','matched','closed','cancelled')), created_at timestamptz default now());
create table if not exists public.reviews (id uuid primary key default gen_random_uuid(), professional_id uuid not null references public.profiles(id) on delete cascade, customer_id uuid not null references auth.users(id) on delete cascade, rating integer not null check(rating between 1 and 5), comment text, created_at timestamptz default now(), unique(professional_id,customer_id));
alter table public.profiles enable row level security; alter table public.requests enable row level security; alter table public.reviews enable row level security;
drop policy if exists "public published pros" on public.profiles; create policy "public published pros" on public.profiles for select using ((role='professional' and is_published=true) or auth.uid()=id);
drop policy if exists "own profile insert" on public.profiles; create policy "own profile insert" on public.profiles for insert with check(auth.uid()=id);
drop policy if exists "own profile update" on public.profiles; create policy "own profile update" on public.profiles for update using(auth.uid()=id) with check(auth.uid()=id);
drop policy if exists "own request insert" on public.requests; create policy "own request insert" on public.requests for insert with check(auth.uid()=user_id);
drop policy if exists "own request read" on public.requests; create policy "own request read" on public.requests for select using(auth.uid()=user_id);
drop policy if exists "public review read" on public.reviews; create policy "public review read" on public.reviews for select using(true);
drop policy if exists "own review insert" on public.reviews;
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$ begin insert into public.profiles(id,full_name,role) values(new.id,coalesce(new.raw_user_meta_data->>'full_name','KHEDMA User'),coalesce(new.raw_user_meta_data->>'role','customer')); return new; end; $$;
drop trigger if exists on_auth_user_created on auth.users; create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

-- V23: Professional dashboard extensions
alter table public.profiles
  add column if not exists availability jsonb not null default '{}'::jsonb;

alter table public.requests
  add column if not exists professional_id uuid references public.profiles(id) on delete set null;

create table if not exists public.work_photos (
  id uuid primary key default gen_random_uuid(),
  professional_id uuid not null references public.profiles(id) on delete cascade,
  image_url text not null,
  storage_path text not null,
  caption text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.work_photos enable row level security;

drop policy if exists "public work photos read" on public.work_photos;
create policy "public work photos read" on public.work_photos
for select using (auth.uid()=professional_id or exists (select 1 from public.profiles p where p.id=professional_id and p.role='professional' and p.is_published=true));

drop policy if exists "own work photos insert" on public.work_photos;
create policy "own work photos insert" on public.work_photos
for insert with check (auth.uid()=professional_id);

drop policy if exists "own work photos update" on public.work_photos;
create policy "own work photos update" on public.work_photos
for update using (auth.uid()=professional_id) with check (auth.uid()=professional_id);

drop policy if exists "own work photos delete" on public.work_photos;
create policy "own work photos delete" on public.work_photos
for delete using (auth.uid()=professional_id);

drop policy if exists "assigned professional request read" on public.requests;
create policy "assigned professional request read" on public.requests
for select using (auth.uid()=user_id or auth.uid()=professional_id);

drop policy if exists "assigned professional request update" on public.requests;
create policy "assigned professional request update" on public.requests
for update using (auth.uid()=professional_id) with check (auth.uid()=professional_id);

insert into storage.buckets (id, name, public)
values ('work-photos', 'work-photos', true)
on conflict (id) do update set public=true;

drop policy if exists "public work photo objects read" on storage.objects;
create policy "public work photo objects read" on storage.objects
for select using (bucket_id='work-photos');

drop policy if exists "own work photo objects insert" on storage.objects;
create policy "own work photo objects insert" on storage.objects
for insert with check (bucket_id='work-photos' and auth.uid()::text = (storage.foldername(name))[1]);

drop policy if exists "own work photo objects update" on storage.objects;
create policy "own work photo objects update" on storage.objects
for update using (bucket_id='work-photos' and auth.uid()::text = (storage.foldername(name))[1])
with check (bucket_id='work-photos' and auth.uid()::text = (storage.foldername(name))[1]);

drop policy if exists "own work photo objects delete" on storage.objects;
create policy "own work photo objects delete" on storage.objects
for delete using (bucket_id='work-photos' and auth.uid()::text = (storage.foldername(name))[1]);


-- V24: Customer dashboard
create table if not exists public.saved_professionals (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references auth.users(id) on delete cascade,
  professional_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(customer_id, professional_id)
);

alter table public.saved_professionals enable row level security;

drop policy if exists "own saved professionals read" on public.saved_professionals;
create policy "own saved professionals read" on public.saved_professionals
for select using (auth.uid()=customer_id);

drop policy if exists "own saved professionals insert" on public.saved_professionals;
create policy "own saved professionals insert" on public.saved_professionals
for insert with check (auth.uid()=customer_id);

drop policy if exists "own saved professionals delete" on public.saved_professionals;
create policy "own saved professionals delete" on public.saved_professionals
for delete using (auth.uid()=customer_id);


-- V25: request matching
create table if not exists public.request_matches (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.requests(id) on delete cascade,
  professional_id uuid not null references public.profiles(id) on delete cascade,
  match_score integer not null default 0,
  status text not null default 'new' check(status in ('new','contacted','declined')),
  created_at timestamptz not null default now(),
  unique(request_id, professional_id)
);

alter table public.request_matches enable row level security;

drop policy if exists "request match customer read" on public.request_matches;
create policy "request match customer read" on public.request_matches
for select using (exists (select 1 from public.requests r where r.id=request_id and r.user_id=auth.uid()));

drop policy if exists "request match professional read" on public.request_matches;
create policy "request match professional read" on public.request_matches
for select using (auth.uid()=professional_id);

drop policy if exists "request match customer insert" on public.request_matches;
create policy "request match customer insert" on public.request_matches
for insert with check (exists (select 1 from public.requests r where r.id=request_id and r.user_id=auth.uid()));

drop policy if exists "request match professional update" on public.request_matches;
create policy "request match professional update" on public.request_matches
for update using (auth.uid()=professional_id) with check (auth.uid()=professional_id);


-- V26: Reviews eligibility, live ratings and professional verification workflow
create table if not exists public.verification_requests (
  id uuid primary key default gen_random_uuid(),
  professional_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending' check(status in ('pending','approved','rejected')),
  note text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);
alter table public.verification_requests enable row level security;
drop policy if exists "own verification request read" on public.verification_requests;
create policy "own verification request read" on public.verification_requests for select using(auth.uid()=professional_id);
drop policy if exists "own verification request insert" on public.verification_requests;
create policy "own verification request insert" on public.verification_requests for insert with check(auth.uid()=professional_id);

alter table public.profiles add column if not exists phone_verified_at timestamptz;
alter table public.profiles add column if not exists identity_verified_at timestamptz;

-- Recalculate rating/counts from real reviews whenever a review is inserted, updated or deleted.
create or replace function public.refresh_professional_rating() returns trigger language plpgsql security definer set search_path=public as $$
declare target_id uuid;
begin
  target_id := coalesce(new.professional_id, old.professional_id);
  update public.profiles p
  set rating = coalesce((select round(avg(r.rating)::numeric,1) from public.reviews r where r.professional_id=target_id),0),
      reviews_count = (select count(*) from public.reviews r where r.professional_id=target_id),
      updated_at = now()
  where p.id=target_id;
  if TG_OP='DELETE' then return old; else return new; end if;
end; $$;
drop trigger if exists reviews_refresh_profile_rating on public.reviews;
create trigger reviews_refresh_profile_rating after insert or update or delete on public.reviews for each row execute function public.refresh_professional_rating();

-- A customer can only review a professional connected to one of their matched requests.
drop policy if exists "eligible review insert" on public.reviews;
create policy "eligible review insert" on public.reviews for insert with check(
  auth.uid()=customer_id and exists(
    select 1 from public.requests r where r.user_id=auth.uid() and r.professional_id=public.reviews.professional_id
  )
);

-- V27: Secure admin access
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;

drop policy if exists "admin self read" on public.admin_users;
create policy "admin self read" on public.admin_users for select using (auth.uid()=user_id);

create or replace function public.is_admin()
returns boolean language sql security definer set search_path=public stable as $$
  select exists(select 1 from public.admin_users where user_id=auth.uid());
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "admin profiles all" on public.profiles;
create policy "admin profiles all" on public.profiles for all using(public.is_admin()) with check(public.is_admin());
drop policy if exists "admin requests all" on public.requests;
create policy "admin requests all" on public.requests for all using(public.is_admin()) with check(public.is_admin());
drop policy if exists "admin reviews all" on public.reviews;
create policy "admin reviews all" on public.reviews for all using(public.is_admin()) with check(public.is_admin());
drop policy if exists "admin verification all" on public.verification_requests;
create policy "admin verification all" on public.verification_requests for all using(public.is_admin()) with check(public.is_admin());
drop policy if exists "admin request matches all" on public.request_matches;
create policy "admin request matches all" on public.request_matches for all using(public.is_admin()) with check(public.is_admin());


-- V28: KHEDMA PRO, featured placement, lead alerts and analytics
alter table public.profiles add column if not exists pro_enabled boolean not null default false;
alter table public.profiles add column if not exists featured_until timestamptz;
alter table public.profiles add column if not exists lead_alerts boolean not null default true;

create table if not exists public.pro_requests (
  id uuid primary key default gen_random_uuid(),
  professional_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'requested' check(status in ('requested','approved','rejected','cancelled')),
  note text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);
alter table public.pro_requests enable row level security;
drop policy if exists "own pro request read" on public.pro_requests;
create policy "own pro request read" on public.pro_requests for select using(auth.uid()=professional_id or public.is_admin());
drop policy if exists "own pro request insert" on public.pro_requests;
create policy "own pro request insert" on public.pro_requests for insert with check(auth.uid()=professional_id);
drop policy if exists "admin pro request all" on public.pro_requests;
create policy "admin pro request all" on public.pro_requests for all using(public.is_admin()) with check(public.is_admin());

create table if not exists public.profile_events (
  id uuid primary key default gen_random_uuid(),
  professional_id uuid not null references public.profiles(id) on delete cascade,
  event_type text not null check(event_type in ('view','whatsapp','call')),
  visitor_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
alter table public.profile_events enable row level security;
drop policy if exists "authenticated event insert" on public.profile_events;
create policy "authenticated event insert" on public.profile_events for insert with check(auth.role()='authenticated');
drop policy if exists "professional event read" on public.profile_events;
create policy "professional event read" on public.profile_events for select using(auth.uid()=professional_id or public.is_admin());
drop policy if exists "admin event all" on public.profile_events;
create policy "admin event all" on public.profile_events for all using(public.is_admin()) with check(public.is_admin());

create index if not exists idx_profiles_pro_enabled on public.profiles(pro_enabled);
create index if not exists idx_profiles_featured_until on public.profiles(featured_until);
create index if not exists idx_profile_events_professional on public.profile_events(professional_id,created_at);

-- V29: Notifications, lead management and moderation
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  title text not null,
  body text,
  is_read boolean not null default false,
  read_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.notifications enable row level security;
drop policy if exists "own notifications read" on public.notifications;
create policy "own notifications read" on public.notifications for select using(auth.uid()=user_id);
drop policy if exists "own notifications update" on public.notifications;
create policy "own notifications update" on public.notifications for update using(auth.uid()=user_id) with check(auth.uid()=user_id);
drop policy if exists "own notifications insert" on public.notifications;
create policy "own notifications insert" on public.notifications for insert with check(auth.uid()=user_id or public.is_admin());
drop policy if exists "admin notifications all" on public.notifications;
create policy "admin notifications all" on public.notifications for all using(public.is_admin()) with check(public.is_admin());

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references auth.users(id) on delete cascade,
  target_type text not null check(target_type in ('profile','review','request')),
  target_id uuid not null,
  reason text not null,
  status text not null default 'open' check(status in ('open','resolved','dismissed')),
  resolved_by uuid references auth.users(id) on delete set null,
  resolved_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.reports enable row level security;
drop policy if exists "own reports read" on public.reports;
create policy "own reports read" on public.reports for select using(auth.uid()=reporter_id or public.is_admin());
drop policy if exists "own reports insert" on public.reports;
create policy "own reports insert" on public.reports for insert with check(auth.uid()=reporter_id);
drop policy if exists "admin reports all" on public.reports;
create policy "admin reports all" on public.reports for all using(public.is_admin()) with check(public.is_admin());

create table if not exists public.blocked_profiles (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references auth.users(id) on delete cascade,
  professional_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(customer_id,professional_id)
);
alter table public.blocked_profiles enable row level security;
drop policy if exists "own blocks read" on public.blocked_profiles;
create policy "own blocks read" on public.blocked_profiles for select using(auth.uid()=customer_id or public.is_admin());
drop policy if exists "own blocks insert" on public.blocked_profiles;
create policy "own blocks insert" on public.blocked_profiles for insert with check(auth.uid()=customer_id);
drop policy if exists "own blocks delete" on public.blocked_profiles;
create policy "own blocks delete" on public.blocked_profiles for delete using(auth.uid()=customer_id or public.is_admin());
drop policy if exists "admin blocks all" on public.blocked_profiles;
create policy "admin blocks all" on public.blocked_profiles for all using(public.is_admin()) with check(public.is_admin());

create index if not exists idx_notifications_user_created on public.notifications(user_id,created_at desc);
create index if not exists idx_reports_status on public.reports(status,created_at desc);
create index if not exists idx_blocks_customer on public.blocked_profiles(customer_id);

create or replace function public.notify_new_match() returns trigger language plpgsql security definer set search_path=public as $$
declare req record; prof record;
begin
  select * into req from public.requests where id=new.request_id;
  select * into prof from public.profiles where id=new.professional_id;
  if prof.lead_alerts is distinct from false then
    insert into public.notifications(user_id,type,title,body)
    values(new.professional_id,'new_lead','New matching lead','A new customer request matches your professional profile.');
  end if;
  if req.user_id is not null then
    insert into public.notifications(user_id,type,title,body)
    values(req.user_id,'request_matched','Professional match','KHEDMA found a professional who matches your request.');
  end if;
  return new;
end; $$;
drop trigger if exists request_match_notification on public.request_matches;
create trigger request_match_notification after insert on public.request_matches for each row execute function public.notify_new_match();


-- V30: Review dashboard stability
-- Reviews.customer_id references auth.users for ownership/security.
-- The admin UI resolves customer names through public.profiles instead of embedding auth.users,
-- because PostgREST does not expose auth schema relationships in the browser schema cache.
create index if not exists idx_reviews_professional_created on public.reviews(professional_id, created_at desc);
create index if not exists idx_reviews_customer_created on public.reviews(customer_id, created_at desc);


-- V31: Production security hardening
-- Prevent non-admin users from self-assigning roles, trust badges, ratings, PRO status or featured placement.
create or replace function public.protect_profile_system_fields()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  if not public.is_admin() then
    new.role := old.role;
    new.verified := old.verified;
    new.phone_verified_at := old.phone_verified_at;
    new.identity_verified_at := old.identity_verified_at;
    new.rating := old.rating;
    new.reviews_count := old.reviews_count;
    new.pro_enabled := old.pro_enabled;
    new.featured_until := old.featured_until;
    if new.is_published and (nullif(trim(new.full_name),'') is null or nullif(trim(new.phone),'') is null or nullif(trim(new.whatsapp),'') is null or nullif(trim(new.city),'') is null or nullif(trim(new.service_key),'') is null or nullif(trim(new.bio),'') is null) then
      new.is_published := false;
    end if;
  end if;
  return new;
end; $$;
drop trigger if exists protect_profile_system_fields on public.profiles;
create trigger protect_profile_system_fields
before update on public.profiles
for each row execute function public.protect_profile_system_fields();

-- Matching is created by the customer flow, but only for a published professional
-- whose service and city actually match the request. Customers cannot forge a contacted lead.
drop policy if exists "request match customer insert" on public.request_matches;
create policy "request match customer insert" on public.request_matches
for insert with check (
  status='new'
  and exists (select 1 from public.requests r where r.id=request_id and r.user_id=auth.uid())
  and exists (
    select 1 from public.requests r
    join public.profiles p on p.id=professional_id
    where r.id=request_id
      and p.role='professional'
      and p.is_published=true
      and lower(trim(p.city))=lower(trim(r.city))
      and p.service_key=r.service_key
  )
);

-- The database marks the request matched when the first valid match is created.
create or replace function public.sync_request_from_match()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  update public.requests as req
  set professional_id=coalesce(req.professional_id,new.professional_id),
      status='matched'
  where req.id=new.request_id and req.status='open';
  return new;
end; $$;
drop trigger if exists sync_request_from_match on public.request_matches;
create trigger sync_request_from_match
after insert on public.request_matches
for each row execute function public.sync_request_from_match();

-- Reviews require an actual contacted match, not merely a forged request row.
drop policy if exists "eligible review insert" on public.reviews;
create policy "eligible review insert" on public.reviews for insert with check(
  auth.uid()=customer_id and exists(
    select 1 from public.request_matches rm
    join public.requests r on r.id=rm.request_id
    where r.user_id=auth.uid()
      and rm.professional_id=public.reviews.professional_id
      and rm.status='contacted'
  )
);

-- Allow a customer to edit their own eligible review (the UI uses upsert).
drop policy if exists "eligible review update" on public.reviews;
create policy "eligible review update" on public.reviews for update using(
  auth.uid()=customer_id
) with check(
  auth.uid()=customer_id and exists(
    select 1 from public.request_matches rm
    join public.requests r on r.id=rm.request_id
    where r.user_id=auth.uid()
      and rm.professional_id=public.reviews.professional_id
      and rm.status='contacted'
  )
);
