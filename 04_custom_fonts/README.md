# Custom Fonts

This last example is focused on showing how to go about drawign a custom font/ASCII image on the screen. Which basically explains in a simple way how fotns, images or anythign that is dsiplayed on a computer screen works. 

In this example you should check the [fonts](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/04_custom_fonts/fonts) folder where I have created a bunch of file representign all the numbers. Each file exports an array which represent how a font should be draw on the screen. 

Right now when you run the code, the only thing that I do is to display one number at the time, one after the other. 

## How would you go about makign a clock?

Let say you wanted to build a clock which displays the time in the middle of the termianl window usign your custom font. You would need to:

- make your own font
- get the window size
- take in consideration the size of each font 
- calculate how to display all the digits in a way that is centered 
- and last but not last get the time and display it with the font that you created.

As you can see this is where it gets more involved, but that how is done on a big system, the diference in this case is that for exmaple macOS has a nice API and fremowrk for developers to help them design and posstion UI elements.

## Have lots of fun

This is where you can get very creatvie, becasue by changign the content of the `fonts` folder you can have some fun makign a different font based on what I made and see how it will be displayed on the screen 🙃.
