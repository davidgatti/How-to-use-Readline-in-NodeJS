let readline = require('readline');

//
//	Load all the fonts that we have created.
//
let zero 	= require('./fonts/zero');
let one 	= require('./fonts/one');
let two 	= require('./fonts/two');
let three 	= require('./fonts/three');
let four 	= require('./fonts/four');
let five 	= require('./fonts/five');
let six 	= require('./fonts/six');
let seven 	= require('./fonts/seven');
let eight 	= require('./fonts/eight');
let nine 	= require('./fonts/nine');

//
//	Over-right the function to fix a problem within Readline. This should be
//	here if you want Readline to behave as expected, without this fix strange
//	things will be drawn on the screen.
//
//	Find out more here
//		http://stackoverflow.com/q/41314556/1049894
//
readline.Interface.prototype._insertString = function(c) {

	if (this.cursor < this.line.length)
	{
		var beg = this.line.slice(0, this.cursor);
		var end = this.line.slice(this.cursor, this.line.length);

		this.line = beg + c + end;
		this.cursor += c.length;
		this._refreshLine();
	}
	else
	{
		this.line += c;
		this.cursor += c.length;
		this.output.write(c);
		this._moveCursor(0);
	}

};

//   _____   ______   _______   _______   _____   _   _    _____    _____
//  / ____| |  ____| |__   __| |__   __| |_   _| | \ | |  / ____|  / ____|
// | (___   | |__       | |       | |      | |   |  \| | | |  __  | (___
//  \___ \  |  __|      | |       | |      | |   | . ` | | | |_ |  \___ \
//  ____) | | |____     | |       | |     _| |_  | |\  | | |__| |  ____) |
// |_____/  |______|    |_|       |_|    |_____| |_| \_|  \_____| |_____/
//

//
//	Save all the individual fonts in a array.
//
let fonts = [zero, one, two, three, four, five, six, seven, eight, nine];

//
//	Get the terminal window size
//
let window_y = process.stdout.rows;		// 	Height
let window_x = process.stdout.columns;	//	Width

//
//	Set the cursor to the top left corner of the terminal window so we can clear
//	the terminal screen
//
readline.cursorTo(process.stdout, 0, 0)

//
//	Clear everything on the screen so we have a clean template to draw on.
//
readline.clearScreenDown(process.stdout)

//
//	Create the interface so we can use it to for example write on the console.
//
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

//
//	React to CTR+C so we can close the app, and potentially do something before
//	closing the app.
//
rl.on('close', function() {

	process.exit(0);

});

//	 __  __              _____   _   _
//	|  \/  |     /\     |_   _| | \ | |
//	| \  / |    /  \      | |   |  \| |
//	| |\/| |   / /\ \     | |   | . ` |
//	| |  | |  / ____ \   _| |_  | |\  |
//	|_|  |_| /_/    \_\ |_____| |_| \_|
//

//
//	The counter that hold the position for the font array
//
let font_nr = 0;

//
//	Draw the Star Map
//
draw(fonts[font_nr]);

//  _    _   ______   _        _____    ______   _____     _____
// | |  | | |  ____| | |      |  __ \  |  ____| |  __ \   / ____|
// | |__| | | |__    | |      | |__) | | |__    | |__) | | (___
// |  __  | |  __|   | |      |  ___/  |  __|   |  _  /   \___ \
// | |  | | | |____  | |____  | |      | |____  | | \ \   ____) |
// |_|  |_| |______| |______| |_|      |______| |_|  \_\ |_____/
//

//
//	Loop over the star map and draw a ASCII square to represent a star.
//
function draw(star_map)
{
	//
	//	1.	Loop over the height axis of the array
	//
	for(let y = 0; y < star_map.length; y++)
	{
		//
		//	1.	Loop over the width axis of the array
		//
		for(let x = 0; x < star_map[y].length; x++)
		{

			//
			//	1.	If the value is true, we draw this char on the screen by
			//		converting the integer in to an ASCII char form the
			//		extended character set.
			//
			if(star_map[y][x])
			{
				rl.write('█');
			}


			//
			//	2.	Move the cursor of the terminal in the next location.
			//
			readline.cursorTo(process.stdout, x, y)
		}
	}

	//
	//	2.	After displaying the first font, we wait N amount of time
	//		before we draw the next font.
	//
	setTimeout(function() {

		//
		//	1.	Move the cursor back to the beginning of the screen
		//
		readline.cursorTo(process.stdout, 0, 0)

		//
		//	2.	Clear the screen
		//
		readline.clearScreenDown(process.stdout)

		//
		//	3.	Get the next font or if we reach the end, reset the counter
		//
		if(font_nr <= 8)
		{
			font_nr++
		}
		else
		{
			font_nr = 0
		}

		//
		//	4.	Draw the next font
		//
		draw(fonts[font_nr]);

	}, 1000);
}
