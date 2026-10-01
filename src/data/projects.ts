import type { Project } from "@/types/project";

export const projects = [
  {
    id: 1,
    slug: "heat-form",
    title: "Heat / Form",
    category: "Filme de alimentação",
    industry: "Alimentação / Gastronomia",
    creativeSkill: "Apelo de produto",
    description:
      "Uma exploração de textura, calor e movimento criada para tornar um produto irresistível antes mesmo da primeira mordida.",
    concept:
      "O desejo nasce nos detalhes: a crosta, o molho, o vapor e o instante em que tudo encontra a luz.",
    objective:
      "Demonstrar como direção de fotografia e ritmo podem construir apelo de produto para marcas de alimentação.",
    video: "/videos/projects/heat-form.mp4",
    poster: "/images/projects/heat-form-poster.jpg",
    images: [
      "/images/projects/heat-form-still-01.jpg",
      "/images/projects/heat-form-still-02.jpg",
      "/images/projects/heat-form-still-03.jpg"
    ],
    year: "2026",
    tags: ["Planos macro", "Cinematografia de comida", "Textura", "Movimento"],
    featured: true,
    conceptual: true,
    accent: "#d6ff5f",
    aspect: "wide"
  },
  {
    id: 2,
    slug: "after-hours",
    title: "After Hours",
    category: "Campanha de moda",
    industry: "Moda",
    creativeSkill: "Estilo de vida + identidade",
    description:
      "Um ensaio urbano sobre presença, movimento e a identidade que uma marca deixa no espaço.",
    concept:
      "A roupa é ponto de partida. O verdadeiro produto é a sensação de pertencer a uma cena.",
    objective:
      "Mostrar como direção de arte, elenco e edição podem vender estilo de vida e construir desejo de marca.",
    video: "/videos/projects/after-hours.mp4",
    poster: "/images/projects/after-hours-poster.jpg",
    images: [
      "/images/projects/after-hours-still-01.jpg",
      "/images/projects/after-hours-still-02.jpg",
      "/images/projects/after-hours-still-03.jpg"
    ],
    year: "2026",
    tags: ["Estilo de vida", "Editorial", "Urbano", "Transições"],
    featured: true,
    conceptual: true,
    accent: "#d6ff5f",
    aspect: "portrait"
  },
  {
    id: 3,
    slug: "velour-01",
    title: "Velour / 01",
    category: "Filme de fragrância",
    industry: "Perfume / Luxo",
    creativeSkill: "Filme de produto premium",
    description:
      "Vidro, líquido e luz se encontram em um filme de produto construído para comunicar desejo silencioso.",
    concept:
      "Uma presença quase tátil: reflexos precisos, sombras profundas e tempo desacelerado.",
    objective:
      "Demonstrar direção premium para objetos de alto valor e campanhas que precisam parecer sofisticadas sem excesso.",
    video: "/videos/projects/velour-01.mp4",
    poster: "/images/projects/velour-01-poster.jpg",
    images: [
      "/images/projects/velour-01-still-01.jpg",
      "/images/projects/velour-01-still-02.jpg",
      "/images/projects/velour-01-still-03.jpg"
    ],
    year: "2026",
    tags: ["Vidro", "Reflexos", "Câmera lenta", "Luxo"],
    featured: true,
    conceptual: true,
    accent: "#d6ff5f",
    aspect: "standard"
  },
  {
    id: 4,
    slug: "nocturne-02",
    title: "Nocturne / 02",
    category: "Filme automotivo",
    industry: "Automotivo",
    creativeSkill: "Publicidade cinematográfica",
    description:
      "Escala, velocidade e precisão em um estudo cinematográfico sobre máquina em movimento.",
    concept:
      "O carro não é apenas visto. Ele atravessa a noite, responde à estrada e ocupa o quadro.",
    objective:
      "Provar domínio de linguagem cinematográfica, movimento de câmera e construção de escala para campanhas automotivas.",
    video: "/videos/projects/nocturne-02.mp4",
    poster: "/images/projects/nocturne-02-poster.jpg",
    images: [
      "/images/projects/nocturne-02-still-01.jpg",
      "/images/projects/nocturne-02-still-02.jpg",
      "/images/projects/nocturne-02-still-03.jpg"
    ],
    year: "2026",
    tags: ["Movimento", "Direção noturna", "Detalhes", "Escala"],
    featured: true,
    conceptual: true,
    accent: "#d6ff5f",
    aspect: "wide"
  },
  {
    id: 5,
    slug: "light-living",
    title: "Light / Living",
    category: "Filme de arquitetura",
    industry: "Imóveis / Arquitetura",
    creativeSkill: "Publicidade aspiracional",
    description:
      "Um apartamento contado pela luz, pelos materiais e pelo tipo de vida que pode acontecer dentro dele.",
    concept:
      "Mais do que apresentar espaços, o filme apresenta uma possibilidade de morar.",
    objective:
      "Demonstrar como imóveis e ativos de alto valor podem ser vendidos através de atmosfera, experiência e aspiração.",
    video: "/videos/projects/light-living.mp4",
    poster: "/images/projects/light-living-poster.jpg",
    images: [
      "/images/projects/light-living-still-01.jpg",
      "/images/projects/light-living-still-02.jpg",
      "/images/projects/light-living-still-03.jpg"
    ],
    year: "2026",
    tags: ["Arquitetura", "Luz natural", "Interiores", "Estilo de vida"],
    featured: true,
    conceptual: true,
    accent: "#d6ff5f",
    aspect: "standard"
  },
  {
    id: 6,
    slug: "skin-ritual",
    title: "Skin / Ritual",
    category: "Campanha de beleza",
    industry: "Beleza / Estética",
    creativeSkill: "Pessoas + beleza",
    description:
      "Uma abordagem limpa e sensorial para beleza, cuidado e a relação humana com um ritual diário.",
    concept:
      "Textura de pele, gestos precisos e luz suave transformam cuidado em linguagem visual.",
    objective:
      "Mostrar sensibilidade para pessoas, pele, produto e estética refinada em conteúdos de beleza e bem-estar.",
    video: "/videos/projects/skin-ritual.mp4",
    poster: "/images/projects/skin-ritual-poster.jpg",
    images: [
      "/images/projects/skin-ritual-still-01.jpg",
      "/images/projects/skin-ritual-still-02.jpg",
      "/images/projects/skin-ritual-still-03.jpg"
    ],
    year: "2026",
    tags: ["Pele", "Retrato", "Beleza limpa", "Detalhe"],
    featured: true,
    conceptual: true,
    accent: "#d6ff5f",
    aspect: "portrait"
  },
  {
    id: 7,
    slug: "pulse-01",
    title: "Pulse / 01",
    category: "Filme de tecnologia",
    industry: "Tecnologia",
    creativeSkill: "Lançamento de produto tecnológico",
    description:
      "Um lançamento conceitual para um produto tecnológico, equilibrando precisão, interface e presença física.",
    concept:
      "A tecnologia ganha valor quando é compreendida pelo olhar e sentida no uso.",
    objective:
      "Conectar produto, movimento e interface em uma linguagem de lançamento para marcas de tecnologia.",
    video: "/videos/projects/pulse-01.mp4",
    poster: "/images/projects/pulse-01-poster.jpg",
    images: [
      "/images/projects/pulse-01-still-01.jpg",
      "/images/projects/pulse-01-still-02.jpg",
      "/images/projects/pulse-01-still-03.jpg"
    ],
    year: "2026",
    tags: ["Produto", "Interface", "Macro", "Lançamento"],
    featured: true,
    conceptual: true,
    accent: "#d6ff5f",
    aspect: "wide"
  }
] satisfies Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
