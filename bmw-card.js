var $2K9WE$swchelperscjs_ts_decoratecjs = require("@swc/helpers/cjs/_ts_decorate.cjs");
var $2K9WE$lit = require("lit");
var $2K9WE$litdecoratorsstate = require("lit/decorators/state");




class $c65d7a5bda122ad1$export$4bea8ebf3f6f8075 extends (0, $2K9WE$lit.LitElement) {
    setConfig(config) {
        this._config = config;
    }
    static{
        this.styles = (0, $2K9WE$lit.css)`
    .table {
      display: table;
    }
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 0.5em;
    }
  `;
    }
    render() {
        return (0, $2K9WE$lit.html)`
            <form class="table">
                <div class="row">
                    <label class="label cell" for="header">Header:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="entity">Entity:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="entity" value="${this._config.entity}"></input>
                </div>
            </form>
        `;
    }
    handleChangedEvent(changedEvent) {
        const target = changedEvent.target;
        // this._config is readonly, copy needed
        const newConfig = Object.assign({}, this._config);
        if (target.id == "header") newConfig.header = target.value;
        else if (target.id == "entity") newConfig.entity = target.value;
        const messageEvent = new CustomEvent("config-changed", {
            detail: {
                config: newConfig
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(messageEvent);
    }
}
(0, $2K9WE$swchelperscjs_ts_decoratecjs._)([
    (0, $2K9WE$litdecoratorsstate.state)()
], $c65d7a5bda122ad1$export$4bea8ebf3f6f8075.prototype, "_config", void 0);





class $36c6e9dbe7d7a524$export$b4a0c96d79c32b81 extends (0, $2K9WE$lit.LitElement) {
    setConfig(config) {
        this._config = config;
    }
    static{
        this.styles = (0, $2K9WE$lit.css)`
    .table {
      display: table;
    }
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 0.5em;
    }
  `;
    }
    render() {
        return (0, $2K9WE$lit.html)`
            <form class="table">
                <div class="row">
                    <label class="label cell" for="header">Header:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="entity">Entity:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="entity" value="${this._config.entity}"></input>
                </div>
            </form>
        `;
    }
    handleChangedEvent(changedEvent) {
        const target = changedEvent.target;
        // this._config is readonly, copy needed
        const newConfig = Object.assign({}, this._config);
        if (target.id == "header") newConfig.header = target.value;
        else if (target.id == "entity") newConfig.entity = target.value;
        const messageEvent = new CustomEvent("config-changed", {
            detail: {
                config: newConfig
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(messageEvent);
    }
}
(0, $2K9WE$swchelperscjs_ts_decoratecjs._)([
    (0, $2K9WE$litdecoratorsstate.state)()
], $36c6e9dbe7d7a524$export$b4a0c96d79c32b81.prototype, "_config", void 0);


customElements.define("bmw-card", (0, $c65d7a5bda122ad1$export$4bea8ebf3f6f8075));
customElements.define("bmw-card-editor", (0, $36c6e9dbe7d7a524$export$b4a0c96d79c32b81));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "bmw-card",
    name: "BMW Card",
    description: "Show BMW information from BMW Connected Drive"
});


//# sourceMappingURL=bmw-card.js.map
