// Task 1: Implement the Color Picker

const paintCanvas=document.querySelector(".js-paint")
const colorPicker = document.querySelector(".js-color-picker");
const context=paintCanvas.getContext("2d")

// When the color changes, update the context.strokeStyle with the new color
colorPicker.addEventListener("change", event => {
  // Update the stroke color
});


// Task 2: Implement the Line Width Adjuster

// Get the range input and label elements
const lineWidthRange=document.querySelector(".js-line-range")


// Set up an event listener on the range input to update the line width
lineWidthRange.addEventListener("input", event => {
    const width=event.target.value
  // Update the lineWidthLabel to display the selected width
  // Update the line width for the canvas drawing
});


// Task 3: Implement the Drawing Functionality

// Get the canvas element and its 2D context


// Variables to keep track of the mouse state and position
let isMouseDown = false;
let x = 0, y = 0;

// Helper function to stop drawing
const stopDrawing = () => {
  isMouseDown = false;
};

// Helper function to start drawing
const startDrawing = event => {
  isMouseDown = true;
  [x, y] = [event.offsetX, event.offsetY]; // Set starting coordinates
};

// Helper function to draw lines
const drawLine = event => {
  if (isMouseDown) {
    const newX = event.offsetX;
    const newY = event.offsetY;

    // Write your code here to draw a line
    // 1. Begin the path
    // 2. Move to the starting point
    // 3. Draw the line to the new position
    // 4. Update the stroke
    // 5. Update the coordinates
  }
};

// Set up the mouse event listeners
//Hint: You need to call the correct functions (e.g., startDrawing, stopDrawing, drawLine) when the mouse events occur on the canvas.