import { BmwCard } from "./bmw-card";
import { BmwCardEditor } from "./editor";

declare global {
    interface Window {
        customCards: Array<Object>;
    }
}

customElements.define("bmw-card", BmwCard);
customElements.define("bmw-card-editor", BmwCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "bmw-card",
    name: "BMW Card",
    description: "Show BMW information from BMW Connected Drive",
});