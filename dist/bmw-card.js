var $de53a9e075e12450$exports = {};
class $de53a9e075e12450$var$BmwCard extends HTMLElement {
    // Whenever the state changes, a new `hass` object is set. Use this to
    // update your content.
    set hass(hass) {
        // Initialize the content if it's not there yet.
        if (!this.content) {
            this.innerHTML = `
        <ha-card header="Example-card">
          <div class="card-content"></div>
        </ha-card>
      `;
            this.content = this.querySelector("div");
        }
        const entityId = this.config.entity;
        const state = hass.states[entityId];
        const stateStr = state ? state.state : "unavailable";
        this.content.innerHTML = `
      The state of ${entityId} is ${stateStr}!
      <br><br>
      <img src="http://via.placeholder.com/350x150">
    `;
    }
    setConfig(config) {
        if (!config.entity) throw new Error("You need to define an entity");
        this.config = config;
    }
    static getConfigElement() {
        return document.createElement("bmw-card-editor");
    }
    getCardSize() {
        return 3;
    }
    getLayoutOptions() {
        return {
            grid_rows: 3,
            grid_columns: 2,
            grid_min_rows: 3,
            grid_max_rows: 3
        };
    }
}


var $62ce92ffd2eddd19$exports = {};
class $62ce92ffd2eddd19$var$BmwCardEditor extends LitElement {
    setConfig(config) {
        this._config = config;
    }
    configChanged(newConfig) {
        const event = new Event("config-changed", {
            bubbles: true,
            composed: true
        });
        event.detail = {
            config: newConfig
        };
        this.dispatchEvent(event);
    }
}


customElements.define("bwm-card", (0, $de53a9e075e12450$exports.BmwCard));
customElements.define("bmw-card-editor", (0, $62ce92ffd2eddd19$exports.BmwCardEditor));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "bmw-card",
    name: "BMW Card",
    description: "BMW Card to show car data from Connected Drive integration.",
    documentationURL: "https://github.com/Jarflux/homeassistant-bmw-card/blob/master/README.md"
});


//# sourceMappingURL=bmw-card.js.map
