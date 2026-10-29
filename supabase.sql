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
    select 1 from public.requests r where r.user_id=auth.uid() and r.professional_id=professional_id
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
