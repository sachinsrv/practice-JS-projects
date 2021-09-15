const colors = ["red", "blue", "violet", "green"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    const randomColor = 2;
    document.querySelector('body').style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});