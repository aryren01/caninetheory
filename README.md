# The Canine Theory

Website for **The Canine Theory** dog training, hosted free on GitHub Pages at **thecaninetheory.com**.

It's a plain HTML/CSS site with no build step:

| File | What it is |
|---|---|
| `index.html` | All the page content: text, prices, sections |
| `styles.css` | Colors, fonts, layout |
| `script.js` | Mobile menu and contact form |
| `images/` | Photos |

## Editing the site

- **With Claude:** open [claude.ai/code](https://claude.ai/code), connect GitHub, pick this repo, and ask for what you want (for example "change the Level 2 price to $2,600" or "add a testimonials section"). `CLAUDE.md` explains the site to Claude.
- **By hand:** open a file on github.com, click the ✏️ pencil, edit it, and click **Commit changes**. The live site updates within about a minute.

## Still to do

- [ ] **Photos:** replace the images in `images/` with the full-quality originals. The current ones were cropped from screenshots. Also add `images/hero.jpg` (leash photo) and `images/single-session.jpg` (curly black dog).
- [ ] **Descriptions:** add text for "Good Manners Group Class" and "One-on-One Behavior Coaching" in `index.html`.
- [x] **Social links:** Instagram links to @thecaninetheory; Facebook uses her page's share link. (She isn't on X, so that icon was removed.)
- [x] **Email:** `hello@thecaninetheory.com` (Cloudflare Email Routing forwards it to her Gmail) is in `index.html` (footer) and `script.js` (`CONTACT_EMAIL`).
- [ ] **Contact form:** create a free form at [formspree.io](https://formspree.io) and paste its ID over `YOUR_FORM_ID` in `index.html`. Until then, "Send" opens the visitor's email app.

## Domain and email

The domain **thecaninetheory.com** is registered at Cloudflare.

- **Website:** in Cloudflare DNS, four `A` records for `@` point to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, and a `CNAME` for `www` points to `aryren01.github.io`. All are set to **DNS only** (grey cloud) so GitHub can issue the HTTPS certificate. In GitHub, **Settings → Pages** has `thecaninetheory.com` as the custom domain, which created the `CNAME` file in this repo. Don't delete that file.
- **Email:** Cloudflare **Email Routing** forwards `hello@thecaninetheory.com` to her Gmail. The `MX` and `TXT` records it created in DNS must stay.
