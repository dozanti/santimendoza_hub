import { profile, social } from "../data/profile";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import "./Footer.css";

const links = [
  { label: "GitHub", href: social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: social.linkedin, Icon: LinkedinIcon },
  { label: "X", href: social.x, Icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p suppressHydrationWarning>
          &copy; {new Date().getFullYear()} <span translate="no">{profile.brand}</span> &mdash;{" "}
          <span translate="no">{profile.name}</span>
        </p>

        <ul className="footer__links">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer me" aria-label={label}>
                <Icon size={15} />
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${social.email}`} className="footer__email" translate="no">
              {social.email}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
