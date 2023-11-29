export class Icon extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute("name");
    this.url = this.getAttribute("url") ?? "../icons";
    this.iconsFolder = import.meta.glob("../icons/**/*.svg", { as: "raw", eager: true });
  }

  connectedCallback() {
    try {
      const partialPath = this.url || "../icons";
      const path = `${partialPath}/${this.name}.svg`;
      const raw = this.iconsFolder[path];
      const html = raw.replace("<svg", `<svg icon="${this.name}"`);

      this.innerHTML = `
      <style>
        svg[icon="${this.name}"] {
          display: flex;
        }
      </style>

      ${html}
      `;
    } catch {
      this.innerHTML = "";
    }

    this.removeAttribute("name");
    this.removeAttribute("url");
  }
}

customElements.define("svg-icon", Icon);
