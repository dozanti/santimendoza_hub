import { profile } from "../data/profile";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <h2 className="eyebrow">{profile.monogram} / 01 &mdash; About</h2>

        <div className="about__grid">
          <p className="about__bio">{profile.bio}</p>

          <ul className="about__skills" aria-label="Skills">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
