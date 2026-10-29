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


## V21 — Critical frontend initialization fix
- Fixed a JavaScript initialization error caused by a missing `#locateButton` element.
- The homepage now runs `applyLanguage()` on initial page load, so profiles, services, cities, request/search UI and all sections render immediately in EN/FR/AR instead of appearing only after manually switching language.
- No visual redesign or map changes in this release.


## V22 polish
- Arabic header keeps the same visual scale as EN/FR and mirrors the layout cleanly.
- Account form fields now have a warm sand background and visible borders/focus states.

## V23 — Professional Dashboard
The dashboard now includes:
- Overview and profile completion
- Profile editing and publish/unpublish
- Work photo upload/delete (Supabase Storage)
- Availability by day and time slot
- Incoming assigned requests
- Public work photos in real professional profiles

### Supabase setup
Run the full `supabase.sql` in the Supabase SQL editor. The V23 section creates the `work-photos` storage bucket, work photo table/policies, availability field, and professional request assignment support.

## V24 — Customer Dashboard
- Customer dashboard with My Requests, Saved Professionals, Reviews and Profile.
- Customers can save published real professionals.
- Customers can submit/update one review per professional.
- Customer requests are loaded from Supabase.
- Added `saved_professionals` table and RLS policies.
- Professional dashboard remains available with work photos, availability and incoming requests.
