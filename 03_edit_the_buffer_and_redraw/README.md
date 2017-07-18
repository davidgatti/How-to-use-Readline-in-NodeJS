# Edit the Buffer and Redraw

![star_flicker](https://raw.githubusercontent.com/davidgatti/How-to-use-Readline-in-NodeJS/master/assets/star_flicker.png)

The third step is to take the code from the previous example and modify it so we save a set of characters to display in the array. The end result should be a "star map". 😜I know, nothing serious, but fun, for sure.

## Steps that you'll find in the code

- Instead of setting `1`, randomly add an integer between `9617` and `9619`.
- Draw the buffer on the screen by converting the integer to an ASCII character.
- Once the screen is drawn, wait one second.
- Go over the buffer, looking for places that have a value, and randomly change/update them.
- Redraw the screen.

In theory, this process results in a sky with stars that glitter, but you'll need a very strong imagination to see that 😅.

## Have fun

Go over the code, play with it, and modify it.
