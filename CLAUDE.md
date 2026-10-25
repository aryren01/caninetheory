# The Canine Theory website

A static marketing site for a dog training business, served by GitHub Pages at caninetheory.com. It has no framework and no build step: just `index.html`, `styles.css`, `script.js` and `images/`.

## Design rules (keep these consistent)
- Colors: mustard yellow `#edd287` and teal `#7cb6b2` sections alternate, with dark ink `#2b2b2b` for text and buttons. They're defined as CSS variables in `:root`.
- Fonts: **Marcellus** for headings and **PT Serif** for body text, both loaded from Google Fonts.
- Buttons are dark pill shapes (`.btn`). Service lists use `<details>` accordions inside `.accordion`.
- The design was copied from the owner's Squarespace draft, so new sections should match its look.
- The site must work on phones. Check the `@media (max-width: 900px)` rules when changing layouts.

## Notes
- Once the custom domain is set up, keep the `CNAME` file; GitHub Pages needs it for caninetheory.com.
- The contact form posts to Formspree (`action` in index.html). `script.js` falls back to `mailto:` while the ID is still `YOUR_FORM_ID`.
- Pushing to `main` publishes the site.
