import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Gamepad2, Monitor, Package, Shapes, Smartphone } from "lucide-react";
import type { Project, ProjectCategory } from "../data/profile";
import { projects } from "../data/profile";
import { GithubIcon } from "./BrandIcons";
import SectionHead from "./SectionHead";
import "./Projects.css";

const categoryIcon: Record<ProjectCategory, LucideIcon> = {
  mobile: Smartphone,
  desktop: Monitor,
  library: Package,
  game: Gamepad2,
  misc: Shapes,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = categoryIcon[project.category];
  const sheet = `02.${String(index + 1).padStart(2, "0")}`;

  return (
    <article className="project" aria-labelledby={`project-${project.id}`}>
      <div className="corners project__corners" aria-hidden="true" />

      <div className="project__head">
        <span className="project__category">
          <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
          <span className="label">{project.category}</span>
        </span>
        <span className="project__sheet" aria-hidden="true">
          {sheet}
        </span>
      </div>

      <h3 id={`project-${project.id}`} className="project__name">
        {project.name}
      </h3>
      <p className="project__desc">{project.description}</p>

      <ul className="chips chips--quiet" aria-label={`${project.name} technologies`}>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="project__links">
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <GithubIcon size={14} />
          Code
          <span className="visually-hidden"> for {project.name} on GitHub</span>
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
            {project.liveLabel ?? "View"}
            <span className="visually-hidden"> for {project.name}</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHead id="projects-title" sheet="02" title="Projects" />

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
