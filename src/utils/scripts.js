import { sections } from "../utils/const";

let timeout = null;

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
    (elm) => elm.dataset.id === sectionId
  );

  return navElement;
};

export const navHighlight = () => {
  let currentSection = null;
  const stringIdSections = sections.map((elm) => `#${elm.name}`).join(",");
  const sectionElements = document.querySelectorAll(stringIdSections);

  // Get the top margin of the main sections to calculate the scroll-margin-top value ---
  const sectionScrollmarginTop = getComputedStyle(document.querySelector("main")).getPropertyValue("--section-scroll-margin-top").replace(/[a-zA-Z]/g, "");
  const rootfontSize = getComputedStyle(document.documentElement).fontSize.replace(/[a-zA-Z]/g, "");
  const topMarginPixels = Number(sectionScrollmarginTop) * Number(rootfontSize);
  // ---

  const onScroll = () => {
    for (const section of sectionElements) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= (topMarginPixels + 24)) {
        if (currentSection && currentSection?.id !== section.id) {
          getNav(currentSection.id).classList.remove("visible");
        }

        currentSection = section;
      }
    }

    getNav(currentSection?.id).classList.add("visible");
  };

  window.addEventListener("scroll", () => {
    clearTimeout(timeout);

    timeout = setTimeout(onScroll, 50);
  });

  onScroll();
};

export class DateParser {
  static format(date = "", config = {}) {
    const parsedDate = new Date(date);

    if (!parsedDate instanceof Date) {
      return null;
    }

    return new Intl.DateTimeFormat("es-ES", config).format(parsedDate);
  }

  static relativeTime(startDate = "", endDate = "") {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end - start;

    if (diff < 0) {
      return null;
    }

    const miliseconds = 1000;
    const seconds = miliseconds * 60;
    const hours = seconds * 60;
    const days = hours * 24;
    const months = days * 30;
    const years = days * 365;
    const rtf1 = new Intl.RelativeTimeFormat('es', { style: 'long' });
    let result = "";

    if (diff < miliseconds) {
      return "Hace un momento";
    }

    if (diff < seconds) {
      return rtf1.format(Math.floor(diff / seconds), "second").replace("dentro de ", "");
    }

    if (diff < hours) {
      return rtf1.format(Math.floor(diff / seconds), "minute").replace("dentro de ", "");
    }

    if (diff < days) {
      return rtf1.format(Math.floor(diff / hours), "hour").replace("dentro de ", "");
    }

    if (diff < months) {
      return rtf1.format(Math.floor(diff / days), "day").replace("dentro de ", "");
    }

    if (diff < years) {
      return rtf1.format(Math.floor(diff / months), "month").replace("dentro de ", "");
    }

    return rtf1.format(Math.floor(diff / years), "year").replace("dentro de ", "");
  }

  static timeDiference() {
    const date = new Date();
    const opt = {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };

    const localDate = new Intl.DateTimeFormat("en-US", {
      ...opt,
      timeZone: "America/Bogota",
    }).format(date);
    const dynamicTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dynamicDate = new Intl.DateTimeFormat("en-US", {
      ...opt,
      timeZone: dynamicTimeZone,
    }).format(date);

    const parsedLocalDate = new Date(localDate).getTime();
    const parsedDynamicDate = new Date(dynamicDate).getTime();
    const difference = parsedDynamicDate - parsedLocalDate;
    const diffHours = difference / (1000 * 60 * 60);

    return diffHours;
  }
}

export const orderExperience = (experience = []) => {
  const orderedExperience = experience.toSorted((a, b) => {
    const aEndDate = new Date(a.endDate).getTime();
    const bEndDate = new Date(b.endDate).getTime();

    if (!bEndDate) {
      return aEndDate - bEndDate;
    }

    return bEndDate - aEndDate;
  });

  return orderedExperience
}