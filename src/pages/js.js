export function doDemo(button) {
    const square = document.getElementById("square");
    if (square) {
        square.style.backgroundColor = "#43A53B"; 
    }
    button.setAttribute("disabled", "true"); 
   
}

