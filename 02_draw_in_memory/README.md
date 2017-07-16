# Draw in Memory

The purpous of this second example is to explain the concpec of the need of generatign an "image" in memory first, befroe we draw it on the sceen. This is a cool thing to understand becasue it is how the big boy do it in a regualr graphical user interface like you macOS, Windows or console. The termianl windos in this case is nicer to work with, since we are dealing with a simpler and smaller environment. 

## Steps that you'll find in the code

- Get the termianl window size
- Create an array based on the window size and fill it with "empty" values. In our case all entries will be set to `0`.
- Then we take the multidimensional array and randomly set some `1`.
- Then we use the array content to draw a character where we have a `1` value.

And this is how you draw on the screen from the "buffer". But insted of dalign with milions of RGB pixels, we are dealing with one ASCII character 😌.

## Have fun

Go over the code, play with it and modify it :)
