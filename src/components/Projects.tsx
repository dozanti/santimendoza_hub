import type { LucideIcon } from "lucide-react";
import { ExternalLink, Gamepad2, Github, Package, Smartphone, Monitor } from "lucide-react";
import type { Project, ProjectCategory } from "../data/profile";
import { projects } from "../data/profile";
import "./Projects.css";

const categoryIcon: Record<ProjectCategory, LucideIcon> = {
  mobile: Smartphone,
  desktop: Monitor,
  library: Package,
  game: Gamepad2,
  misc: Package,
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category];

  return (
    <article className="project">
      <div className="project__head">
        <Icon size={18} strokeWidth={1.75} className="project__icon" aria-hidden="true" />
        <span className="project__category">{project.category}</span>
      </div>

      <h3 className="project__name">{project.name}</h3>
      <p className="project__desc">{project.description}</p>

      <ul className="project__tech" aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="project__links">
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <Github size={14} strokeWidth={1.75} aria-hidden="true" />
          Code
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} strokeWidth={1.75} aria-hidden="true" />
            {project.liveLabel ?? "View"}
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <h2 className="eyebrow">SM / 02 &mdash; Projects</h2>

        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
