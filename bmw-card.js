var $2K9WE$swchelperscjs_ts_decoratecjs = require("@swc/helpers/cjs/_ts_decorate.cjs");
var $2K9WE$lit = require("lit");
var $2K9WE$litdecoratorsstate = require("lit/decorators/state");




class $c65d7a5bda122ad1$export$4bea8ebf3f6f8075 extends (0, $2K9WE$lit.LitElement) {
    setConfig(config) {
        this._config = config;
    }
    static{
        this.styles = (0, $2K9WE$lit.css)`
    .div {
      background-color: dodgerblue;
    }
  `;
    }
    render() {
        return (0, $2K9WE$lit.html)`
            <div class="bmw-card">
                HELLO WORLD
            </div>
        `;
    }
}
(0, $2K9WE$swchelperscjs_ts_decoratecjs._)([
    (0, $2K9WE$litdecoratorsstate.state)()
], $c65d7a5bda122ad1$export$4bea8ebf3f6f8075.prototype, "_config", void 0);


customElements.define("bmw-card", (0, $c65d7a5bda122ad1$export$4bea8ebf3f6f8075));
//customElements.define("bmw-card-editor", BmwCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "bmw-card",
    name: "BMW Card",
    description: "Show BMW information from BMW Connected Drive"
});


//# sourceMappingURL=bmw-card.js.map
