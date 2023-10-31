export class Icon extends HTMLElement {
  name = this.getAttribute("name");
  url = this.getAttribute("url") ?? "/icons";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    if (this.url && this.name) {
      const path = `${this.url}/${this.name}.svg?raw`;
      const { default: raw } = await import(path);

      const html = raw.replace("<svg", `<svg icon="${this.name}"`);
      this.outerHTML = html;

      return;
    }

    this.outerHTML = "";
  }
}

customElements.define("svg-icon", Icon);
