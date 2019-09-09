var colorPicker = document.getElementById("colorPicker");
var canvas = document.getElementById("pixelCanvas");

function makeGrid(height, width) {
	// Clear the grid
	canvas.innerHTML = "";
  
	for (var r = 0; r < height; r++) {
    // Create rows using height input (thank you MDN!)
    	var row = document.createElement("tr");
    	canvas.appendChild(row);
    
    	for (var c = 0; c < width; c++) {
    	// Inner loop that runs on every row to make cells using width input and add them to the row to create columns
    		var cell = document.createElement("td");
    		row.appendChild(cell);
    	}
	}
}

// Clicking submit calls makeGrid()
var sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(event) {
	event.preventDefault();

	var inputHeight = document.getElementById("inputHeight").value;
	var inputWidth = document.getElementById("inputWidth").value;

	makeGrid(inputHeight, inputWidth);
});

// Clicking a cell in the canvas table changes the cell color to colorPicker value
canvas.addEventListener("mousedown", function(event) {
	//mousedown rather than click so where the button is release does not screw with the canvas - MDN ftw
	event.preventDefault();
	
	var color = colorPicker.value;
	event.target.style.backgroundColor = color;
});
