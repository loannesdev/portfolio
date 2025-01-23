export const lookingForAJob = false;

export const envVars = import.meta.env;

export const sections = [
  {
    name: "home",
    text: "Inicio",
  },
  {
    name: "about",
    text: "Sobre mí",
  },
  { name: "experience", text: "Experiencia" },
  {
    name: "projects",
    text: "Proyectos personales",
  },
  {
    name: "knowledge",
    text: "Conocimientos",
  }/* ,
  {
    name: "suggestions",
    text: "Recomendaciones",
  }, */
];

export const github = {
  api: "https://api.github.com",
  user: "loannesdev",
  path: {
    users: "/users",
    repos: "/repos",
    contents: "/contents",
  },
  cv: {
    name: envVars.PUBLIC_CV_NAME,
    file: envVars.PUBLIC_CV_FILE,
  },
  projects: "https://github.com/loannesdev?tab=repositories",
};

export const urlDomain = "https://loannesdev.netlify.app";

export const contentCreators = [
  {
    name: "Midudev",
    role: "Ingeniero de software",
    social: [
      {
        key: "website",
        url: "https://midu.dev/",
      },
      {
        key: "twitter",
        url: "https://x.com/midudev",
      },
      {
        key: "twitch",
        url: "https://www.twitch.tv/midudev",
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/c/midudev",
      },
      {
        key: "linkedin",
        url: "https://linkedin.com/in/midudev",
      },
      {
        key: "instagram",
        url: "https://www.instagram.com/midu.dev/",
      },
    ],
    photo: "https://unavatar.io/twitter/midudev",
  },
  {
    name: "ManzDev",
    role: "Desarrollador web y profesor",
    social: [
      {
        key: "website",
        url: "https://manz.dev/",
      },
      {
        key: "twitter",
        url: "https://x.com/manz",
      },
      {
        key: "twitch",
        url: "https://www.twitch.tv/ManzDev",
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/@ManzDev",
      },
      {
        key: "linkedin",
        url: "https://www.linkedin.com/in/joseromanhdez/",
      },
      {
        key: "instagram",
        url: "https://www.instagram.com/manz.dev/",
      },
    ],
    photo: "https://unavatar.io/twitter/manz",
  },
  {
    name: "Fernando Herrera",
    role: "Desarrollador full-stack y profesor",
    social: [
      {
        key: "website",
        url: "https://fernando-herrera.com/",
      },
      {
        key: "twitter",
        url: "https://x.com/fernando_her85",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: null,
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: "https://www.instagram.com/fernando_her85/",
      },
    ],
    photo: "https://unavatar.io/twitter/fernando_her85",
  },
  {
    name: "UXAnaRangel",
    role: "Lider UX y diseñadora de producto",
    social: [
      {
        key: "website",
        url: null,
      },
      {
        key: "twitter",
        url: null,
      },
      {
        key: "twitch",
        url: "https://www.twitch.tv/UXAnaRangel",
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/@ux.ana.rangel",
      },
      {
        key: "linkedin",
        url: "https://www.linkedin.com/in/ux-ana-rangel",
      },
      {
        key: "instagram",
        url: "https://www.instagram.com/ux.ana.rangel",
      },
    ],
    photo: "https://unavatar.io/UXAnaRangel",
  },
  {
    name: "Jhey",
    role: "Ingeniero web sénior, desarrollador creativo, creador de contenidos",
    social: [
      {
        key: "website",
        url: "https://jhey.dev/",
      },
      {
        key: "twitter",
        url: "https://x.com/jh3yy",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/JheyTompkins",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: "https://instagram.com/jh3yyyy",
      },
    ],
    photo: "https://unavatar.io/twitter/jh3yy",
  },
  {
    name: "Adam Argyle",
    role: "Ingeniero de relaciones con desarrolladores en Google, experto en CSS, creador de contenido",
    social: [
      {
        key: "website",
        url: "https://nerdy.dev/",
      },
      {
        key: "twitter",
        url: "https://x.com/argyleink",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/channel/UCBGr3ZMcV5jke40_Wrv3fNA",
      },
      {
        key: "linkedin",
        url: "https://www.linkedin.com/in/adamargyle/",
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/argyleink",
  },
  {
    name: "Una Kravets",
    role: "Developer Advocate at Google, CSS Expert, Content Creator",
    social: [
      {
        key: "website",
        url: "https://una.im/",
      },
      {
        key: "twitter",
        url: "https://x.com/Una",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: null,
      },
      {
        key: "linkedin",
        url: "https://www.linkedin.com/in/unakravets/",
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/Una",
  },
  {
    name: "CodelyTV",
    role: "Plataforma educativa para programadores",
    social: [
      {
        key: "website",
        url: "https://codely.com/",
      },
      {
        key: "twitter",
        url: "https://x.com/CodelyTV",
      },
      {
        key: "twitch",
        url: "https://www.twitch.tv/codelytv",
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/@CodelyTV",
      },
      {
        key: "linkedin",
        url: "https://linkedin.com/in/codelytv",
      },
      {
        key: "instagram",
        url: "https://instagram.com/codelytv",
      },
    ],
    photo: "https://unavatar.io/codelytv",
  },
  {
    name: "Gentleman Programming",
    role: "Arquitecto front-end",
    social: [
      {
        key: "website",
        url: null,
      },
      {
        key: "twitter",
        url: "https://x.com/G_Programming",
      },
      {
        key: "twitch",
        url: "https://www.twitch.tv/gentleman_programming",
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/@GentlemanProgramming",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/G_Programming",
  },
  {
    name: "Jhonatan Mircha",
    role: "UX & Software Engineer, Educator, Content Creator",
    social: [
      {
        key: "website",
        url: "https://jonmircha.com/",
      },
      {
        key: "twitter",
        url: "https://x.com/jonmircha",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/jonmircha",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/jonmircha",
  },
  {
    name: "Juan Villalvazo",
    role: "Ingeniero en computación, desarrollador de aplicaciones móviles, educador",
    social: [
      {
        key: "website",
        url: "https://www.juanvillalvazo.com/",
      },
      {
        key: "twitter",
        url: "https://x.com/TecMotivacional",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: null,
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/TecMotivacional",
  },
  {
    name: "GNDX",
    role: "Ingeniero de aprendizaje Platzi, Microsoft MVP, creador de contenido",
    social: [
      {
        key: "website",
        url: "https://gndx.dev/",
      },
      {
        key: "twitter",
        url: "https://x.com/gndx",
      },
      {
        key: "twitch",
        url: "https://www.twitch.tv/gndxdev",
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/@gndx",
      },
      {
        key: "linkedin",
        url: "https://www.linkedin.com/in/oscarbarajas/",
      },
      {
        key: "instagram",
        url: "https://instagram.com/gndx",
      },
    ],
    photo: "https://unavatar.io/twitter/gndx",
  },
  {
    name: "Héctor de León",
    role: "Ingeniero en computación, arquitecto de software, divulgador de conocimiento",
    social: [
      {
        key: "website",
        url: "https://hdeleon.net/",
      },
      {
        key: "twitter",
        url: "https://x.com/powerhdeleon",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/hdeleonnet",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/powerhdeleon",
  },
  {
    name: "Goncy",
    role: "Ingeniero de soluciones en Vercel, creador de contenidos, embajador de Cypress",
    social: [
      {
        key: "website",
        url: "https://me.gonzalopozzo.com/",
      },
      {
        key: "twitter",
        url: "https://x.com/goncy",
      },
      {
        key: "twitch",
        url: "https://www.twitch.tv/goncypozzo",
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/@goncypozzo",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/goncy",
  },
  {
    name: "Pelao Fredrikson",
    role: "Ingeniero de fiabilidad (SRE) principal en Split Software, embajador CNCF, creador de contenidos",
    social: [
      {
        key: "website",
        url: "https://peladonerd.com/",
      },
      {
        key: "twitter",
        url: "https://x.com/PeladoNerd",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/@PeladoNerd",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/PeladoNerd",
  },
  {
    name: "DotCSV",
    role: "Divulgador de inteligencia artificial, educador, creador de contenido",
    social: [
      {
        key: "website",
        url: null,
      },
      {
        key: "twitter",
        url: "https://x.com/DotCSV",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/dotcsv",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/DotCSV",
  },
  {
    name: "S4vitar",
    role: "CEO y fundador de Hack4u, creador de contenido de Hacking y Ciberseguridad",
    social: [
      {
        key: "website",
        url: null,
      },
      {
        key: "twitter",
        url: "https://x.com/S4vitar",
      },
      {
        key: "twitch",
        url: "https://www.twitch.tv/s4vitaar",
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/s4vitar",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/S4vitar",
  },
  {
    name: "Guillermo Rodas",
    role: "Full-stack JavaScript Developer, Educator, Content Creator",
    social: [
      {
        key: "website",
        url: "https://guillermorodas.com/",
      },
      {
        key: "twitter",
        url: "https://x.com/rodasdev",
      },
      {
        key: "twitch",
        url: "https://twitch.tv/guillermorodas",
      },
      {
        key: "youtube",
        url: "https://youtube.com/guillermorodas",
      },
      {
        key: "linkedin",
        url: "https://linkedin.com/guillermorodas",
      },
      {
        key: "instagram",
        url: "https://instagram.com/rodasdev",
      },
    ],
    photo: "https://unavatar.io/twitter/rodasdev",
  },
  {
    name: "Carmen Ansio",
    role: "Ingeniera UX, CSS expert y educatora",
    social: [
      {
        key: "website",
        url: "https://carmenansio.notion.site/Recursos-c-smicos-b76c220d51ec42239830a6c0ae39b2d9",
      },
      {
        key: "twitter",
        url: "https://x.com/carmenansio",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: "https://www.youtube.com/c/CarmenAnsio",
      },
      {
        key: "linkedin",
        url: null,
      },
      {
        key: "instagram",
        url: null,
      },
    ],
    photo: "https://unavatar.io/twitter/carmenansio",
  },
  {
    name: "Carlos Azaustre",
    role: "Desarrollador JavaScript, educator y creador de contenido",
    social: [
      {
        key: "website",
        url: "https://carlosazaustre.es/",
      },
      {
        key: "twitter",
        url: "https://x.com/carlosazaustre",
      },
      {
        key: "twitch",
        url: "https://twitch.tv/carlosazaustre",
      },
      {
        key: "youtube",
        url: "https://youtube.com/carlosazaustre",
      },
      {
        key: "linkedin",
        url: "https://linkedin.com/in/carlosazaustre",
      },
      {
        key: "instagram",
        url: "https://instagram.com/carlosazaustre",
      },
    ],
    photo: "https://unavatar.io/twitter/carlosazaustre",
  },
  {
    name: "Fazt",
    role: "Desarrollador full-stack, educator y creador de contenido",
    social: [
      {
        key: "website",
        url: "https://faztweb.com/",
      },
      {
        key: "twitter",
        url: "https://twitter.com/fazttech",
      },
      {
        key: "twitch",
        url: null,
      },
      {
        key: "youtube",
        url: "https://youtube.com/fazttech",
      },
      {
        key: "linkedin",
        url: "https://www.linkedin.com/in/fazttech",
      },
      {
        key: "instagram",
        url: "https://www.instagram.com/fazttech/",
      },
    ],
    photo: "https://unavatar.io/twitter/fazttech",
  },
];
