var c = document.getElementById('c'), cx = c.getContext('2d');

// colours
const C_BACKG = '#222';
const C_FORE = '#ccc';
const C_FORE_DIM = '#666';

var num = 3;
var gt = 0;

var wave_x = 500;

function clear(){
    cx.fillStyle = C_BACKG;
    cx.clearRect(0, 0, c.width, c.height);
    cx.fillRect(0, 0, c.width, c.height);
    cx.stroke();
}

function draw(){
    clear();

    // drawing style
    cx.strokeStyle = C_FORE_DIM;

    var r = 100;
    var x = 200;
    var y = c.height/2 - r/2;

    for(var i = 0; i < num; i+=1){
        px = x;
        py = y;

        n = i*2 + 1;

        r = 100 * 4/(n*Math.PI);
        x += r*Math.cos(n*gt);
        y += r*Math.sin(n*gt);

        // draw line
        cx.lineWidth = 3;
        cx.beginPath();
        cx.moveTo(px, py);
        cx.lineTo(x, y);
        cx.stroke();

        // draw circle
        cx.lineWidth = 3;
        cx.beginPath();
        cx.ellipse(px, py, r, r, 0, 0, 2*Math.PI);
        cx.stroke();
    }

    // wave stuff

    // draw wave line
    // cx.beginPath();
    // cx.moveTo(x, y);
    // cx.lineTo(wave_x, y);
    // cx.stroke();


    gt += 0.01;
}

(function () {
    function resizeCanvas() {
        c.width = window.innerWidth;
        c.height = window.innerHeight;

        draw();
    }
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();

    init();
    function init() {
        wave_x = 2*c.width/5;
        clear();
        setInterval(function(){
            draw();
        }, 10);
    }
})();