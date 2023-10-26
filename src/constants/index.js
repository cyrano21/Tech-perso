import {
  Airbnb,
  Vinted,
  mobile,
  backend,
  creator,
  marvel,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Mon travail",
  },
  {
    id: "contact",
    title: "Contactez-moi",
  },
];

const services = [
  {
    title: "Développeur Web ",
    icon: web,
  },
  {
    title: "Développeur React Native ",
    icon: mobile,
  },
  {
    title: "Développeur Backend ",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];
const experiences = [
  {
    title: "Développeur React.js",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes pluridisciplinaires incluant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mise en œuvre de designs adaptatifs et assurance de la compatibilité entre différents navigateurs.",
      "Participation à des revues de code et fourniture de retours constructifs à d'autres développeurs.",
    ],
  },
  {
    title: "Développeur React Native ",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes pluridisciplinaires incluant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mise en œuvre de designs adaptatifs et assurance de la compatibilité entre différents navigateurs.",
      "Participation à des revues de code et fourniture de retours constructifs à d'autres développeurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies associées.",
      "Collaborer avec des équipes interfonctionnelles comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et assurer la compatibilité entre différents navigateurs.",
      "Participer à des revues de code et fournir des retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Developpeur Full stack ",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies associées.",
      "Travailler en collaboration avec des équipes transversales comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et garantir la compatibilité avec différents navigateurs.",
      "Participer à des revues de code et fournir des retours constructifs aux autres développeurs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Airbnb",
    description:
      "Ce projet est une reproduction de l'application Airbnb, développée avec React Native pour offrir une expérience utilisateur fluide et réactive sur les plateformes iOS et Android.",
    tags: [
      {
        name: "React natine",
        color: "blue-text-gradient",
      },
      {
        name: "React Navigation",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    image: Airbnb,
    source_code_link:
      "https://youtu.be/GGfbJZlWfmk?list=TLGGoRUCaweNHXIyNjEwMjAyMw",
  },
  {
    name: "Marvel",
    description:
      "Ce projet consiste en une reproduction de l'application Marvel, créée pour permettre aux utilisateurs de naviguer et de rechercher des informations sur leurs personnages Marvel préférés.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: marvel,
    source_code_link: "https://lereacteur-marvel.netlify.app",
  },
  {
    name: "Vinted",
    description:
      "Ce projet est une reproduction un peu améliorée de l'application Vinted, une plateforme populaire de vente et d'achat de vêtements d'occasion. Crée d'un Backend personnalisé au Frontend interactif.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Postman",
        color: "",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
    ],
    image: Vinted,
    source_code_link: "https://vinted-my.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
