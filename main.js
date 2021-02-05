function draw(ctx) {
	// clear the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	// center the canvas
	ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

	// styles
	ctx.strokeStyle = '#333';
	ctx.lineWidth = 2;

	drawDragon(ctx, 1);
}

function drawLine(ctx, x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function drawDragon(ctx, n, /* ... whatever else you would like :) */) {
	// TODO
	drawLine(ctx, -200, 0, 200, 0);
}

// Some biolerplate to draw on the fullscreen canvas

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function onResize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	draw(context);
}

window.addEventListener('load', onResize);
window.addEventListener('resize', onResize);
