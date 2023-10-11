const clickButtonRef = document.querySelector(".update");
const resetButtonRef = document.querySelector(".reset");

let clickCount;

initialize();

function initialize() {
  const textElement = document.createElement("p");
  document.body.insertBefore(textElement, clickButtonRef);
  clickCount = +localStorage.getItem("clicks");

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
    hexcode += Math.floor(Math.random() * 0x10).toString(16);
  }

  clickButtonRef.style.backgroundColor = hexcode;
}

function updateNumber() {
  clickCount++;
  localStorage.clicks = clickCount;
}
