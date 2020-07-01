document.getElementById("hwdB").onclick = function() {hwdClick()};

function hwdClick() {
    document.getElementById("hwdB").innerHTML = "YOU CLICKED ME!";
    tf.loadLayersModel('js/mnistmodel/model.json').then(function(model) {
      window.model = model;
    });
    console.log('model loaded from storage');
    var canvas = document.getElementById("hwdcanvas");
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.getImageData(0,0,350,350);
    console.log(canvasData);
}

