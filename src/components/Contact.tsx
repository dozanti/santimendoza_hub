import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { social } from "../data/profile";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import SectionHead from "./SectionHead";
import "./Contact.css";

const channels = [
  { label: "X", handle: social.xHandle, href: social.x, Icon: XIcon },
  { label: "LinkedIn", handle: "in/dozanti", href: social.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", handle: "dozanti", href: social.github, Icon: GithubIcon },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <button type="button" className="contact__copy" onClick={copy}>
        {copied ? (
          <Check size={15} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Copy size={15} strokeWidth={1.75} aria-hidden="true" />
        )}
        <span className="contact__copy-text">{copied ? "Copied" : "Copy"}</span>
        <span className="visually-hidden"> {value}</span>
      </button>
      <span className="visually-hidden" role="status">
        {copied ? `${value} copied to clipboard` : ""}
      </span>
    </>
  );
}

export default function Contact() {
  const emails = [
    { label: "Primary", value: social.email },
    { label: "Alternate", value: social.emailAlt },
  ];

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
        <SectionHead id="contact-title" sheet="03" title="Contact" />

        <div className="contact__grid">
          <div className="contact__intro">
            <p className="contact__title">Got something worth building?</p>
            <p className="contact__text">
              Write to me directly &mdash; I read everything that lands in either inbox. You can
              also find me on X, LinkedIn, and GitHub.
            </p>
            <a href={`mailto:${social.email}`} className="btn btn--primary contact__cta">
              Send an email
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <div className="contact__block">
            <div className="corners" aria-hidden="true" />

            <ul className="contact__rows">
              {emails.map((email) => (
                <li key={email.value} className="contact__row">
                  <span className="label">{email.label}</span>
                  <a href={`mailto:${email.value}`} className="contact__value" translate="no">
                    {email.value}
                  </a>
                  <CopyButton value={email.value} />
                </li>
              ))}

              {channels.map(({ label, handle, href, Icon }) => (
                <li key={label} className="contact__row">
                  <span className="label">{label}</span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="contact__value"
                    translate="no"
                  >
                    <Icon size={15} />
                    {handle}
                  </a>
                  <ArrowUpRight size={15} strokeWidth={1.75} className="contact__ext" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
