# How to manipulate the terminal window in NodeJS - Readline

# WORK IN PROGRESS

One of the things that always fascinated me about the terminal window is drawing in it with ASCII characters. This article is my way to learn how to do that and in the process share what I learn so you don’t have to take the time to discover what I already did. I also hope that what I write here will help you appreciate all the wonderful libraries out there that were made by some amazing people, which empower other developers to do some wild things - as you can see very excited about the terminal window 😀.

And this are the terminal libraries that me blush ☺️.

⁃ [Blessed](https://www.npmjs.com/package/blessed)
⁃ [Blessed-contrib](https://github.com/yaronn/blessed-contrib)
⁃ [Termina-kit](https://www.npmjs.com/package/terminal-kit)

High level concept

Before we go in to coding we need to understand the idea of drawing on a terminal screen so we can have a frame of reference to understand how to go about it, and better understand the example code in the repo.

For starter “Readline” is the name of the NodeJS module that allow you to manipulate the screen, and as you can see the API is very basic. You might think that it’s because someone doesn’t care about this module, but the reality is that there isn’t much to do on a terminal window.

You basically can only move the cursor in the X and Y axis, and print a character (or set of characters) from the position of the cursor - thats is it. You can’t even read whats on the screen for example. You have only access to what comes from the user input. But if there is stuff on the screen that you would like to get to, you can’t.

And this is a important peace of information that nobody talks about or cares to explain. It took me a while to understand how the terminal window works and change the assumption that I had about it. Which was causing me to think about this topic in the wrong way.

One char at the time

Another important concept to understand is: drawing on the screen happens one character at the time. Meaning you move the cursor to a position, print out that char, move the cursor to the next position, draw a char, until you have the screen as you want it.
Side Note:

This is also how monitor works, but not limited to camera sensors, LED Matrix etc. There is no way instantly show a full image on the screen or take everything in one go (in the case of a camera sensor). I mean you can with a FPGA, but this is a topic for a different time.

How do I know whats on the screen?

Same way you know what’s on a computer screen, from what’s in memory, and not what the pixel is set at. Meaning. To display an image on the screen you need to first draw it in memory, and then from there send the image to the screen. You can’t physically ask the LCD driver, tell me what color is the pixel 1337x1337 - a LCD driver is only capable of setting a pixel and not read from it. Same goes for the terminal window, you can set a char on the screen but you can’t ask the terminal what is set at this a specific location.

So what you have to do is to have an array, where you store all the characters that you want to draw on the screen, and only then you’ll have a way to find out what is set where.

With all this sad I now hope you have a nice frame of reference. And if this is the case, let’s do some coding.

Time to code

- [01_the_basic]()
- [02_draw_in_memory]()
- [03_edit_the_buffer_and_redraw]()
- [04_custom_font]()

Efficiency

As you can imagine redrawing the whole screen just to change a bunch of “pixels” is not the most efficient way to go about doing this. A better solution would be to just update the part of the screen that changed. And now we are getting in to the ream of the complicated. That is why the people that made the frameworks and modules mentioned above have Amy gratitude because those modules have implemented all the tricks to draw in the terminal screen that right way, so you don’t have to think about it and can just work on your project.

To sum it up

I hope you learned something fun in this article, and you’ll have some good times paling with Readline in NodeJS. Especially since you can apply what you learned here with electronics, and turning on or off LED on a LED matrix. The same rules applies, so you can test some ideas in the terminal before you start working on your hardware project. But remember the same way we have cool frameworks in NodeJS, there are equivalent fireworks for Arduino and other similar platforms where cool developers took a lot of time to make those frameworks flexible and easy to use.

# The End

If you've enjoyed this article/project, please consider giving it a 🌟. Also check out my [GitHub account](https://github.com/davidgatti), where I have other articles and apps that you might find interesting.

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
