import { getParsedAttributes } from "../utils/scripts";

class CustomAnchor extends HTMLElement {
  constructor() {
    super();
    this.anchor = document.createElement("a");
    const { isexternallink, ...attr } = getParsedAttributes(this.attributes);

    if (isexternallink) {
      this.anchor.setAttribute("target", "_blank");
      this.anchor.setAttribute("rel", "noreferrer noopener");
    }

    for (const key in attr) {
      const value = attr[key];
      this.anchor.setAttribute(key, value);
    }

    this.anchor.innerHTML = this.innerHTML;
    this.replaceWith(this.anchor);
  }
}

customElements.define("custom-anchor", CustomAnchor);
