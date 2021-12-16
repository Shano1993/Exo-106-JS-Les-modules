import {createDiv, createInput, createLabel} from "./HTML.js";

let result = document.getElementById('result');

result.append(createDiv("div", "Création d'un div via un module"));
result.append(createInput("input", "text", "Mon input de type texte"));
result.append(createInput("input", "password", "Mon input de type password"));
result.append(createLabel("label", "Mon label"));











