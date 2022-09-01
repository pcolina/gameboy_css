class GameboyTop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

   static get styles() {
       return /* css */`
          :host {

           }

           .container{
             display: flex; 
             padding-bottom: 5px;
             margin-bottom: 5px;
             border-bottom: 1px solid #0001; 
            }

            .corner {
              width: 25px;
              height: 20px; 
            }

            .corner.right {
                margin-left: 5px;}

            .corner.left {
                margin-right: 5px;
            }

            .middle{
             width:100%;
            }

            .corner,
            .middle{
                border-radius: 0 0 2px 2px;
                border: 1px solid rgba(0, 0, 0, 0.1);
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
                
            }

        //    .gbtop {
        //     display: flex;
        //     padding-bottom: 5px;
        //     margin-bottom: 5px;
        //     border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        //     & .corner {
        //       width: 25px;
        //       height: 20px;
        //     }
        //     & .corner.left {
        //       margin-right: 5px;
        //     }
        //     & .corner.right {
        //       margin-left: 5px;
        //     }
        //     & .top {
        //       width: 100%;
        //       & span {
        //         font-family: Arial, sans-serif;
        //         font-size: 12px;
        //         box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5) inset;
        //         text-shadow: 2px 1px 2px rgba(0, 0, 0, 1);
        //         color: #eee;
        //         border-radius: 15px;
        //         margin: 0 6px;
        //         padding: 2px 5px;
        //         opacity: 0.25;
        //       }
        //     }
        //     & .left,
        //     & .top,
        //     & .right {
        //       border-radius: 0 0 2px 2px;
        //       border: 1px solid rgba(0, 0, 0, 0.1);
        //       box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
        //     }
           
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