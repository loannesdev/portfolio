import { sections } from "../utils/const";

export const DOMSelector = (string) => {
  return document.querySelector(string);
};

export const darkMode = () => {
  // Dark mode
  let darkModeValue = localStorage.getItem("theme");
  const systemInDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (systemInDarkMode && !darkModeValue) {
    darkModeValue = "dark";
  }

  if (!darkModeValue) {
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
  }

  if (darkModeValue) {
    document.documentElement.setAttribute("theme", darkModeValue);
    localStorage.setItem("theme", darkModeValue);
  }
};

export const getParsedAttributes = (attr = {}) => {
  const attributesObject = Object.values(attr);
  const parsedAttributes = {};

  for (const iterator of attributesObject) {
    const { name, value } = iterator;
    Object.assign(parsedAttributes, { [name]: value });
  }

  return parsedAttributes;
};

const getNav = (sectionId = "") => {
  const navList = document.querySelectorAll(".navigation-list>ul>li>a");

  const navElement = Object.values(navList).find(
    (elm) => elm.getAttribute("data-id") === sectionId
  );

  return navElement;
};

export const navHighlight = () => {
  const stringIdSections = sections.map((elm) => `#${elm.name}`).join(",");
  const sectionElements = document.querySelectorAll(stringIdSections);
  let currentSection = null;

  const onScroll = () => {
    for (const section of sectionElements) {
      const rect = section.getBoundingClientRect();

      if (rect.top < 100) {
        if (currentSection && currentSection?.id !== section.id) {
          getNav(currentSection.id).classList.remove("visible");
        }

        currentSection = section;
      }
    }

    getNav(currentSection.id).classList.add("visible");
  };

  window.addEventListener("scroll", () => {
    onScroll();
  });

  onScroll();
};
