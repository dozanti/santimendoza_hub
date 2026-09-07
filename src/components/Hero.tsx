import { ArrowDown } from "lucide-react";
import { profile } from "../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__frame wrap">
        <p className="hero__coord">{profile.monogram} / 00 &mdash; INTRO</p>

        <h1 className="hero__title">
          <span translate="no">{profile.brand}</span>
          <span className="hero__role"><span translate="no">{profile.name}</span> &mdash; {profile.role}</span>
        </h1>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View projects
            <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero__corner hero__corner--tl" aria-hidden="true" />
      <div className="hero__corner hero__corner--tr" aria-hidden="true" />
      <div className="hero__corner hero__corner--bl" aria-hidden="true" />
      <div className="hero__corner hero__corner--br" aria-hidden="true" />
    </section>
  );
}
