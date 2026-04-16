const LINKS = {
  discord: "https://discord.gg/tpVpduEqDm",
  whitelist: "https://example.com/whitelist",
  rules: "https://example.com/szabalyzat",
  launcher: "https://github.com/rasta4201020/woraroleplay/releases/latest",
};

const SERVER = {
  // Példa: "connect 127.0.0.1:30120" vagy "connect cfx.re/join/xxxxxx"
  connectCommand: "connect cfx.re/join/IDE_JON_A_KODED",
};

function setYear() {
  const el = document.getElementById("ev");
  if (el) el.textContent = String(new Date().getFullYear());
}

function bindQuickInfo() {
  const discordHost = (() => {
    try {
      const u = new URL(LINKS.discord);
      return u.hostname.replace(/^www\./, "") + u.pathname;
    } catch {
      return "discord.gg/…";
    }
  })();

  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.getAttribute("data-bind");
    if (!key) return;
    if (key === "discordHost") el.textContent = discordHost;
    if (key === "connectCmd") el.textContent = SERVER.connectCommand;
  });
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

async function copyText(text) {
  if (!text) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "true");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      return true;
    } catch {
      return false;
    }
  }
}

function setupCopyConnect() {
  const buttons = document.querySelectorAll("[data-copy-connect]");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const ok = await copyText(SERVER.connectCommand);
      const original = btn.textContent || "";
      btn.textContent = ok ? "Másolva ✓" : "Nem sikerült";
      window.setTimeout(() => {
        btn.textContent = original;
      }, 1200);
    });
  });
}

function setupReveal() {
  const els = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!els.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.setAttribute("data-in", "true");
      });
    },
    { rootMargin: "80px 0px -10% 0px", threshold: 0.1 }
  );
  els.forEach((el) => obs.observe(el));
}

function setupGallery() {
  const root = document.querySelector("[data-gallery]");
  if (!root) return;
  root.querySelectorAll("[data-shot]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.getAttribute("data-shot") || "Kép";
      alert(label + "\n\n(Ide később igazi képeket teszünk, ez most helykitöltő.)");
    });
  });
}

setYear();
bindQuickInfo();
setupNav();
setupContactLinks();
setupCopyConnect();
setupReveal();
setupGallery();
