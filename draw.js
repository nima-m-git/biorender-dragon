export function setup() {
	// set the background color
	canvas.style.background = '#181818'
}

export function draw(ctx, _delta) {
	// clear the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0)
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	// center the canvas	
	ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)

	// TODO: Draw something!
	ctx.fillStyle = '#ffd500'
	ctx.beginPath()
	ctx.arc(0, 0, 72, 0, Math.PI * 2)
	ctx.fill()
}

