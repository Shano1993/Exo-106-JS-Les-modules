export {createDiv, createInput, createLabel}

function createDiv(element, txt) {
    let div = document.createElement(element);
    div.innerHTML = txt;
    return div;
}

function createInput(element, type, placeHolder) {
    let input = document.createElement(element);
    input.type = type;
    input.placeholder = placeHolder;
    return input;
}

function createLabel(element, txt) {
    let label = document.createElement(element);
    label.innerHTML = txt;
    return label;
}
