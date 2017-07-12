In this example we are login to use our star map example from step 2, and modify it to draw 3 different types of starts, from faint to bright, and instead of true/fales we are gouge not use the integer values which represents a specific character in the ASCII code table.

Instead of setting true or false we randomly and an integer between 45 and 47.
We then draw the buffer on to the screen by converting the integer in to an ASCII character
Once the screen is draw we wait one sec.
We update the values from the array to a new set of random integer from our previous range
And redraw the screen.

We keep repeating this process forever and ever. This example again is vary basic and you could easily update it to make the start change position, by clearing out the array, and random recreating it. etc. the possibilities are headless here, and for sure worth exploring to see what you can come up with.