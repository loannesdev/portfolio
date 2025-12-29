import { sections } from "../utils/const";

export class SystemUtilities {
  static darkMode() {
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

  static getNav(sectionId = "") {
    const navList = document.querySelectorAll(".navigation-link");

    const navElement = Object.values(navList).find(
      (elm) => elm.dataset.id === sectionId
    );

    return navElement;
  }

  static debounce(func, delay = 50) {
    let timeout = null;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  }

  static navHighlight() {
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
            this.getNav(currentSection.id).classList.remove("visible");
          }

          currentSection = section;
        }
      }

      this.getNav(currentSection?.id).classList.add("visible");
    };

    const debouncedScroll = this.debounce(onScroll, 10);
    window.addEventListener("scroll", debouncedScroll);

    onScroll();
  }
}

export class ResumeUtilities {
  static calculateTotalExperience(workArray = [], returnAsNumber = false) {
    if (!Array.isArray(workArray) || workArray.length === 0) {
      return returnAsNumber ? 0 : "0 meses";
    }

    let totalMonths = 0;

    for (const job of workArray) {
      const { startDate, endDate } = job;

      if (!startDate) continue;

      const start = new Date(startDate);
      const end = endDate ? new Date(endDate) : new Date();

      // Calcular la diferencia en meses
      const yearsDiff = end.getFullYear() - start.getFullYear();
      const monthsDiff = end.getMonth() - start.getMonth();
      const months = yearsDiff * 12 + monthsDiff;

      totalMonths += months;
    }

    if (returnAsNumber) {
      return Math.round((totalMonths / 12) * 10) / 10;
    }

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
    }

    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'año' : 'años'}`;
    }

    return `${years} ${years === 1 ? 'año' : 'años'} y ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
  }

  static orderExperience(experience = []) {
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
}

export class DateParser {
  static format(date = "", config = {}) {
    const parsedDate = new Date(date);

    if (!(parsedDate instanceof Date) || isNaN(parsedDate)) {
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

    const units = [
      { threshold: 1000 * 60 * 60 * 24 * 365, unit: "year", divisor: 1000 * 60 * 60 * 24 * 365 },
      { threshold: 1000 * 60 * 60 * 24 * 30, unit: "month", divisor: 1000 * 60 * 60 * 24 * 30 },
      { threshold: 1000 * 60 * 60 * 24, unit: "day", divisor: 1000 * 60 * 60 * 24 },
      { threshold: 1000 * 60 * 60, unit: "hour", divisor: 1000 * 60 * 60 },
      { threshold: 1000 * 60, unit: "minute", divisor: 1000 * 60 },
      { threshold: 1000, unit: "second", divisor: 1000 },
    ];

    if (diff < 1000) {
      return "Hace un momento";
    }

    const rtf = new Intl.RelativeTimeFormat('es', { style: 'long' });

    for (const { threshold, unit, divisor } of units) {
      if (diff >= threshold) {
        return rtf.format(-Math.floor(diff / divisor), unit);
      }
    }

    return "Hace un momento";
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

export class TextParser {
  static normalize(text = "") {
    if (typeof text !== "string") {
      throw new Error("'text' must be a string");
    }

    const auxText = text.trim();

    if (!auxText) {
      return "";
    }

    return auxText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/[^a-z0-9\s]/g, "") // remove special characters
  }
}
