class ColoredTag extends HTMLElement {
  constructor() {
    super();

    this.rawColor = `${this.#computedColor()} ${this.#computedColor()} ${this.#computedColor()}`;
    this.rgbColor = `rgb(${this.rawColor})`;
  }

  #computedColor() {
    return Math.floor(Math.random() * 255);
  }

  #changeColor() {
    this.rawColor = `${this.#computedColor()} ${this.#computedColor()} ${this.#computedColor()}`;
    this.rgbColor = `rgb(${this.rawColor})`;
  }

  #setStyles() {
    this.style.backgroundColor = `color-mix(in srgb, transparent 90%, ${this.rgbColor})`;
    this.style.borderColor = this.rgbColor;
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
        transition-duration: .2s;
        transition-timing-function: linear;
        transition-property: background-color, border-color;
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
