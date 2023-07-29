import { envVars } from "./my_scripts";

export const lookingForAJob = false;

export const socialMedia = [
  {
    link: "https://www.linkedin.com/in/sebastian-cc/",
    icon: "linkedin-svgrepo-com",
    name: "linkedin"
  },
  {
    link: "https://github.com/loannesdev",
    icon: "github-svgrepo-com",
    name: "github"
  }
];

export const sections = {
  home: {
    name: "home",
    text: "Inicio"
  },
  about: {
    name: "about",
    text: "Sobre mí"
  },
  knowledge: {
    name: "knowledge",
    text: "Conocimientos"
  },
  projects: {
    name: "projects",
    text: "Proyectos personales"
  }
};

export const github = {
  api: "https://api.github.com",
  user: "loannesdev",
  path: {
    users: "/users",
    repos: "/repos",
    contents: "/contents"
  },
  cv: {
    name: envVars.PUBLIC_CV_NAME,
    file: envVars.PUBLIC_CV_FILE
  }
};

export const technologies = [
  {
    name: "Wouter",
    isFavorite: true,
    website: "https://github.com/molefrog/wouter"
  },
  {
    name: "Redux",
    isFavorite: false,
    iconName: "redux",
    website: "https://redux.js.org"
  },
  {
    name: "Sass",
    isFavorite: true,
    iconName: "sass",
    website: "https://sass-lang.com"
  },
  {
    name: "Jquery",
    isFavorite: false,
    iconName: "jquery",
    website: "https://jquery.com"
  },
  {
    name: "Wordpress",
    isFavorite: false,
    iconName: "wordpress",
    website: "https://wordpress.com"
  },
  {
    name: "Boostrap",
    isFavorite: false,
    website: "https://getbootstrap.com"
  },
  {
    name: "React native paper",
    isFavorite: false,
    website: "https://reactnativepaper.com"
  },
  {
    name: "React native",
    isFavorite: false,
    website: "https://reactnative.dev"
  },
  {
    name: "React",
    isFavorite: false,
    iconName: "react",
    website: "https://reactjs.org"
  },
  {
    name: "Skeleton",
    isFavorite: false,
    website: "hhttp://getskeleton.com"
  },
  {
    name: "Materialize",
    isFavorite: false,
    iconName: "materializecss",
    website: "https://materializecss.com"
  },
  {
    name: "Git",
    isFavorite: true,
    iconName: "git",
    website: "https://git-scm.com/"
  },
  {
    name: "GitHub",
    isFavorite: true,
    iconName: "github",
    website: "https://github.com"
  },
  {
    name: "Sublime Text",
    isFavorite: false,
    iconName: "sublime-text",
    website: "https://www.sublimetext.com"
  },
  {
    name: "NetBeans",
    isFavorite: false,
    website: "https://netbeans.apache.org"
  },
  {
    name: "Android studio",
    isFavorite: false,
    iconName: "android-studio",
    website: "https://developer.android.com/studio"
  },
  {
    name: "Visual studio",
    isFavorite: false,
    iconName: "visual-studio",
    website: "https://visualstudio.microsoft.com/es/#vs-section"
  },
  {
    name: "Visual studio code",
    isFavorite: true,
    iconName: "vscode",
    website: "https://visualstudio.microsoft.com/es/#vscode-section"
  },
  {
    name: "Pg admin",
    isFavorite: false,
    website: "https://www.pgadmin.org",
    iconName: "pgadmin"
  },
  {
    name: "PostGreSQL",
    isFavorite: false,
    iconName: "postgresql",
    website: "https://www.postgresql.org"
  },
  {
    name: "MongoDB",
    isFavorite: false,
    iconName: "mongodb",
    website: "https://www.mongodb.com"
  },
  {
    name: "MySQL",
    isFavorite: false,
    iconName: "mysql",
    website: "https://www.mysql.com"
  },
  {
    name: "phpMyAdmin",
    isFavorite: false,
    website: "https://www.phpmyadmin.net",
    iconName: "phpmyadmin"
  },
  {
    name: "Oracle",
    isFavorite: false,
    iconName: "oracle",
    website: "https://www.oracle.com"
  },
  {
    name: "Python",
    isFavorite: false,
    iconName: "python",
    website: "https://www.python.org"
  },
  {
    name: "C Sharp (C#)",
    isFavorite: false,
    iconName: "c-sharp",
    website: "https://learn.microsoft.com/en-us/dotnet/csharp"
  },
  {
    name: "Visual basic for applications (VBA)",
    isFavorite: false,
    website: "https://learn.microsoft.com/en-us/office/vba",
    iconName: "VBA"
  },
  {
    name: "Java",
    isFavorite: false,
    iconName: "java",
    website: "https://www.java.com"
  },
  {
    name: "Node",
    isFavorite: true,
    iconName: "nodejs",
    website: "https://nodejs.org"
  },
  {
    name: "CSS",
    isFavorite: true,
    iconName: "css",
    website: "https://www.w3.org/Style/CSS"
  },
  {
    name: "JavaScript",
    isFavorite: true,
    iconName: "javascript",
    website: "https://developer.mozilla.org/es/docs/Web/JavaScript"
  },
  {
    name: "PHP",
    isFavorite: false,
    iconName: "php",
    website: "https://www.php.net"
  },
  {
    name: "HTML",
    isFavorite: false,
    iconName: "html",
    website: "https://html.spec.whatwg.org/multipage"
  },
  {
    name: "Supabase",
    isFavorite: true,
    iconName: "supabase",
    website: "https://supabase.com"
  },
  {
    name: "Cypress",
    isFavorite: true,
    iconName: "cypress",
    website: "https://www.cypress.io"
  },
  {
    name: "Vitest",
    isFavorite: false,
    iconName: "vitest",
    website: "https://vitest.dev"
  },
  {
    name: "Vercel",
    isFavorite: true,
    iconName: "vercel",
    website: "https://vercel.com"
  },
  {
    name: "Vite",
    isFavorite: true,
    iconName: "vite",
    website: "https://vitejs.dev"
  },
  {
    name: "React router dom",
    isFavorite: false,
    iconName: "react-router",
    website: "https://reactrouter.com"
  },
  {
    name: "Preact",
    isFavorite: true,
    iconName: "preact",
    website: "https://preactjs.com"
  },
  {
    name: "Token CSS",
    isFavorite: false,
    website: "https://tokencss.com"
  },
  {
    name: "Astro",
    isFavorite: true,
    iconName: "astro",
    website: "https://astro.build"
  },
  {
    name: "Tailwind",
    isFavorite: true,
    iconName: "tailwindcss",
    website: "https://tailwindcss.com/"
  },
  {
    name: "Netlify",
    isFavorite: true,
    iconName: "netlify",
    website: "https://www.netlify.com/"
  },
  {
    name: "Markdown",
    isFavorite: true,
    iconName: "markdown",
    website: "https://www.markdownguide.org/"
  }
];

export const myProjects = [
  {
    id: 449877560,
    name: "media-platform-react",
    description: "Este sitio web permite ver películas, series y perfiles de personas que trabajan o trabajaron en el mundo del cine, también permite guardar medios en isFavoriteoritos y verlos más tarde.",
    topics: [
      "cypress",
      "heroicons",
      "izitoast",
      "react",
      "scss",
      "supabase",
      "tmdb",
      "vercel",
      "vite",
      "vitest"
    ],
    htmlUrl: "https://github.com/loannesdev/media-platform-react",
    homepage: "https://media-platform.vercel.app"
  },
  {
    id: 441975261,
    name: "to-do-list-react",
    description: "Lista de tareas simple usando create-react-app y localStorage.",
    topics: [
      "react"
    ],
    htmlUrl: "https://github.com/loannesdev/to-do-list-react",
    homepage: "https://loannesdev.github.io/to-do-list-react"
  },
  {
    id: 560662429,
    name: "voice-translator",
    description: null,
    topics: [
      "openmoji",
      "preact",
      "tailwind",
      "vercel",
      "vite"
    ],
    htmlUrl: "https://github.com/loannesdev/voice-translator",
    homepage: "https://voice-translator.vercel.app/"
  },
  {
    id: 598360121,
    name: "adventJS-2021",
    description: "Retos del adventJS (2021) resueltos",
    topics: [
      "javascript",
      "markdown"
    ],
    htmlUrl: "https://github.com/loannesdev/adventJS-2021",
    homepage: ""
  },
  {
    id: 101,
    name: "portfolio",
    description: "???",
    topics: [
      "javascript",
      "markdown"
    ],
    htmlUrl: "",
    homepage: ""
  }
];
