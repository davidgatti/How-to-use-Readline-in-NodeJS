# How to manipulate the terminal window in NodeJS - Readline

![star_flicker](https://raw.githubusercontent.com/davidgatti/How-to-use-Readline-in-NodeJS/master/assets/star_flicker.png)

Drawing on the terminal window using ASCII characters has always fascinated me. In this article, I'll explore the process of learning how to do that. Also, I'll share what I'm learning, so we can learn together as we go. I also hope to help you gain an appreciation for all of the wonderful libraries out there. They were made by some amazing people, and they empower developers to do some wild things.

Yes, I'm very excited about the terminal window! 😀

And these are the terminal libraries make me blush: ☺️

- [Blessed](https://www.npmjs.com/package/blessed)
- [Blessed-contrib](https://github.com/yaronn/blessed-contrib)
- [Termina-kit](https://www.npmjs.com/package/terminal-kit)

# High-level concept

Before we get into coding, we need to understand the idea of drawing on a terminal window. This will give us a frame of reference to understand how to go about it, and then better understand the example code in the repo.

For starters, "[Readline](https://nodejs.org/api/readline.html)" is the NodeJS module that allows you to manipulate the screen. As you can see, the API is very basic. You might think that it’s because someone doesn’t care about this module, but the reality is that there isn’t much to do in a terminal window.

Basically, you can only move the cursor on the X or Y axis, and you can only print a character (or set of characters) from the position of the cursor. That's it. You can’t even read what's on the screen. You only have access to what comes from the user input. But if there's stuff on the screen that you would like to get to, you can’t.

And this is an important piece of information that nobody talks about or cares to explain (maybe it is obvious, but it wasn't for me in the beginning) . It took me a while to understand how the terminal window works and change my assumptions about it. Those assumptions were causing me to think about this topic in the wrong way.

# One char at a time

Here's another important concept to understand: Drawing on the screen happens one character at a time. Meaning that you move the cursor to a position, print out that char, move the cursor to the next position, draw a char, etc.

**Side Note**: This is also how regular screens work, but not limited to camera sensors, LED Matrix, etc. There is no way to instantly show a full image on the screen or take everything in one go (camera sensor). You could with a FPGA, but that's a topic for a different time.

# How do I know what's on the screen?

This works in the same way a computer screen does: it works from what’s in memory, and not how the pixel is set. This means that to display an image on the screen, you need to first draw it in memory. From there, you send the image to the screen. You can’t physically ask the LCD driver to tell you what color pixel 1337x1337 is. An LCD driver is only capable of setting a pixel; it can't read from it. The same goes for the terminal window. You can set a char on the screen, but you can’t ask the terminal about it. The only way to see what's set where is to create an array where you store all the characters that you want to draw on the screen.

With all of this said, I hope you now have a nice frame of reference. If so, let’s do some coding.

# Time to code

- [01_the_basics](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/01_the_basics)
- [02_draw_in_memory](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/02_draw_in_memory)
- [03_edit_the_buffer_and_redraw](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/03_edit_the_buffer_and_redraw)
- [04_custom_fonts](https://github.com/davidgatti/How-to-use-Readline-in-NodeJS/tree/master/04_custom_fonts)

# Efficiency

As you can imagine, redrawing the whole screen just to change a bunch of “pixels” isn't the most efficient way to go about doing this. Simply updating the section of the screen that changed is a much better solution. And now we're getting into the realm of the complicated. The people who made the framework and modules mentioned above have my gratitude, because those modules have implemented all the tricks needed to draw in the terminal screen the right way. You don’t have to think about it, and that allows you to just focus on your project.

# Readline is not a perfect module

It's worth remembering that bugginess is a downside of working with Readline. Sadly, the module has code that doesn't do what it's supposed to do. This link will take you to an explanation of one issue that I've run into: [Readline in NodeJS is drawing unwanted lines](https://stackoverflow.com/questions/41314556/readline-in-nodejs-is-drawing-unwanted-lines). This is why the `_insertString function` is replaced in each example at the beginning of the file.

This is definitely something to keep in mind if you plan to do something more ambitious with Readline.

# To sum it up

I hope that you've learned something fun as you've read this article, and that you’ll have fun playing with Readline in NodeJS. You can apply what you've learned here to electronics, and turning LED on or off on a LED matrix. The same rules apply, so you can test ideas in the terminal before you start working on your hardware project for example. But remember: In the same way that NodeJS offers cool frameworks, there are equivalent frameworks for Arduino and other similar platforms. Epic developers put lot of time into making those frameworks flexible and easy to use. But at least know we understand the basic idea behind drawing on the screen.

# The End

If you've enjoyed this article/project, please consider giving it a 🌟 or donate.

- [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/gattidavid/25)
- [![Star on GitHub](https://img.shields.io/github/stars/davidgatti/How-to-use-Readline-in-NodeJS.svg?style=social)](https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS/stargazers)
- [![Watch on GitHub](https://img.shields.io/github/watchers/davidgatti/How-to-use-Readline-in-NodeJS.svg?style=social)](https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS/watchers)

Also check out my [GitHub account](https://github.com/davidgatti), where I have other articles and apps that you might find interesting.

## For Hire 👨‍💻

If you'd like me to help you, I'm available for hire. Contact me at job@gatti.pl.

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
