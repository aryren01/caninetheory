# The Canine Theory

Website for **The Canine Theory** dog training, hosted free on GitHub Pages at **caninetheory.com**.

It's a plain HTML/CSS site with no build step:

| File | What it is |
|---|---|
| `index.html` | All the page content: text, prices, sections |
| `styles.css` | Colors, fonts, layout |
| `script.js` | Mobile menu and contact form |
| `images/` | Photos |
| `CNAME` | Tells GitHub Pages to use caninetheory.com |

## Editing the site

- **With Claude:** open [claude.ai/code](https://claude.ai/code), connect GitHub, pick this repo, and ask for what you want (for example "change the Level 2 price to $2,600" or "add a testimonials section"). `CLAUDE.md` explains the site to Claude.
- **By hand:** open a file on github.com, click the ✏️ pencil, edit it, and click **Commit changes**. The live site updates within about a minute.

## Still to do

- [ ] **Photos:** replace the images in `images/` with the full-quality originals. The current ones were cropped from screenshots. Also add `images/hero.jpg` (leash photo) and `images/single-session.jpg` (curly black dog).
- [ ] **Descriptions:** add text for "Good Manners Group Class" and "One-on-One Behavior Coaching" in `index.html`.
- [ ] **Social links:** add the X, Instagram and Facebook profile URLs in `index.html`.
- [ ] **Email:** put her real email in `index.html` (footer) and `script.js` (`CONTACT_EMAIL`).
- [ ] **Contact form:** create a free form at [formspree.io](https://formspree.io) and paste its ID over `YOUR_FORM_ID` in `index.html`. Until then, "Send" opens the visitor's email app.

## Going live on caninetheory.com

1. Buy `caninetheory.com` from a domain registrar (Namecheap, Porkbun, Cloudflare, etc.).
2. On GitHub, go to **Settings → Pages**, set Source to **Deploy from a branch**, then choose `main` and `/ (root)`. The repo must be public on a free account.
3. At the registrar, add these DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<github-username>.github.io`
4. Back in **Settings → Pages**, enter `caninetheory.com` as the custom domain. Once the DNS check passes, tick **Enforce HTTPS**.
