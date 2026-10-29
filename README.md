# KHEDMA V26

KHEDMA is a Morocco-focused local-services marketplace.

## V26 additions
- Real customer reviews tied to matched requests.
- Automatic professional rating + review count recalculation from real reviews.
- Verification request workflow for professionals.
- Verified badge appears only when `profiles.verified = true`.
- Phone/identity verification timestamps are ready for the admin/verification stage.
- Arabic / French / English support.

## Supabase
Run `supabase.sql` in Supabase SQL Editor. The browser config is already included in `supabase-config.js`.

Never put a Supabase service-role/secret key in the browser. The included key is the public publishable/anon key.

## GitHub Pages
Keep these files at the repository root:
- index.html
- style.css
- script.js
- supabase-config.js
- supabase.sql
- README.md

Use `main` branch and `/(root)` for GitHub Pages.


## V27 Admin Panel
1. Run the full `supabase.sql` in Supabase SQL Editor.
2. Create/sign up your admin account normally on KHEDMA.
3. In Supabase SQL Editor, replace `ADMIN_USER_UUID` with that account's Auth User UID and run:

```sql
insert into public.admin_users(user_id) values ('ADMIN_USER_UUID') on conflict do nothing;
```

4. Refresh KHEDMA and open Account. The Admin panel appears only for users listed in `admin_users`.
5. Never add a service-role/secret key to the browser.
