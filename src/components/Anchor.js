import { getParsedAttributes } from "../utils/scripts";

class CustomAnchor extends HTMLElement {
  connectedCallback() {
    const anchor = document.createElement("a");
    const { isexternalink, ...attr } = getParsedAttributes(this.attributes);

    if (isexternalink) {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noreferrer noopener");
    }

    for (const key in attr) {
      const value = attr[key];
      anchor.setAttribute(key, value);
    }

    anchor.innerHTML = this.innerHTML;
    this.replaceWith(anchor);
  }
}

customElements.define("custom-anchor", CustomAnchor);
