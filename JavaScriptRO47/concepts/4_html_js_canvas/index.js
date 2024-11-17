const canvas = document.querySelector("#canvas");

const context = canvas.getContext("2d");

context.fillStyle = "#ff0000";
context.fillRect(0, 0, 1000, 700);

// Drawing a triangle
context.beginPath();
context.moveTo(500, 350);
context.lineTo(500, 350);
context.lineTo(500, 275);
context.lineTo(350, 275);
context.fillStyle = "#0000ff";
context.fill();

// Drawing an emojy
context.beginPath();
context.arc(75, 75, 50, 0, Math.PI * 2, true);
context.moveTo(110, 75);
context.arc(75, 75, 35, 0, Math.PI, false);
context.moveTo(65, 65);
context.arc(60, 65, 5, 0, Math.PI * 2, true);
context.moveTo(95, 65);
context.arc(90, 65, 5, 0, Math.PI * 2, true);
context.fillStyle = "#00ff00";
context.fill();
context.stroke();

const image = new Image();

image.addEventListener("load", () => {
  context.drawImage(image, 500, 0);
});

image.src =
  "https://images.pexels.com/photos/27269560/pexels-photo-27269560/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
