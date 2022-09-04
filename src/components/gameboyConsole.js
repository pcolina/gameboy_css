import "./GameboyTop.js";
import "./GameboyCrystal.js";
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
        --gameboy-bottom-depth:   linear-gradient(transparent 97.75%, #0004 98.5%, #0005  99%);
        
        width: var(--width);
        height: var(--height);
        background-color: #d3ccd3;
        background-image: var(--gameboy-bottom-depth);
        border-radius: 12px 12px 75px 12px;
       
        box-shadow:  
        0 0 10px #0007,
        1px 0 10px 3px #000a inset;

        display:flex;
        flex-direction: column;
        justify-content: space-between; 
      }
    
      .screen-container{
        height: 325px;
        top: 0px; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 25px;
      }

      .controls-container{
        height:275px; 
      }

      .brand{
        color: #302058;
      }

      .brand .company{
        font-family: "Pretendo";
        font-size: 14px;
      }
      .brand .product{
        font-family: "Lato";
        font-size: 22px;
        font-weight:bold;
        font-style: italic;
      }
      
      .brand .tm{
        font-size: 8px;
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
      <gameboy-top></gameboy-top>
      <div class="screen-container">
        <gameboy-crystal></gameboy-crystal>
          <div class="brand">
            <span class="company">Nintendo</span>
            <span class="product">GAME BOY</span>
            <sub class="tm">TM</sub>
          </div>
      </div>
      <div class="controls-container">
      </div>

    </div>`;
  }
}

customElements.define("gameboy-console", GameboyConsole);