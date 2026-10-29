// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") nav.classList.remove("open");
});

// Header shadow once the page is scrolled
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Fade sections in as they scroll into view, one item after another
const revealTargets = document.querySelectorAll(
  ".split-text > :not(.accordion), .accordion > details, .split-media, .about-text > *, .about-grid > img, " +
  ".section > h2, .section > .lead, .services > h2, .product, .socials, .gallery > *, .contact-form, .site-footer > div, " +
  ".profile-photo, .profile-text > *"
);
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => [...revealTargets].includes(c));
    el.style.setProperty("--delay", `${Math.min(siblings.indexOf(el), 5) * 0.12}s`);
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// Contact form
// GitHub Pages can't receive form submissions by itself, so this uses Formspree (free).
// Until the form ID in index.html is set, "Send" opens the visitor's email app instead.
const CONTACT_EMAIL = "hello@thecaninetheory.com";
const form = document.getElementById("contact-form");

form?.addEventListener("submit", async (e) => {
  const status = form.querySelector(".form-status");
  e.preventDefault();
  const data = new FormData(form);

  if (form.action.includes("YOUR_FORM_ID")) {
    const subject = `Consultation request from ${data.get("first_name")} ${data.get("last_name")}`;
    const body = `${data.get("message")}\n\nReply to: ${data.get("email")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  status.textContent = "Sending…";
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error();
    form.reset();
    status.textContent = "Thanks! We’ll be in touch soon.";
  } catch {
    status.textContent = "Something went wrong. Please email us directly.";
  }
});
