export const $ = string => {
  return document.querySelector(string);
};

export const envVars = import.meta.env;
