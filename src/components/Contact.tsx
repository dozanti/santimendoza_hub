import { Linkedin, Mail } from "lucide-react";
import { social } from "../data/profile";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <p className="eyebrow">SM / 03 &mdash; Contact</p>

        <h2 className="contact__title">Got something worth building?</h2>
        <p className="contact__text">
          Write to me directly &mdash; I read everything that lands in either inbox.
        </p>

        <div className="contact__actions">
          <a href={`mailto:${social.email}`} className="btn btn--primary">
            <Mail size={15} strokeWidth={2} aria-hidden="true" />
            {social.email}
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            <Linkedin size={15} strokeWidth={2} aria-hidden="true" />
            LinkedIn
          </a>
        </div>

        <a href={`mailto:${social.emailAlt}`} className="contact__alt">
          or {social.emailAlt}
        </a>
      </div>
    </section>
  );
}
