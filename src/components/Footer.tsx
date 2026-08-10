import { profile, social } from "../data/profile";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <a href={social.github} target="_blank" rel="noopener noreferrer">
          {social.github.replace(/^https?:\/\//, "")}
        </a>
      </div>
    </footer>
  );
}
