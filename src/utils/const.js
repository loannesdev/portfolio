import { envVars } from "./scripts";

export const lookingForAJob = true;

export const socialMedia = [
  {
    link: "https://www.linkedin.com/in/sebastian-cc/",
    icon: "linkedin",
    name: "linkedin"
  },
  {
    link: "https://github.com/loannesdev",
    icon: "github",
    name: "github"
  },
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

export const urlDomain = "https://loannesdev.netlify.app";

export const openGraphImage = "/og-image.webp";
