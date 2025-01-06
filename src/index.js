import { BmwCard } from "./bmw-card";
import { BmwCardEditor } from "./bmw-card-editor";

customElements.define("bwm-card", BmwCard);
customElements.define("bmw-card-editor", BmwCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "bmw-card",
    name: "BMW Card",
    preview: false,
    description: "BMW Card to show car data from Connected Drive integration."
});