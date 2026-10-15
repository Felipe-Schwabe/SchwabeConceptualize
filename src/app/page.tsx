import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { StillFrame } from "@/components/StillFrame";
import { VideoFrame } from "@/components/VideoFrame";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

const rangeItems = [
  "Alimentação",
  "Moda",
  "Automotivo",
  "Beleza",
  "Imóveis",
  "Tecnologia",
  "Produtos"
];

const processSteps = [
  {
    number: "01",
    title: "Entendimento",
    text: "A conversa começa pelo contexto, pelo produto e pelo que precisa ser percebido."
  },
  {
    number: "02",
    title: "Conceito",
    text: "Uma ideia clara organiza a mensagem e define por que esse visual precisa existir."
  },
  {
    number: "03",
    title: "Direção visual",
    text: "Referências, ritmo, luz, materiais e composição ganham uma linguagem própria."
  },
  {
    number: "04",
    title: "Produção",
    text: "Tecnologia e novas ferramentas ampliam as possibilidades sem substituir a direção."
  },
  {
    number: "05",
    title: "Finalização",
    text: "O trabalho chega ao frame final com edição, animação e atenção a cada detalhe."
  }
];

const projectSkills = ["Produto", "Estilo de vida", "Luxo", "Cinema", "Aspiração", "Pessoas", "Tecnologia"];

export default function HomePage() {
  return (
    <main>
      <section className="hero section-shell" id="top">
        <div className="hero__intro">
          <div className="eyebrow eyebrow--accent">
            <span className="eyebrow__line" />
            <span>Desenvolvimento criativo / Direção visual</span>
          </div>
          <h1>
            <span>Ideias que</span>
            <span className="headline-italic">merecem</span>
            <span>ser vistas.</span>
          </h1>
          <div className="hero__lower">
            <p className="hero__summary">
              Criação de campanhas, filmes e experiências visuais para marcas através de direção criativa, tecnologia e novas formas de produção.
            </p>
            <div className="hero__actions">
              <a className="button button--solid" href="#work">
                Explorar projetos <ArrowIcon />
              </a>
              <a className="text-link" href="#contact">
                Falar comigo <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual-wrap">
          <VideoFrame
            src="/videos/showreel.mp4"
            poster="/images/showreel-poster.jpg"
            label="Showreel de Felipe Schwabe"
            eyebrow="Estudos visuais selecionados / 2026"
            accent="#d6ff5f"
            artwork="showreel"
            aspect="hero"
          />
          <div className="hero__visual-note">
            <span>SHOWREEL / 00:45</span>
            <span>7 PROJETOS CONCEITUAIS</span>
          </div>
        </div>

        <div className="hero__footer" aria-label="Informações rápidas">
          <span>{siteConfig.location}</span>
          <span>Publicidade criativa / conteúdo visual</span>
          <span>2026</span>
        </div>
      </section>

      <div className="section-rule section-shell" aria-hidden="true" />

      <section className="work section-shell" id="work">
        <div className="section-heading section-heading--split">
          <div>
            <div className="eyebrow">
              <span className="eyebrow__line" />
              <span>02 / Projetos selecionados</span>
            </div>
            <h2>Trabalho que faz<br /><span className="headline-italic">a ideia aparecer.</span></h2>
          </div>
          <p>
            Sete estudos, sete competências criativas. Cada projeto parte de um setor diferente para mostrar o que uma direção visual bem construída pode fazer por uma marca.
          </p>
        </div>

        <div className="skill-row" aria-label="Competências demonstradas">
          {projectSkills.map((skill, index) => (
            <span key={skill}>
              <i>0{index + 1}</i> {skill}
            </span>
          ))}
        </div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="range section-shell">
        <div className="range__header">
          <div className="eyebrow eyebrow--accent">
            <span className="eyebrow__line" />
            <span>03 / Possibilidades</span>
          </div>
          <p>Uma direção.<br /><span className="headline-italic">Múltiplas possibilidades.</span></p>
        </div>
        <div className="range__list">
          {rangeItems.map((item, index) => (
            <div className="range__item" key={item}>
              <span className="range__number">0{index + 1}</span>
              <span>{item}</span>
              <ArrowIcon />
            </div>
          ))}
        </div>
        <p className="range__footnote">A mesma atenção ao detalhe, aplicada ao que sua marca precisa dizer.</p>
      </section>

      <section className="creative-tech section-shell">
        <div className="creative-tech__aside">
          <div className="eyebrow eyebrow--accent">
            <span className="eyebrow__line" />
            <span>04 / Criatividade × tecnologia</span>
          </div>
          <span className="creative-tech__stamp">IDEIA<br />PRIMEIRO</span>
        </div>
        <div className="creative-tech__content">
          <h2>Tecnologia como ferramenta.<br /><span className="headline-italic">Direção como diferencial.</span></h2>
          <p>
            Minha experiência em desenvolvimento influencia a forma como crio: experimentação, tecnologia e direção visual trabalhando como parte do mesmo processo.
          </p>
          <div className="creative-tech__keywords" aria-label="Áreas de interseção">
            <span>Direção criativa</span>
            <span>Software</span>
            <span>Produção com IA</span>
            <span>Desenvolvimento visual</span>
            <span>Animação</span>
            <span>Experimentação</span>
          </div>
          <div className="creative-tech__quote">
            <span>“</span>
            <strong>A tecnologia amplia as possibilidades. A direção continua humana.</strong>
          </div>
        </div>
      </section>

      <section className="process section-shell" id="process">
        <div className="section-heading section-heading--split">
          <div>
            <div className="eyebrow">
              <span className="eyebrow__line" />
              <span>05 / Processo</span>
            </div>
            <h2>Da ideia<br /><span className="headline-italic">ao frame.</span></h2>
          </div>
          <p>Um processo enxuto para que cada decisão visual tenha intenção — da orientação inicial ao último corte.</p>
        </div>
        <div className="process-list">
          {processSteps.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="process-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="process-step__mark">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about__image">
          <StillFrame
            src="/images/felipe-schwabe.jpg"
            alt="Retrato editorial de Felipe Schwabe"
            label="Felipe Schwabe"
            artwork="portrait"
            accent="#d6ff5f"
          />
          <span className="about__image-note">Retrato / estudo visual</span>
        </div>
        <div className="about__content">
          <div className="eyebrow eyebrow--accent">
            <span className="eyebrow__line" />
            <span>06 / Sobre Felipe</span>
          </div>
          <h2>Por trás da<br /><span className="headline-italic">direção.</span></h2>
          <p className="about__lead">
            Sou desenvolvedor de software e criador visual. Trabalho na interseção entre tecnologia, publicidade e direção criativa, explorando novas formas de transformar produtos, ideias e marcas em experiências visuais.
          </p>
          <div className="about__details">
            <div>
              <span className="label">Atualmente</span>
              <strong>Software Developer</strong>
              <span>{siteConfig.company}</span>
            </div>
            <div>
              <span className="label">Formação</span>
              <strong>Engenharia de Software</strong>
              <span>Católica de Santa Catarina</span>
            </div>
            <div>
              <span className="label">Base</span>
              <strong>{siteConfig.age} anos</strong>
              <span>{siteConfig.location}</span>
            </div>
          </div>
          <p className="about__role">{siteConfig.role}</p>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact__top">
          <div className="eyebrow eyebrow--accent">
            <span className="eyebrow__line" />
            <span>07 / Contato</span>
          </div>
          <span className="contact__index">FS / 2026</span>
        </div>
        <h2>Tem uma ideia?<br /><span className="headline-italic">Vamos fazer a sua merecer ser vista.</span></h2>
        <div className="contact__bottom">
          <p>Projetos, campanhas, conteúdos e colaborações.</p>
          <div className="contact__actions">
            <a className="button button--light" href={`mailto:${siteConfig.email}`}>
              Falar sobre um projeto <ArrowIcon />
            </a>
            <a className="contact__email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <div className="contact__socials">
              {siteConfig.instagramUrl ? (
                <a className="contact__social-link" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="Abrir Instagram de Felipe Schwabe">
                  <span>Instagram</span>
                  <ArrowIcon />
                </a>
              ) : null}
              {siteConfig.linkedinUrl ? (
                <a className="contact__social-link" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn de Felipe Schwabe">
                  <span>LinkedIn</span>
                  <ArrowIcon />
                </a>
              ) : null}
              {!siteConfig.instagramUrl && !siteConfig.linkedinUrl ? <span>Instagram / LinkedIn em breve</span> : null}
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>Felipe Schwabe</span>
        <span>{siteConfig.role}</span>
        <span>{siteConfig.location} · 2026</span>
        <span>schwabeconceptualize.com</span>
        <a href="#top">Voltar ao topo <ArrowIcon direction="up" /></a>
      </footer>
    </main>
  );
}
