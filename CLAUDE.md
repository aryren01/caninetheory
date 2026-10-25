# The Canine Theory website

A static marketing site for a dog training business, served by GitHub Pages at thecaninetheory.com. It has no framework and no build step: just `index.html`, `styles.css`, `script.js` and `images/`.

## Design rules (keep these consistent)
- Colors: mustard yellow `#edd287` and teal `#7cb6b2` sections alternate, with navy `--logo-blue` `#042e71` (the logo's color) for all text, and dark ink `#2b2b2b` for buttons, divider lines, form borders and social icons. They're defined as CSS variables in `:root`.
- Fonts: **Marcellus** for headings and **PT Serif** for body text, both loaded from Google Fonts.
- Logo: `images/logo-mark.png` (dog and mountains, in the header next to the name), `images/logo.png` (full logo with text, transparent background) and `images/favicon.png` (browser tab icon).
- Buttons are dark pill shapes (`.btn`). Service lists use `<details>` accordions inside `.accordion`.
- The design was copied from the owner's Squarespace draft, so new sections should match its look.
- The site must work on phones. Check the `@media (max-width: 900px)` rules when changing layouts.

## Notes
- Keep the `CNAME` file; GitHub Pages needs it for thecaninetheory.com. The domain's DNS and email forwarding live in Cloudflare (see README).
- The contact email is `hello@thecaninetheory.com` (in the footer of index.html and `CONTACT_EMAIL` in script.js).
- The contact form posts to Formspree (`action` in index.html). `script.js` falls back to `mailto:` while the ID is still `YOUR_FORM_ID`.
- Pushing to `main` publishes the site.
