# Draw in Memory

![star_map](https://raw.githubusercontent.com/davidgatti/How-to-use-Readline-in-NodeJS/master/assets/star_map.png)

The purpose of this second example is to explain the need to generate an "image" in memory before we draw it on the screen. This is a cool thing to understand, because it's how the big boys do it in a regular graphical user interface like macOS, Windows, or console. In this case, the terminal windows are nicer to work with, since we're dealing with a smaller and simpler environment.

## Steps you'll find in the code

- Get the terminal window size.
-	Create an array based on the window size and fill it with "empty" values. In our case, all entries will be set to `0`.
- Take the multidimensional array and randomly set some to `1`.
- Use the array content to draw a character with a `1` value.

And this is how you draw on the screen from the "buffer". But instead of dealing with millions of RGB pixels, we're dealing with one ASCII character. 😌.

## Have fun

Go over the code, play with it, and modify it.
