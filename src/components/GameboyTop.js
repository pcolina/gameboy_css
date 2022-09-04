class GameboyTop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

   static get styles() {
       return /* css */`
          :host {
            --height: 26px;
           }

           .container{
             display: flex; 
             padding-bottom: 5px;
             margin-bottom: 5px;
             border-bottom: 2px solid #fffa;  
             height: var(--height); 
             overflow:hidden; 
             border-radius: 12px 12px 0 0;
             box-shadow: 0px 18px 5px -10px #fff inset;
            }

            .container > div {
              border-radius: 0 0 2px 2px;
              border: 1px solid #1111;
              box-shadow: 0 2px 2px #2F2725aa;
            }

            .corner {
              width: 25px;
            }

            .corner.right {
                margin-left: 5px;}

            .corner.left {
                margin-right: 5px;
            }

            .middle{
             width:100%;
            }

            .middle span{
             display: inline-block; 
             font-family:Arial, sans-serif;
             font-size: 12px;
             color: white;
             text-shadow: 1px 2px 2px #0006; 
             border-radius: 15px;
             padding: 1px 4px;
             transform: translate(6px, 1px); 
             margin-top: 0;
             box-shadow: 0px 1px 1px   #0005 inset,
               0px -1px 2px   #fffc inset;
             opacity: 0.8;
            }

            .corner,
            .middle{
                border-radius: 0 0 2px 2px;
                border: 1px solid rgba(0, 0, 0, 0.1); 
                
            }

           

       
           
           `;
  }

connectedCallback() {
   this.render();
}

render() {
   this.shadowRoot.innerHTML = /* html */`
<style>${GameboyTop.styles}</style>
<div class="container"> 
        <div class="corner left"></div>
        <div class="middle">
            <span>◁ OFF·ON ▷</span>
        </div>
        <div class="corner right"></div>
     
</div>`;
}
}

customElements.define("gameboy-top", GameboyTop);