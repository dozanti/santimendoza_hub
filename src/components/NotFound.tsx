import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { profile } from "../data/profile";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `404 — ${profile.brand}`;

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="not-found">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="not-found__header wrap">
        <a href="/" className="not-found__mark" aria-label={`${profile.brand}, home`}>
          <img src="/mark.svg" alt="" width={28} height={28} />
          <span translate="no">{profile.brand}</span>
        </a>
        <span className="not-found__status">HTTP / 404</span>
      </header>

      <main id="main-content" className="not-found__main">
        <div className="not-found__grid" aria-hidden="true" />

        <div className="not-found__content wrap">
          <p className="not-found__coord">ROUTE STATUS / UNMAPPED</p>
          <p className="not-found__code" aria-hidden="true">404</p>
          <h1>Page Not Found</h1>
          <p className="not-found__message">
            This route isn&rsquo;t part of the site map.
          </p>
          <a href="/" className="btn btn--primary">
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            Return Home
          </a>
        </div>

        <div className="not-found__corner not-found__corner--tl" aria-hidden="true" />
        <div className="not-found__corner not-found__corner--tr" aria-hidden="true" />
        <div className="not-found__corner not-found__corner--bl" aria-hidden="true" />
        <div className="not-found__corner not-found__corner--br" aria-hidden="true" />
      </main>
    </div>
  );
}
