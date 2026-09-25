import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { profile, social } from "../data/profile";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import "./Nav.css";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting);
        }
        setActive(ids.find((id) => visible.get(id)) ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = sections.map((s) => s.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav__inner wrap">
        <a href="#top" className="nav__mark" aria-label={`${profile.brand}, back to top`}>
          <img src="/mark.svg" alt="" width={28} height={28} />
          <span translate="no">{profile.brand}</span>
        </a>

        <nav
          id="nav-links"
          className={open ? "nav__links nav__links--open" : "nav__links"}
          aria-label="Sections"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav__social">
          <a href={social.github} target="_blank" rel="noopener noreferrer me" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={social.x} target="_blank" rel="noopener noreferrer me" aria-label="X">
            <XIcon size={16} />
          </a>
          <a href={`mailto:${social.email}`} aria-label={`Email ${social.email}`}>
            <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X size={20} strokeWidth={1.75} aria-hidden="true" />
          ) : (
            <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
