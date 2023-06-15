const container = document.querySelector(".container")
const drawingArea = document.querySelector(".drawing-area")
const buttons = document.querySelectorAll("button") 

buttons.forEach(button => button.addEventListener('click', () => {
    if(button.id !=="clear"){
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    }
  }));
const colorPicker = document.getElementById("color-picker")


for (let x = 0; x < 30; x++) {
    const square = document.createElement("div")
    square.classList.add("square")
    drawingArea.appendChild(square)
}
for (let y = 0; y < 29; y++) {
    const clone = drawingArea.cloneNode(true)
    container.appendChild(clone)   
}
const squares = document.querySelectorAll(".square")
colorPicker.addEventListener("input",()=>{
    const selectedColor = colorPicker.value
    squares.forEach(square => square.addEventListener('mouseover',()=> {
        square.style.backgroundColor = selectedColor  
})) 
})


const clear = document.getElementById("clear")

clear.addEventListener('click',()=> {
    squares.forEach(square => square.style.backgroundColor = "white")
})

const inputRange = document.getElementById("size-range")
const sizeSpans = document.querySelectorAll(".size-span")

inputRange.addEventListener("input",()=>{
    const rangeValue = inputRange.value
    sizeSpans.forEach(size => size.textContent = rangeValue)
})