const container = document.querySelector(".container");
const drawingArea = document.querySelector(".drawing-area");
const buttons = document.querySelectorAll("button");
const sizeSpans = document.querySelectorAll(".size-span");

let gridSize = 16;

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.id !== "clear") {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    }
  })
);

const colorPicker = document.getElementById("color-picker");

function createGrid() {
  drawingArea.innerHTML = "";

  for (let x = 0; x < gridSize; x++) {
    const row = document.createElement("div");
    row.classList.add("row");
    drawingArea.appendChild(row);
    for (let y = 0; y < gridSize; y++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }

  let gridWidth = container.offsetWidth / gridSize;

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.width = `${gridWidth}px`;
    square.style.height = `${gridWidth}px`;
  });

  colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    colormode(selectedColor);
  });
  sizeSpans.forEach((size) => (size.textContent = gridSize));
}

createGrid();

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => (square.style.backgroundColor = "white"));
});

const inputRange = document.getElementById("size-range");

inputRange.addEventListener("input", () => {
  gridSize = inputRange.value;
  createGrid();
});

const eraser = document.getElementById("eraser");

eraser.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#fff";
    });
  });
});

const rainbowMode = document.getElementById("rainbow-mode");

rainbowMode.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    });
  });
});

const colormode = (selectedColor) => {
  const colorMode = document.getElementById("color-mode");
  colorMode.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = selectedColor;
      });
    });
  });
};
