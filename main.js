const transitions = {
  U: [0, 1],
  D: [0, -1],
  L: [-1, 0],
  R: [1, 0],
};

const reversed = (transition) => {
  switch (transition) {
    case "U":
      return "D";
    case "D":
      return "U";
    case "R":
      return "L";
    case "L":
      return "R";
  }
};

const INITIAL_MOVES = ["D", "R"];

function draw(ctx) {
  // clear the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // center the canvas
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

  // styles
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;

  drawDragon(ctx, 5);
}

function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawDragon(ctx, n /* ... whatever else you would like :) */) {
  // TODO
  let moveset = INITIAL_MOVES;
  length = 200 / n;

  for (let i = 1; i < n; i++) {
    const half = Math.ceil(moveset.length / 2);
    let firstHalf = moveset.slice(0, half);
    let secondHalf = moveset.slice(half);

    let reversedHalf = firstHalf.map((move) => reversed(move));

    moveset = [...moveset, ...reversedHalf, ...secondHalf];
  }

  const translatedMoves = moveset.map((move) => transitions[move]);

  let lastMove = [0, 0];

  translatedMoves.forEach((move) => {
    move = move.map((coord) => coord * length);
    let [x, y] = [lastMove[0] + move[0], lastMove[1] + move[1]];
    console.log(lastMove);

    drawLine(ctx, lastMove[0], lastMove[1], x, y);
    lastMove = [x, y];
  });
}

// Some biolerplate to draw on the fullscreen canvas

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw(context);
}

window.addEventListener("load", onResize);
window.addEventListener("resize", onResize);
