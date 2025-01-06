class $de53a9e075e12450$export$4bea8ebf3f6f8075 extends HTMLElement {
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


class $62ce92ffd2eddd19$export$b4a0c96d79c32b81 extends LitElement {
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


customElements.define("bmw-card", (0, $de53a9e075e12450$export$4bea8ebf3f6f8075));
customElements.define("bmw-card-editor", (0, $62ce92ffd2eddd19$export$b4a0c96d79c32b81));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "bmw-card",
    name: "BMW Card",
    description: "BMW Card to show car data from Connected Drive integration.",
    documentationURL: "https://github.com/Jarflux/homeassistant-bmw-card/blob/master/README.md"
});


//# sourceMappingURL=bmw-card.js.map
