# KHEDMA V15 — Supabase Ready

Next stage: Supabase Auth, customer/professional roles, published professional loading and request storage.

1. Create a Supabase project.
2. Run `supabase.sql` in SQL Editor.
3. Put the Project URL and public anon key in `supabase-config.js`.
4. Upload all files to the GitHub Pages repository root.

Never put a service_role key in the frontend.

## V16 next-stage additions
- Arabic typography calibrated to the same visual scale as English/French.
- Professional/customer dashboard shell.
- Authenticated users can edit their Supabase profile.
- Professional users can select service/city, add phone/WhatsApp/bio and publish/unpublish their profile.
- Public professional loading remains protected by RLS.


## V19 update
- Replaced the unreliable map area with a mobile-first city discovery experience.
- Added interactive popular-city selection, Near Me entry point, and direct professional search.
- Tightened the mobile header and reduced excessive mobile spacing.

## V20 final mobile correction
- The previous mobile reveal behavior could leave below-hero sections invisible if JavaScript/observer execution was interrupted. `.reveal` is now visible by default, so content never disappears.
- The map section is removed from the visible homepage flow. City Discovery is the replacement UX.
- Mobile header keeps normal control sizes and mirrors the layout in Arabic instead of shrinking controls.
- EN/LTR: brand left, account + language + menu right.
- AR/RTL: menu + language + account left, brand right.
- Mobile city discovery uses a compact 2-column city grid instead of a large map.
