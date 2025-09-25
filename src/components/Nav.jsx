import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "about", href: "#about", label: "Sobre mí" },
  { id: "skills", href: "#skills", label: "Skills" },
  { id: "experience", href: "#experience", label: "Experiencia" },
  { id: "projects", href: "#projects", label: "Proyectos" },
  { id: "gallery", href: "#gallery", label: "Fotos" },
  { id: "contact", href: "#contact", label: "Contacto" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  // Scroll styles + progreso + scroll-spy
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);

      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      // Más permisivo: detecta mejor secciones altas como "Experiencia"
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <nav
      className={[
        "sticky top-0 z-50 border-b",
        "backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60",
        scrolled
          ? "bg-neutral-950/80 border-neutral-900 shadow-[0_6px_20px_-12px_rgba(0,0,0,0.5)]"
          : "bg-neutral-950/40 border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold select-none">MF</a>

        {/* Desktop */}
        <div className="hidden md:flex gap-2 text-sm">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className="relative px-2 py-1 rounded-lg text-neutral-300 hover:text-white transition"
              onClick={() => setActive(l.id)}  // ← feedback inmediato
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg bg-white/10"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile: botón */}
        <button
          className="md:hidden px-3 py-1.5 rounded-lg border border-neutral-800 text-sm"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {/* Barra de progreso de scroll */}
      <div
        className="absolute left-0 -bottom-px h-[2px] bg-white/60"
        style={{ width: `${progress}%` }}
      />

      {/* Mobile: menú desplegable */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-neutral-900 bg-neutral-950/95"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="mx-auto max-w-6xl px-6 py-3 grid gap-2">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  className={[
                    "px-3 py-2 rounded-xl border border-neutral-800 bg-neutral-900 text-sm",
                    active === l.id ? "text-white" : "text-neutral-300 hover:text-white",
                  ].join(" ")}
                  onClick={() => { setActive(l.id); setOpen(false); }} // ← marca activo y cierra
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
