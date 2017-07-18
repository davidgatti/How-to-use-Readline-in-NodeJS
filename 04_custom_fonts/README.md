# Custom Fonts

![custom_font](https://raw.githubusercontent.com/davidgatti/How-to-use-Readline-in-NodeJS/master/assets/custom_font.png)

This last example shows how to go about drawing a custom font/ASCII image on the screen. We'll explain in a simple way how fonts and images work (or anything else that's displayed on a computer screen).

Check the [fonts](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/04_custom_fonts/fonts) folder, in which I've created a bunch of files that represent all of the numbers. Each file exports an array that represents how a font should be drawn on the screen.

Right now, when I run the code, the only thing I need to do is to display one number at a time, one after the other.

## How would you go about making a clock?

Let's say that you want to build a clock that displays the time in your custom font in the center of the terminal window. Here's what you'd need to do:

- Make your own font.
- Get the window size.
- Take the size of each font into consideration.
- Calculate how to center all of the digits.
- Display the time using your font.

As you can see, this is where it gets more involved, but that's how it's done on a big system. The difference is that macOS (for example) has a nice API and framework to help developers design and position UI elements. Here you have to do it all by yourself, unless you’ll use a ASCII framework.

## Have lots of fun

You can get very creative with this. Changing the contents of the fonts folder allows you to have some fun as you create a unique font based on what I made and display it on the screen. Try for example to make a bigger font and see how it is going to look 🙃.
