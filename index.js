const body = document.querySelector("body");
const main = body.querySelector("main");
body.removeChild(main);

const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Emily is the champion";