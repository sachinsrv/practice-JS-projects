const btnInEl = document.querySelector(".increase");
const btnDeEl = document.querySelector(".decrease");
const btnReEl = document.querySelector(".reset");
const valueEl = document.querySelector("#value");

let value = 0;

//increase counter
btnInEl.addEventListener("click", function () {
  value += 1;
  console.log(value);
  valueEl.textContent = value;
  changeColor();
});

//decrease counter
btnDeEl.addEventListener("click", function () {
  value -= 1;
  valueEl.textContent = value;
  changeColor();
});

//reset counter
btnReEl.addEventListener("click", function () {
  valueEl.textContent = 0;
  value = 0;
  changeColor();
});

//different color set for inc,dec,reset
function changeColor() {
  if (value < 0) {
    document.getElementById("value").style.color = "red";
  } else if (value > 0) {
    document.getElementById("value").style.color = "green";
  } else {
    document.getElementById("value").style.color = "#222222";
  }
}
