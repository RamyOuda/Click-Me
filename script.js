const buttonRef = document.querySelector("button");

let clickCount = +localStorage.getItem("clicks") || 0;

window.onload = () => {
  createText();
  changeColor();
};

function createText() {
  const textElement = document.createElement("p");
  document.body.insertBefore(textElement, buttonRef);
  updateText();
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

function onButtonClicked() {
  changeColor();
  updateNumber();
  updateText();
}

function changeColor() {
  const color = Array.from({ length: 3 })
    .map((_) => randomNumber())
    .join(" ");
  buttonRef.style.backgroundColor = `rgb(${color})`;
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function updateNumber() {
  clickCount++;
  localStorage.clicks = clickCount;
}
