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

// Contact form
// GitHub Pages can't receive form submissions by itself, so this uses Formspree (free).
// Until the form ID in index.html is set, "Send" opens the visitor's email app instead.
const CONTACT_EMAIL = "hello@thecaninetheory.com";
const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");

form.addEventListener("submit", async (e) => {
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
