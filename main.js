var mouseEmpty = "empty";

var canvas = document.getElementById("myCanvas")

var ctx = canvas.getContext("2d")

var last_positions_x;
var last_positions_y;

var color = "red";
var width = 1;

canvas.addEventListener("mousedown", mouseDownFunction)
function mouseDownFunction(e) {
    mouseEmpty = "mouseDown";
    color = document.getElementById("txtColor").value;
    width = document.getElementById("txtWidth").value;
}

canvas.addEventListener("mouseleave", mouseLeave)
function mouseLeave(e) {
    mouseEmpty = "mouseLeave";
}

canvas.addEventListener("mouseup", mouseUp)
function mouseUp(e) {
    mouseEmpty = "mouseUp";
}

canvas.addEventListener("mousemove", mouseMove)
function mouseMove(e) {
    current_postion_mouse_x = e.clientX - canvas.offsetLeft
    current_postion_mouse_y = e.clientY - canvas.offsetTop

    if(mouseEmpty == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_positions_x, last_positions_y)
        ctx.lineTo(current_postion_mouse_x, current_postion_mouse_y);
        ctx.stroke();
    }

    last_positions_x = current_postion_mouse_x;
    last_positions_y = current_postion_mouse_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}