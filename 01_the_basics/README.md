# The Basics

The goal of this first code example is to show in the simples way possible how to draw on the screen. To run this example just type: 

```
node index.js
```

You'll see the cursors moving from the top down, and at each new position it will draw a square ASCII character. Once it reaches the bottom, it will move to the next column and repeat the process until the whole screen is filled with squares.

## The things worth noting

- We read the size of the terminal window so we know the boundaries within we can draw inside. This way no mater the terminal window size we’ll be able to draw only what is needed.
- The code responsible for moving the cursor and changing the direction. There isn’t nothing special here, but one thing to not is that you have to determine if the cursor reached the end of the screen or not - thank to the screen size that we have from the previous step. This is the same aproach if worked on application on a desctop computer. The system won’t tell you that you are outside the screen or not, you have to check it yourself.

## Have fun

Go over the code, play with it and modify it :)
