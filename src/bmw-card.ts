import { css, html, LitElement } from "lit";
import { state } from "lit/decorators/state";

export class BmwCard extends LitElement {
    @state() _config;

    setConfig(config) {
        this._config = config;
    }

    static styles = css`
    .div {
      background-color: dodgerblue;
    }
  `;

    render() {
        return html`
            <div class="bmw-card">
                HELLO WORLD
            </div>
        `;
    }
}