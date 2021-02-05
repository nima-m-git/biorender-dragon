# Challenge

Implement the `drawDragon` function in `main.js` to draw a dragon curve of degree `n`.

## Dragon curve

The [Heighway Dragon Curve](https://en.wikipedia.org/wiki/Dragon_curve#Heighway_dragon) is a fractal curve that looks like this for degrees `n>0`:

![dragon](https://upload.wikimedia.org/wikipedia/commons/9/97/Dragon_curve_iterations_%282%29.svg)

A dragon curve of degree `n=0` is a single line segment. 

To go from degree `n` to degree `n + 1`, replace each segment in the previous curve with 2 segments at right angles as in the image. Notice to which side of the line the new segments are placed.

Fun fact: you can also get this curve by repeatedly folding a strip of paper in half `n` times and unfolding each fold to 90 degrees.

## See also

[Golden dragon](https://larryriddle.agnesscott.org/ifs/heighway/goldenDragon.htm)
