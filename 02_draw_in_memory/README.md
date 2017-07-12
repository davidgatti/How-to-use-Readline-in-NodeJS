This example takes from the first one and add the idea of drawing first in memory, and then take the generated array and then draw the representation on the screen.

Steps

Find the screen size
Create an array based on the screen size and fill it with “empty” values, in our case all entries will be false.
Then we take the multidimensional array and randomly set some true values in it.
Then we use the array content to draw a character where we have a true value.

This we draw the a “buffer” from memory on to the screen. And now that we have the array we can traverse it, and find out if a “pixel” is on or off. If instead of storing true/fales we stored an integer that represents a ASCII character, we could then know even what type of character is being displayed on the screen.