import { ArrowDown } from "lucide-react";
import { profile } from "../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__frame wrap">
        <p className="hero__coord">SM / 00 &mdash; INTRO</p>

        <h1 className="hero__title">
          {profile.name}
          <span className="hero__role">{profile.role}</span>
        </h1>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View projects
            <ArrowDown size={15} strokeWidth={2} />
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
