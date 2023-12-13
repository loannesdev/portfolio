class SvgIcon extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute("name");
    this.url = this.getAttribute("url") ?? "../icons";
    this.iconsFolder = import.meta.glob("../icons/**/*.svg", { as: "raw", eager: true });
  }

  connectedCallback() {
    const partialPath = this.url || "../icons";
    const path = `${partialPath}/${this.name}.svg`;
    const raw = this.iconsFolder[path];

    if (raw) {
      const svg = document.createElement("svg");

      svg.innerHTML = raw;

      const [firstChild] = svg.children;
      firstChild.setAttribute("icon", this.name);

      this.innerHTML = `
          <style>
            svg[icon="${this.name}"] {
              display: flex;
            }
          </style>
    
          ${svg.innerHTML}
          `;

      return;
    }

    this.outerHTML = "";

    this.removeAttribute("name");
    this.removeAttribute("url");
  }
}

customElements.define("svg-icon", SvgIcon);
