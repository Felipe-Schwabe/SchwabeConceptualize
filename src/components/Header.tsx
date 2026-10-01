import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label={`${siteConfig.name}, início`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand__logo" src="/images/felipe-schwabe-logo.png" alt="Logo Felipe Schwabe" width="58" height="58" />
          <span className="brand__name">{siteConfig.name}</span>
        </Link>

        <nav className="site-nav" aria-label="Navegação principal">
          <Link href="/#work">Projetos</Link>
          <Link href="/#about">Sobre</Link>
          <Link href="/#process">Processo</Link>
          <Link href="/#contact">Contato</Link>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu">Menu <span>+</span></summary>
          <nav aria-label="Navegação mobile">
            <Link href="/#work">Projetos</Link>
            <Link href="/#about">Sobre</Link>
            <Link href="/#process">Processo</Link>
            <Link href="/#contact">Contato</Link>
          </nav>
        </details>

        <Link className="header-cta" href="/#contact">
          <span>Falar comigo</span>
          <ArrowIcon />
        </Link>
      </div>
    </header>
  );
}
