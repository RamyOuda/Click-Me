const clickButtonRef = document.querySelector(".update");
const resetButtonRef = document.querySelector(".reset");

let clickCount = +localStorage.getItem("clicks") || 0;

createText();

function createText() {
  const textElement = document.createElement("p");
  document.body.insertBefore(textElement, clickButtonRef);

  updateText();
  updateResetButton();
}

function updateText() {
  const textRef = document.querySelector("p");
  textRef.innerText = getText();
}

function getText() {
  switch (clickCount) {
    case 0:
      return "Click the button!";
    case 1:
      return "You've clicked 1 time!";
    default:
      return `You've clicked ${clickCount} times!`;
  }
}

function update() {
  changeColor();
  updateNumber();
  updateText();
  updateResetButton();
}

function reset() {
  clickCount = 0;
  localStorage.clicks = clickCount;

  updateText();
  updateResetButton();
}

function updateResetButton() {
  const display = clickCount ? "inline-block" : "none";
  resetButtonRef.style.display = display;
}

function changeColor() {
  let hexcode = "#";

  while (hexcode.length < 7) {
    hexcode += randomHex();
  }

  clickButtonRef.style.backgroundColor = hexcode;
}

function randomHex() {
  return Math.floor(Math.random() * 0x10).toString(16);
}

function updateNumber() {
  clickCount++;
  localStorage.clicks = clickCount;
}
