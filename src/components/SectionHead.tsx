import { profile } from "../data/profile";

interface SectionHeadProps {
  id: string;
  sheet: string;
  title: string;
}

export default function SectionHead({ id, sheet, title }: SectionHeadProps) {
  return (
    <div className="section-head">
      <span className="section-head__index" aria-hidden="true">
        {profile.monogram} / {sheet}
      </span>
      <h2 id={id} className="section-head__title">
        {title}
      </h2>
      <span className="section-head__rule" aria-hidden="true" />
    </div>
  );
}
