const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 50; i++) {
hearts.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
size: Math.random() * 20 + 10,
speed: Math.random() * 1 + 0.5
});
}

function drawHeart(x, y, s) {
ctx.fillStyle = "rgba(255,255,255,0.4)";
ctx.beginPath();
ctx.moveTo(x, y);
ctx.bezierCurveTo(x - s, y - s, x - s*2, y + s, x, y + s*2);
ctx.bezierCurveTo(x + s*2, y + s, x + s, y - s, x, y);
ctx.fill();
}

function animate() {
ctx.clearRect(0,0,canvas.width,canvas.height);
hearts.forEach(h => {
drawHeart(h.x, h.y, h.size);
h.y -= h.speed;
if (h.y < -50) h.y = canvas.height + 50;
});
requestAnimationFrame(animate);
}

animate();
