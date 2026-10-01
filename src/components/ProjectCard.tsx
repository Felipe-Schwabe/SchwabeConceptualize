import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { VideoFrame } from "@/components/VideoFrame";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${index + 1}`}>
      <Link className="project-card__link" href={`/projetos/${project.slug}`} aria-label={`Abrir projeto ${project.title}`}>
        <div className="project-card__media">
          <VideoFrame
            src={project.video}
            poster={project.poster}
            label={project.title}
            eyebrow={project.industry}
            accent={project.accent}
            artwork={project.slug}
            aspect={project.aspect}
          />
          <span className="project-card__open">
            <ArrowIcon />
          </span>
        </div>
        <div className="project-card__caption">
          <div className="project-card__heading">
            <span className="project-card__number">{String(project.id).padStart(2, "0")}</span>
            <h3>{project.title}</h3>
          </div>
          <div className="project-card__meta">
            <span>{project.industry}</span>
            <strong>{project.creativeSkill}</strong>
            <span>{project.conceptual ? "Projeto conceitual" : "Projeto comercial"} · {project.year}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
