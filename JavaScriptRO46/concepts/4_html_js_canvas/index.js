const canvas = document.getElementById("canvas");

const context = canvas.getContext("2d");

// Tip: Draw a rectangle starting from x=204, y=152, with size of 305x305
context.fillStyle = "#000000";
context.fillRect(204, 152, 305, 305);

// Tip: Draw a rectangle starting from x=250, y=200, with size of 50x50
context.fillStyle = "#0000ff";
context.fillRect(250, 200, 50, 50);

// Tip: Draw some kind of circles (i.e. emojy)
context.beginPath();
context.arc(75, 75, 50, 0, Math.PI * 2, true);
context.moveTo(110, 75);
context.arc(75, 75, 35, 0, Math.PI, false);
context.moveTo(65, 65);
context.arc(60, 65, 5, 0, Math.PI * 2, true);
context.moveTo(95, 65);
context.arc(90, 65, 5, 0, Math.PI * 2, true);
context.fillStyle = "#ff0000";
context.fill();
context.stroke();

// Tip: Draw an image
const image = new Image();

// Tip: Use the setAttribute method to update the "src" attribute
image.setAttribute(
  "src",
  "https://images.pexels.com/photos/30417313/pexels-photo-30417313/free-photo-of-scenic-railway-tracks-in-romanian-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);

// Tip: Draw the image as soon as the "load" event is fired
image.addEventListener("load", () => {
  context.drawImage(image, 552, 485);
});

// Tip: Draw a text
context.font = "30px serif";
context.fillText("Let's learn canvas!", 508, 50);
