class gameboyCrystal extends HTMLElement {
   constructor() {
     super();
     this.attachShadow({ mode: "open" });
   }

   static get styles() {
       return /* css */`
          :host {
            --width: 330px;
            --height: 250px;
           }

           .container{
             background: #767189;
             width: var(--width);
             height: var(--height);
             border-radius: 9px 9px 50px 9px;
            }
           `;
   }

connectedCallback() {
   this.render();
}

render() {
   this.shadowRoot.innerHTML = /* html */`
<style>${gameboyCrystal.styles}</style>
<div class="container">
</div>`;
}
}

customElements.define("gameboy-crystal", gameboyCrystal);