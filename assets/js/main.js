const boxEl = document.querySelector(".container");
console.log(boxEl);
let containerLength = prompt("to get size, please choose a number for length");
let containerWidth = prompt("to get size, please choose a number for width");
console.log(containerLength);
console.log(containerWidth);
function boxSize(){
boxEl.style.width = containerWidth + "px";
boxEl.style.height = containerLength + "px";
}
btn.addEventListener('click', boxSize)

