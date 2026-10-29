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
