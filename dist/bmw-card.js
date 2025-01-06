import {nothing as $5OpyM$nothing, html as $5OpyM$html, LitElement as $5OpyM$LitElement, css as $5OpyM$css} from "lit";



var $b56ad7875c76af36$export$2e2bcd8739ae039 = (0, $5OpyM$css)`
    .error {
        color: red;
    }
    .dl {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .dt {
        display: flex;
        align-content: center;
        flex-wrap: wrap;
    }
    .dd {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, auto) minmax(0, 2fr));
        margin: 0;
    }
    .toggle {
        padding: 0.6em;
        border: grey;
        border-radius: 50%;
    }
    .toggle.on { background-color: green; }
    .toggle.off{ background-color: red; }
    .button {
        display: block;
        border: outset 0.2em;
        border-radius: 50%;
        border-color: silver;
        background-color: silver;
        width: 1.4em;
        height: 1.4em;
    }
    .value {
        padding-left: 0.5em;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
    }
`;


class $de53a9e075e12450$export$4bea8ebf3f6f8075 extends (0, $5OpyM$LitElement) {
    // private property
    _hass;
    // internal reactive states
    static get properties() {
        return {
            _header: {
                state: true
            },
            _entity: {
                state: true
            },
            _name: {
                state: true
            },
            _state: {
                state: true
            },
            _status: {
                state: true
            }
        };
    }
    // lifecycle interface
    setConfig(config) {
        this._header = config.header === "" ? (0, $5OpyM$nothing) : config.header;
        this._entity = config.entity;
        // call set hass() to immediately adjust to a changed entity
        // while editing the entity in the card editor
        if (this._hass) this.hass = this._hass;
    }
    set hass(hass) {
        this._hass = hass;
        this._state = hass.states[this._entity];
        if (this._state) {
            this._status = this._state.state;
            let fn = this._state.attributes.friendly_name;
            this._name = fn ? fn : this._entity;
        }
    }
    // declarative part
    static styles = (0, $b56ad7875c76af36$export$2e2bcd8739ae039);
    render() {
        console.log("RENDER");
        let content;
        if (!this._state) content = (0, $5OpyM$html)`
                <p class="error">
                    ${this._entity} is unavailable.
                </p>
            `;
        else content = (0, $5OpyM$html)`
                <dl class="dl">
                    <dt class="dt">${this._name}</dt>
                    <dd class="dd" @click="${this.doToggle}">
                        <span class="toggle ${this._status}">
                            <span class="button"></span>
                        </span>
                        <span class="value">${this._status}</span>
                    </dd>
                </dl>
            `;
        return (0, $5OpyM$html)`
            <ha-card header="${this._header}">
                <div class="card-content">
                    ${content}
                </div>
            </ha-card>
        `;
    }
    // event handling
    doToggle(event) {
        this._hass.callService("input_boolean", "toggle", {
            entity_id: this._entity
        });
    }
    // card configuration
    static getConfigElement() {
        return document.createElement("bmw-card-editor");
    }
    static getStubConfig() {
        return {
            entity: "input_boolean.tcl",
            header: ""
        };
    }
}



class $62ce92ffd2eddd19$export$b4a0c96d79c32b81 extends (0, $5OpyM$LitElement) {
    static get properties() {
        return {
            // hass: {},
            _config: {
                state: true
            }
        };
    }
    setConfig(config) {
        this._config = config;
    }
    static styles = (0, $5OpyM$css)`
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
    render() {
        return (0, $5OpyM$html)`
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
        // this._config is readonly, copy needed
        var newConfig = Object.assign({}, this._config);
        if (changedEvent.target.id == "header") newConfig.header = changedEvent.target.value;
        else if (changedEvent.target.id == "entity") newConfig.entity = changedEvent.target.value;
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


customElements.define("bmw-card-editor", (0, $62ce92ffd2eddd19$export$b4a0c96d79c32b81));
customElements.define("bwm-card", (0, $de53a9e075e12450$export$4bea8ebf3f6f8075));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "bmw-card",
    name: "BMW Card",
    preview: false,
    description: "BMW Card to show car data from Connected Drive integration.",
    documentationURL: "https://github.com/Jarflux/homeassistant-bmw-card/blob/master/README.md"
});


//# sourceMappingURL=bmw-card.js.map
