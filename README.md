# How to manipulate the terminal window in NodeJS - Readline

![star_flicker](https://raw.githubusercontent.com/davidgatti/How-to-use-Readline-in-NodeJS/master/assets/star_flicker.png)

One of the things that always fascinated me about the terminal window is drawing in it with ASCII characters. This article is my way to learn how to do that and in the process share what I learn so we can learn together. I also hope that what I write here will help you appreciate all the wonderful libraries out there that were made by some amazing people, which empower other developers to do some wild things - yes... I'm very excited about the terminal window 😀.

And this are the terminal libraries that make me blush ☺️.

- [Blessed](https://www.npmjs.com/package/blessed)
- [Blessed-contrib](https://github.com/yaronn/blessed-contrib)
- [Termina-kit](https://www.npmjs.com/package/terminal-kit)

# High level concept

Before we go in to coding we need to understand the idea of drawing on a terminal window so we can have a frame of reference to understand how to go about it, and then better understand the example code in the repo.

For starter "[Readline](https://nodejs.org/api/readline.html)" is the name of the NodeJS module that allow you to manipulate the screen, and as you can see, the API is very basic. You might think that it’s because someone doesn’t care about this module, but the reality is that there isn’t much to do in a terminal window.

You basically can only move the cursor in the X and Y axis, and print a character (or set of characters) from the position of the cursor - thats is it. You can’t even read whats on the screen for example. You have only access to what comes from the user input. But if there is stuff on the screen that you would like to get to, you can’t.

And this is a important peace of information that nobody talks about or cares to explain. It took me a while to understand how the terminal window works and change the assumption that I had about it. Which was causing me to think about this topic in the wrogn way.

# One char at the time

Another important concept to understand is: drawing on the screen happens one character at the time. Meaning you move the cursor to a position, print out that char, move the cursor to the next position, draw a char, etc.

**Side Note**

This is also how regualr screens works, but not limited to camera sensors, LED Matrix etc. There is no way to instantly show a full image on the screen or take everything in one go (in the case of a camera sensor). I mean you can with a FPGA, but this is a topic for a different time.

# How do I know whats on the screen?

Same way you know what’s on a computer screen, from what’s in memory, and not what the pixel is set at. Meaning. To display an image on the screen you need to first draw it in memory, and then from there send the image to the screen. You can’t physically ask the LCD driver, to tell you what color pixel 1337x1337 is - a LCD driver is only capable of setting a pixel and not read from it. Same goes for the terminal window, you can set a char on the screen but you can’t ask the terminal what is set at.

So what you have to do is to have an array, where you store all the characters that you want to draw on the screen, and only then you’ll have a way to find out what is set where.

With all this sad I now hope that now you have a nice frame of reference. And if this is the case, let’s do some coding.

# Time to code

- [01_the_basics](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/01_the_basics)
- [02_draw_in_memory](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/02_draw_in_memory)
- [03_edit_the_buffer_and_redraw](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/03_edit_the_buffer_and_redraw)
- [04_custom_fonts](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/04_custom_fonts)

# Efficiency

As you can imagine redrawing the whole screen just to change a bunch of “pixels” is not the most efficient way to go about doing this. A better solution would be to just update the part of the screen that changed. And now we are getting in to the ream of the complicated. That is why the people that made the frameworks and modules mentioned above have my gratitude because those modules have implemented all the tricks to draw in the terminal screen the right way, so you don’t have to think about it and you can just focus on your project.

# Readline is not that perfect of a module

A downside worth rememberign when workign with Readline is its buggines. Sadly the module has code that is not doign what its suposute to do. The followign link is an issue that I did run in to [Readline in NodeJS is drawing unwanted lines](https://stackoverflow.com/questions/41314556/readline-in-nodejs-is-drawing-unwanted-lines). This is why each example at the beginning of the file have the `_insertString` function replaced. 

Definelty something to keep in mind if you'll want to do something more ambitious yourselfe. 

# To sum it up

I hope you learned something fun in this article, and you’ll have some good times paling with Readline in NodeJS. Especially since you can apply what you learned here with electronics, and turning on or off LED on a LED matrix. The same rules applies, so you can test some ideas in the terminal before you start working on your hardware project. But remember the same way we have cool frameworks in NodeJS, there are equivalent fireworks for Arduino and other similar platforms where eipc developers took a lot of time to make those frameworks flexible and easy to use.

# The End

If you've enjoyed this article/project, please consider giving it a 🌟 or donate.

- [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/gattidavid/25)
- [![Star on GitHub](https://img.shields.io/github/stars/davidgatti/How-to-use-Readline-in-NodeJS.svg?style=social)](https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS/stargazers)
- [![Watch on GitHub](https://img.shields.io/github/watchers/davidgatti/How-to-use-Readline-in-NodeJS.svg?style=social)](https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS/watchers)

Also check out my [GitHub account](https://github.com/davidgatti), where I have other articles and apps that you might find interesting.

## Where to follow

You can follow me on social media 🐙😇, at the following locations:

- [GitHub](https://github.com/davidgatti)
- [Twitter](https://twitter.com/dawidgatti)
- [Instagram](https://www.instagram.com/gattidavid/)

## More about me

I don’t only live on GitHub, I try to do many things not to get bored 🙃. To learn more about me, you can visit the following links:

- [Podcasts](http://david.gatti.pl/podcasts)
- [Articles](http://david.gatti.pl/articles)
- [Technical Articles](http://david.gatti.pl/technical_articles)
- [Software Projects](http://david.gatti.pl/software_projects)
- [Hardware Projects](http://david.gatti.pl/hardware_projects)
