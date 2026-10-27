# KHEDMA V10 — Stable Frontend

This version focuses on stability before the Supabase/backend phase.

## Important fixes
- Removed the heavy 3D map treatment.
- Uses a real OpenStreetMap interactive map in an iframe, so there is no Leaflet JavaScript dependency.
- Added a stable fallback architecture: the rest of the site does not depend on the map loading.
- Added separate `style.css` and `script.js` files (both are required).
- Full EN / FR / AR interface translations.
- Correct Arabic RTL direction and Arabic typography.
- Responsive layout for phones, tablets and desktop.
- Fixed horizontal overflow.
- Working mobile menu from every scroll position.
- Working back-to-top button.
- Animated service icons, profile avatars and reveal transitions, kept subtle.
- 77+ Moroccan cities in search/city sections.
- Demo profiles are clearly marked as demo and not verified.

## GitHub Pages
Upload these four files directly to the repository root:

- `index.html`
- `style.css`
- `script.js`
- `README.md`

Do not upload only the ZIP.

## Map
The map uses OpenStreetMap's public export/embed endpoint. An internet connection is required for the map tiles. The site itself does not depend on the map for the other sections to render.

## Next phase
Once this frontend is confirmed on mobile and desktop:
1. Supabase authentication
2. Real professional profiles
3. Real services and cities database
4. Post Request workflow
5. Reviews and ratings
6. Customer dashboard
7. Professional dashboard
