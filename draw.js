/* setup is called once at the beginning of the session */

function setup() {

	// set the background color
	canvas.style.background = '#181818'

	// TODO: Initialize something!

}


/* draw is called once each frame */

function draw(delta) {
	
	// clear the canvas
	context.setTransform(1, 0, 0, 1, 0, 0)
	context.clearRect(0, 0, canvas.width, canvas.height)

	// center the canvas	
	context.translate(canvas.width / 2, canvas.height / 2)

	// TODO: Draw something!
	context.fillStyle = '#ffd500'
	context.beginPath()
	context.arc(0, 0, 72, 0, Math.PI * 2)
	context.fill()

}


/* boilerplate */

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

/* the main loop */

let last_time

function loop() {
	requestAnimationFrame(loop)	
	
	const delta = Date.now() - last_time
	draw(delta)
}

function resize() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
}

window.addEventListener('load', () => {
	resize()

	setup()

	last_time = Date.now()

	requestAnimationFrame(loop)
})

window.addEventListener('resize', resize)
