import { envVars } from "./scripts";

export const lookingForAJob = false;

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
  },
  projects: "https://github.com/loannesdev?tab=repositories"
};

export const urlDomain = "https://loannesdev.netlify.app";
