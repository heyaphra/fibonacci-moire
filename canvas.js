const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

const width = c.width;
const height = c.height;

let done = false;
let stepX = 5; //25x, .75 y
let stepY = .4;
let x = width / 2,
    y = (height / 2) - 50;

let PHI = (1 + Math.sqrt(5)) / 2;
ctx.beginPath()

ctx.lineCap = "round";
ctx.lineWidth = .0065;

let colors = ['#ff77aa', '#aaff77', '#77aaff', '#ffffff', '#000000'];



function goldenRotation(num) {

    ctx.moveTo(x, y);
    ctx.lineTo(x + (num * (num / 2)), y);

    x -= stepX;
    y += stepY
    ctx.translate((canvas.width), (canvas.height) / 2);
    ctx.rotate((Math.PI * PHI) * .5);
    ctx.stroke();

    ctx.font = '80px courier';
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillText('hello world', width / 2, height / 2);

    if (x > width || y > height) {
        clearInterval(myTimer);
        ctx.resetTransform();
        $('#canvas').fadeOut(6000)
    }




}

let myTimer = setInterval(function() {
    //100 original
    goldenRotation(100)
}, 1);