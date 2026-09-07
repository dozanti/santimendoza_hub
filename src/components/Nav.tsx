import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile, social } from "../data/profile";
import "./Nav.css";

const sections = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
            <a key={s.href} href={s.href} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav__social">
          <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={17} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a href={`mailto:${social.email}`} aria-label="Email">
            <Mail size={17} strokeWidth={1.75} aria-hidden="true" />
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
