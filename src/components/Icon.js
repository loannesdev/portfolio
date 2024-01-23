class SvgIcon extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute("name");
    this.url = this.getAttribute("url") ?? "../icons";
    this.iconsFolder = import.meta.glob("../icons/**/*.svg", { as: "raw", eager: true });

    this.removeAttribute("name");
    this.removeAttribute("url");
  }

  connectedCallback() {
    const partialPath = this.url || "../icons";
    const path = `${partialPath}/${this.name}.svg`;
    const raw = this.iconsFolder[path];

    if (raw) {
      const svgDocument = new DOMParser().parseFromString(raw, "image/svg+xml");
      svgDocument.documentElement.setAttribute("icon", this.name);

      this.insertAdjacentHTML("beforebegin", `
        <style>
          svg[icon="${this.name}"] {
            display: flex;
          }
        </style>
      `);
      this.appendChild(svgDocument.documentElement);

      return;
    }

    this.outerHTML = "";
  }
}

customElements.define("svg-icon", SvgIcon);
