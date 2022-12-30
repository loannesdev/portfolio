export const $ = element => {
  return document.querySelector(element);
}

export const this$ = (t, element) => {
  return t.querySelector(element);
}