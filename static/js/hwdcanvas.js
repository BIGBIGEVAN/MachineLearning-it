

// From https://www.html5canvastutorials.com/labs/html5-canvas-paint-application/
var canvas = document.getElementById('hwdcanvas');
var context = canvas.getContext('2d');

// var compuetedStyle = getComputedStyle(document.getElementById('paint'));
canvas.width = 350;
canvas.height = 350;

var mouse = {x: 0, y: 0};

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

context.lineWidth = 15;
context.lineJoin = 'round';
context.lineCap = 'round';
context.strokeStyle = 'white';

canvas.addEventListener('mousedown', function(e) {
  context.moveTo(mouse.x, mouse.y);
  context.beginPath();
  canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {

  canvas.removeEventListener('mousemove', onPaint, false);
  var img = new Image();
  img.onload = function() {
    context.drawImage(img, 0, 0, 28, 28);
    data = context.getImageData(0, 0, 28, 28).data;
    var input = [];
    for(var i = 0; i < data.length; i += 4) {
      input.push(data[i + 2] / 255);
    }
  };
  img.src = canvas.toDataURL('image/png');
}, false);

var onPaint = function() {
  context.lineTo(mouse.x, mouse.y);
  context.stroke();
};



canvas.addEventListener('touchstart', function (e) {
  var touch = e.touches[0];
  canvas.dispatchEvent(new MouseEvent('mousedown', {
    clientX: touch.clientX,
    clientY: touch.clientY
  }));
}, false);
canvas.addEventListener('touchend', function (e) {
  canvas.dispatchEvent(new MouseEvent('mouseup', {}));
}, false);
canvas.addEventListener('touchmove', function (e) {
  var touch = e.touches[0];
  canvas.dispatchEvent(new MouseEvent('mousemove', {
    clientX: touch.clientX,
    clientY: touch.clientY
  }));
}, false);









