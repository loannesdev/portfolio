class ColoredTag extends HTMLElement {
  constructor() {
    super();

    this.uuid = window.crypto.randomUUID().replaceAll("-", "_");
    this.rawColor = `${this.#computedColor()} ${this.#computedColor()} ${this.#computedColor()}`;
    this.rgbColor = `rgb(${this.rawColor} / 20%)`;
    this.additionalColor = `rgb(${this.rawColor} / 100%)`;
  }

  #computedColor() {
    return Math.floor(Math.random() * 255);
  }

  #changeColor() {
    this.rawColor = `${this.#computedColor()} ${this.#computedColor()} ${this.#computedColor()}`;
    this.rgbColor = `rgb(${this.rawColor} / 20%)`;
    this.additionalColor = `rgb(${this.rawColor} / 100%)`;
  }

  #setStyles() {
    this.style.backgroundColor = this.rgbColor;
    this.style.borderColor = this.additionalColor;
  }

  #isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);
  }

  #listenerCallback() {
    this.#changeColor();
    this.#setStyles();
  }

  connectedCallback() {
    this.#setStyles();

    const styleTag = `
    <style>
      colored-tag {
        transition: .3s background-color ease;
        padding: 4px 12px;
        border-width: 1px;
        border-style: solid;
      }
    </style>
    `;

    this.insertAdjacentHTML("afterbegin", styleTag);

    if (this.#isMobileDevice()) {
      this.addEventListener("pointerover", () => {
        this.#listenerCallback();
      });
    }

    if (!this.#isMobileDevice()) {
      this.addEventListener("mouseover", () => {
        this.#listenerCallback();
      });
    }
  }
}

customElements.define("colored-tag", ColoredTag);
