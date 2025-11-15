var socket;

function setup() {
    createCanvas(600, 400);
    background(50);

    socket = io.connect('https://127.0.0.1:3000');
    socket.on('mouse', 
        function(data) {
            console.log("Got: " + data.x + " " + data.y);

            fill(0, 0, 255);
            noStroke();
            ellipse(data.x, data.y, 20, 20);
        }
    );
}

function mouseDragged() {
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);
  
  sendmouse(mouseX,mouseY);
}

function sendmouse(xpos, ypos) {
  console.log("sendmouse: " + xpos + " " + ypos);
  
  var data = {
    x: xpos,
    y: ypos
  };

  socket.emit('mouse',data);
}

function draw() {

}