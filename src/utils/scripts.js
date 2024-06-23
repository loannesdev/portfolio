export const DOMSelector = string => {
  return document.querySelector(string);
};

export const envVars = import.meta.env;

export const darkMode = () => {
  // Dark mode
  let darkModeValue = localStorage.getItem("theme");
  const systemInDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
