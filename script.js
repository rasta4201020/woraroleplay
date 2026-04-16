const LINKS = {
  discord: "https://discord.gg/tpVpduEqDm",
  whitelist: "https://example.com/whitelist",
  rules: "https://example.com/szabalyzat",
  launcher: "https://github.com/rasta4201020/woraroleplay/releases/latest",
};

function setYear() {
  const el = document.getElementById("ev");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  const close = () => {
    nav.setAttribute("data-open", "false");
    toggle.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    nav.setAttribute("data-open", "true");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";
    if (isOpen) close();
    else open();
  });

  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (t.tagName.toLowerCase() === "a") close();
  });
}

function setupContactLinks() {
  document.querySelectorAll("[data-link]").forEach((a) => {
    const key = a.getAttribute("data-link");
    if (!key) return;
    const url = LINKS[key];
    if (!url) return;

    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noreferrer");
  });
}

setYear();
setupNav();
setupContactLinks();
