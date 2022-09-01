
class GameboyConsole extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 380px;
        --height: 625px;
      }
      .container {
        --gameboy-bottom-depth: linear-gradient(transparent 97.75%, #0004 98.5%, #0005 99%);
        width: var(--width);
        height: var(--height);
        background-color: #d7d2d8;
        background-image:
          linear-gradient(-31deg, #8b8b8b 0 75px, transparent 80px),
          var(--gameboy-bottom-depth);
        border-radius: 12px 12px 75px 12px;
        box-shadow:
          0 0 10px #0007,
          1px 0 10px 3px #0008 inset;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
      }
    
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyConsole.styles}</style>
    <div class="container">
     
    </div>`;
  }
}

customElements.define("gameboy-console", GameboyConsole);