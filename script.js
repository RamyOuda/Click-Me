const buttonRef = document.querySelector("button");
const textRef = document.querySelector("p");

let clickCount = localStorage.getItem("clicks") | 0;

window.onload = (event) => {
  updateText();
};

function changeColor() {
  const RGB = `rgb(${randomNumber()} ${randomNumber()} ${randomNumber()})`;

  clickCount++;

  buttonRef.style.backgroundColor = RGB;

  updateText();

  localStorage.clicks = clickCount;
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function updateText() {
  textRef.innerText = `You've clicked ${clickCount} times`;
}
