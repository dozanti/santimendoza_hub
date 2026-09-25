import { ArrowDown } from "lucide-react";
import { profile } from "../data/profile";
import "./Hero.css";

const titleBlock = [
  { term: "Engineer", value: profile.name },
  { term: "Discipline", value: profile.focus.slice(0, 2).join(" · ") },
  { term: "Languages", value: profile.languages.slice(0, 3).join(" · ") },
];

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="blueprint-grid hero__grid" aria-hidden="true" />
      <div className="hero__axis hero__axis--x" aria-hidden="true" />
      <div className="hero__axis hero__axis--y" aria-hidden="true" />

      <div className="hero__frame wrap">
        <div className="hero__copy">
          <p className="hero__coord" aria-hidden="true">
            {profile.monogram} / 00 &mdash; Intro
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__brand" translate="no">{profile.brand}</span>
            <span className="hero__role">
              <span translate="no">{profile.name}</span> &mdash; {profile.role}
            </span>
          </h1>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects
              <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <dl className="hero__block" aria-label="Profile summary">
          {titleBlock.map((row) => (
            <div key={row.term} className="hero__block-row">
              <dt className="label">{row.term}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="corners hero__corners" aria-hidden="true" />
    </section>
  );
}
