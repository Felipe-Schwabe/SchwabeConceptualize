import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { StillFrame } from "@/components/StillFrame";
import { VideoFrame } from "@/components/VideoFrame";
import { siteConfig } from "@/config/site";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.creativeSkill}`,
    description: project.description,
    alternates: {
      canonical: `${siteConfig.domain}/projetos/${project.slug}`
    },
    openGraph: {
      title: `${project.title} — ${project.creativeSkill}`,
      description: project.description,
      url: `${siteConfig.domain}/projetos/${project.slug}`,
      images: [{ url: project.poster, width: 1200, height: 800, alt: project.title }]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nextProject = projects[(project.id - 1 + 1) % projects.length];

  return (
    <main className="project-page">
      <section className="project-hero section-shell">
        <div className="project-hero__top">
          <Link className="back-link" href="/#work">
            <ArrowIcon direction="up" /> Voltar aos projetos
          </Link>
          <span>{String(project.id).padStart(2, "0")} / 07</span>
        </div>
        <div className="project-hero__heading">
          <div>
            <div className="eyebrow eyebrow--accent">
              <span className="eyebrow__line" />
              <span>{project.industry} / {project.year}</span>
            </div>
            <h1>{project.title}</h1>
          </div>
          <div className="project-hero__skill">
            <span className="label">Competência criativa</span>
            <strong>{project.creativeSkill}</strong>
            <span>{project.category}</span>
            <span>{project.conceptual ? "Projeto conceitual" : "Projeto comercial"}</span>
          </div>
        </div>
        <VideoFrame
          src={project.video}
          poster={project.poster}
          label={project.title}
          eyebrow={project.industry}
          accent={project.accent}
          artwork={project.slug}
          aspect="wide"
        />
      </section>

      <section className="project-intro section-shell">
        <div className="project-intro__statement">
          <span className="label">Conceito</span>
          <h2>{project.concept}</h2>
        </div>
        <div className="project-intro__details">
          <div>
            <span className="label">Objetivo visual</span>
            <p>{project.objective}</p>
          </div>
          <div>
            <span className="label">Sobre o filme</span>
            <p>{project.description}</p>
          </div>
        </div>
      </section>

      <section className="project-stills section-shell">
        <div className="project-stills__header">
          <div className="eyebrow">
            <span className="eyebrow__line" />
            <span>Desenvolvimento visual</span>
          </div>
          <p>Imagens de referência, materiais e ritmo visual que orientaram a construção.</p>
        </div>
        <div className="project-stills__grid">
          {project.images.map((image, index) => (
            <StillFrame
              key={image}
              src={image}
              alt={`${project.title}, imagem ${index + 1}`}
              label={`${project.title} / 0${index + 1}`}
              artwork={project.slug}
              accent={project.accent}
              className={`still-frame--${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="project-process section-shell">
        <div className="eyebrow eyebrow--accent">
          <span className="eyebrow__line" />
          <span>Processo / da ideia ao frame</span>
        </div>
        <div className="project-process__grid">
          {[
            ["01", "Conceito", "A premissa visual e a sensação que o filme precisa deixar."],
            ["02", "Direção criativa", "Um sistema claro para composição, luz, textura e movimento."],
            ["03", "Desenvolvimento visual", "Referências e composições que tornam a direção concreta."],
            ["04", "Produção com IA", "Novas ferramentas usadas com intenção dentro da direção maior."],
            ["05", "Edição + movimento", "O ritmo final, as transições e os detalhes que completam o filme."]
          ].map(([number, title, text]) => (
            <div className="project-process__item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-next section-shell">
        <span className="label">Próximo projeto</span>
        <Link href={`/projetos/${nextProject.slug}`}>
          <span>{nextProject.title}</span>
          <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}
