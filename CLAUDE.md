# The Canine Theory website

A static marketing site for a dog training business, served by GitHub Pages at thecaninetheory.com. It has no framework and no build step: just `index.html`, `styles.css`, `script.js` and `images/`.

## Design rules (keep these consistent)
- Colors: mustard yellow `#edd287` and teal `#7cb6b2` sections alternate, with dark ink `#2b2b2b` for text, buttons, lines, borders and icons. They're defined as CSS variables in `:root`. The logo images are the original dark green.
- Fonts: **Marcellus** for headings and **PT Serif** for body text, both loaded from Google Fonts.
- Logo: `images/logo-mark.png` (dog and mountains, in the header next to the name), `images/logo.png` (full logo with text, transparent background) and `images/favicon.png` (browser tab icon).
- Buttons are dark pill shapes (`.btn`). Service lists use `<details>` accordions inside `.accordion`.
- Sections flow into each other with wavy edges (the `::before` waves in styles.css, colored to match the section above). Keep teal and yellow alternating so the waves line up.
- Content fades up as it scrolls into view: script.js adds `.reveal`/`.in` to the elements listed in `revealTargets`. Add new elements there if they should animate. All motion is turned off for visitors with "reduce motion" set, and nothing is hidden if JavaScript doesn't run.
- The design was copied from the owner's Squarespace draft, so new sections should match its look.
- The site must work on phones. Check the `@media (max-width: 900px)` rules when changing layouts. The top menu folds into the ☰ button below 1150px (its own media query), so adding a menu link may need that number raised.
- The hero headline is two sentences, each kept on one line (`.hero h1 span`), sized to its column with `cqi` units.

## Notes
- Keep the `CNAME` file; GitHub Pages needs it for thecaninetheory.com. The domain's DNS and email forwarding live in Cloudflare (see README).
- The contact email is `hello@thecaninetheory.com` (in the footer of index.html and `CONTACT_EMAIL` in script.js).
- The contact form posts to Formspree form `xyeepbrv` (`action` in index.html), which emails each submission to her business Gmail. `script.js` sends it in the background and shows a thank-you message.
- Pushing to `main` publishes the site.
- When you change `styles.css` or `script.js`, bump the `?v=` number on their links in `index.html` so browsers download the new file instead of using an old saved copy.
