const colors = ["red", "blue", "violet", "green", "yellow"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //const randomColor = 2;
  getRandomColor();
});

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  console.log(randomColor);
  document.querySelector("body").style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
}
