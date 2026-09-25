import { profile } from "../data/profile";
import SectionHead from "./SectionHead";
import "./About.css";

const skillGroups = [
  { label: "Languages", items: profile.languages },
  { label: "Focus", items: profile.focus },
];

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHead id="about-title" sheet="01" title="About" />

        <div className="about__grid">
          <p className="about__bio">{profile.bio}</p>

          <div className="about__skills">
            {skillGroups.map((group) => (
              <div key={group.label} className="about__group">
                <h3 className="label">{group.label}</h3>
                <ul className="chips" aria-label={group.label}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
