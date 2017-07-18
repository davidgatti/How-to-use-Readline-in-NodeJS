# The Basics

![wall](https://raw.githubusercontent.com/davidgatti/How-to-use-Readline-in-NodeJS/master/assets/wall.png)

The goal of this first code example is to show you how to draw on the screen in the simplest way possible. To run this example, just type:

```
node index.js
```

You'll see the cursors moving from the top down, and at each new position, it will draw a square ASCII character. Once it reaches the bottom, it will move to the next column and repeat the process, until the whole screen is filled with squares.

## Things worth noting

- We read the size of the terminal window to determine the boundaries within which we can draw. This way, we'll be able to draw only what we need, no matter what size the terminal window may be.
- While there isn’t anything special about the code that's responsible for moving the cursor and changing its direction, we should note that you have to determine whether the cursor reached the end of the screen, thanks to the screen size that we determined in the previous step. You'd take the same approach when working on an application on a desktop computer. The system won’t tell you that you're outside the screen; you have to check it yourself.

## Have fun

Go over the code, play with it, and modify it. :)
