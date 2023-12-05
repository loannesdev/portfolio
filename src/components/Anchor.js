export default class CustomAnchor extends HTMLElement {
  #getParsedAttributes(attr = {}) {
    const attributesObject = Object.values(attr);
    const parsedAttributes = {};

    for (const iterator of attributesObject) {
      const { name, value } = iterator;
      Object.assign(parsedAttributes, { [name]: value });
    }

    return parsedAttributes;
  }

  connectedCallback() {
    const anchor = document.createElement("a");
    const { isexternalink, ...attr } = this.#getParsedAttributes(this.attributes);

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
