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
]

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
}

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
}

export const technologies = [
  {
    name: "Wouter",
    fav: true,
    website: "https://github.com/molefrog/wouter"
  },
  {
    name: "Redux",
    fav: false,
    iconName: "redux",
    website: "https://redux.js.org"
  },
  {
    name: "Sass",
    fav: true,
    iconName: "sass",
    website: "https://sass-lang.com"
  },
  {
    name: "Jquery",
    fav: false,
    iconName: "jquery",
    website: "https://jquery.com"
  },
  {
    name: "Wordpress",
    fav: false,
    iconName: "wordpress",
    website: "https://wordpress.com"
  },
  {
    name: "Boostrap",
    fav: false,
    website: "https://getbootstrap.com"
  },
  {
    name: "React native paper",
    fav: false,
    website: "https://reactnativepaper.com"
  },
  {
    name: "React native",
    fav: false,
    website: "https://reactnative.dev"
  },
  {
    name: "React",
    fav: false,
    iconName: "react",
    website: "https://reactjs.org"
  },
  {
    name: "Skeleton",
    fav: false,
    website: "hhttp://getskeleton.com"
  },
  {
    name: "Materialize",
    fav: false,
    iconName: "materializecss",
    website: "https://materializecss.com"
  },
  {
    name: "Git",
    fav: true,
    iconName: "git",
    website: "https://git-scm.com/"
  },
  {
    name: "GitHub",
    fav: true,
    iconName: "github",
    website: "https://github.com"
  },
  {
    name: "Sublime Text",
    fav: false,
    iconName: "sublime-text",
    website: "https://www.sublimetext.com"
  },
  {
    name: "NetBeans",
    fav: false,
    website: "https://netbeans.apache.org"
  },
  {
    name: "Android studio",
    fav: false,
    iconName: "android-studio",
    website: "https://developer.android.com/studio"
  },
  {
    name: "Visual studio",
    fav: false,
    iconName: "visual-studio",
    website: "https://visualstudio.microsoft.com/es/#vs-section"
  },
  {
    name: "Visual studio code",
    fav: true,
    iconName: "vscode",
    website: "https://visualstudio.microsoft.com/es/#vscode-section"
  },
  {
    name: "Pg admin",
    fav: false,
    website: "https://www.pgadmin.org",
    iconName: "pgadmin"
  },
  {
    name: "PostGreSQL",
    fav: false,
    iconName: "postgresql",
    website: "https://www.postgresql.org"
  },
  {
    name: "MongoDB",
    fav: false,
    iconName: "mongodb",
    website: "https://www.mongodb.com"
  },
  {
    name: "MySQL",
    fav: false,
    iconName: "mysql",
    website: "https://www.mysql.com"
  },
  {
    name: "phpMyAdmin",
    fav: false,
    website: "https://www.phpmyadmin.net",
    iconName: "phpmyadmin"
  },
  {
    name: "Oracle",
    fav: false,
    iconName: "oracle",
    website: "https://www.oracle.com"
  },
  {
    name: "Python",
    fav: false,
    iconName: "python",
    website: "https://www.python.org"
  },
  {
    name: "C Sharp (C#)",
    fav: false,
    iconName: "c-sharp",
    website: "https://learn.microsoft.com/en-us/dotnet/csharp"
  },
  {
    name: "Visual basic for applications (VBA)",
    fav: false,
    website: "https://learn.microsoft.com/en-us/office/vba",
    iconName: "VBA"
  },
  {
    name: "Java",
    fav: false,
    iconName: "java",
    website: "https://www.java.com"
  },
  {
    name: "Node",
    fav: true,
    iconName: "nodejs",
    website: "https://nodejs.org"
  },
  {
    name: "CSS",
    fav: true,
    iconName: "css",
    website: "https://www.w3.org/Style/CSS"
  },
  {
    name: "JavaScript",
    fav: true,
    iconName: "javascript",
    website: "https://developer.mozilla.org/es/docs/Web/JavaScript"
  },
  {
    name: "PHP",
    fav: false,
    iconName: "php",
    website: "https://www.php.net"
  },
  {
    name: "HTML",
    fav: false,
    iconName: "html",
    website: "https://html.spec.whatwg.org/multipage"
  },
  {
    name: "Supabase",
    fav: true,
    iconName: "supabase",
    website: "https://supabase.com"
  },
  {
    name: "Cypress",
    fav: true,
    iconName: "cypress",
    website: "https://www.cypress.io"
  },
  {
    name: "Vitest",
    fav: false,
    iconName: "vitest",
    website: "https://vitest.dev"
  },
  {
    name: "Vercel",
    fav: true,
    iconName: "vercel",
    website: "https://vercel.com"
  },
  {
    name: "Vite",
    fav: true,
    iconName: "vite",
    website: "https://vitejs.dev"
  },
  {
    name: "React router dom",
    fav: false,
    iconName: "react-router",
    website: "https://reactrouter.com"
  },
  {
    name: "Preact",
    fav: true,
    iconName: "preact",
    website: "https://preactjs.com"
  },
  {
    name: "Token CSS",
    fav: false,
    website: "https://tokencss.com"
  },
  {
    name: "Astro",
    fav: true,
    iconName: "astro",
    website: "https://astro.build"
  },
  {
    name: "Tailwind",
    fav: true,
    iconName: "tailwindcss",
    website: "https://tailwindcss.com/"
  },
  {
    name: "Netlify",
    fav: true,
    iconName: "netlify",
    website: "https://www.netlify.com/"
  },
  {
    name: "Markdown",
    fav: true,
    iconName: "markdown",
    website: "https://www.markdownguide.org/"
  }
]

export const myProjects = [
  {
    id: 449877560,
    name: "media-platform-react",
    description: "Este sitio web permite ver películas, series y perfiles de personas que trabajan o trabajaron en el mundo del cine, también permite guardar medios en favoritos y verlos más tarde.",
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
    html_url: "https://github.com/loannesdev/media-platform-react",
    homepage: "https://media-platform.vercel.app"
  },
  {
    id: 441975261,
    name: "to-do-list-react",
    description: "Lista de tareas simple usando create-react-app y localStorage.",
    topics: [
      "react"
    ],
    html_url: "https://github.com/loannesdev/to-do-list-react",
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
    html_url: "https://github.com/loannesdev/voice-translator",
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
    html_url: "https://github.com/loannesdev/adventJS-2021",
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
    html_url: "",
    homepage: ""
  }
]
