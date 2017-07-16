# Edit the Buffer and Redraw

![star_flicker](https://raw.githubusercontent.com/davidgatti/How-to-use-Readline-in-NodeJS/master/assets/star_flicker.png)

The third step will be to take the code from the previous example and modify it in a way where we save a set of charagets that we want to display in the array. The end result should be a "star map" 😜. I know nothing serious, but for sure fun.

## Steps that you'll find in the code

- Instead of setting `1` we randomly add an integer between `9617` and `9619`.
- We then draw the buffer on to the screen by converting the integer in to an ASCII character
- Once the screen is draw we wait one sec.
- Then we go over the buffer, and look for the places that have a value and randomly chagne/updated them
- After that we redraw the screen.

By repeatign this process, we in theory have stars on the sky that glitter, but you'll need a very strong immagination to see that 😅.

## Have fun

Go over the code, play with it and modify it :)
