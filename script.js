const buttonRef = document.querySelector("button");

let clickCount = +localStorage.getItem("clicks") || 0;

window.onload = (event) => {
  createText();
};

function createText() {
  const text = document.createElement("p");

  document.body.insertBefore(text, buttonRef);

  updateText();
}

function updateText() {
  const textRef = document.querySelector("p");

  switch (clickCount) {
    case 0:
      textRef.innerText = "Click the button!";
      break;
    case 1:
      textRef.innerText = "You've clicked 1 time!";
      break;
    default:
      textRef.innerText = `You've clicked ${clickCount} times!`;
  }
}

function onButtonClicked() {
  changeColor();
  updateNumber();
}

function changeColor() {
  const color = `rgb(${randomNumber()} ${randomNumber()} ${randomNumber()})`;

  buttonRef.style.backgroundColor = color;
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function updateNumber() {
  clickCount++;
  localStorage.clicks = clickCount;
  updateText();
}
