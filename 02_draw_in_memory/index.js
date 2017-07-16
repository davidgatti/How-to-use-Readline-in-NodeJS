const crypto = require('crypto');
const readline = require('readline');
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
//	Generate a multi-dimentional array which is going to represent the size
//	of our terminal window
//
let map_buffor = make_an_empty_map(window_x, window_y);

//
//	Set randomly true values inside the map, where this positive values
//	will be our stars in the sky :)
//
let star_map = put_stars_on_the_map(map_buffor);

//
//	Draw the Star Map
//
draw(star_map);

//  _    _   ______   _        _____    ______   _____     _____
// | |  | | |  ____| | |      |  __ \  |  ____| |  __ \   / ____|
// | |__| | | |__    | |      | |__) | | |__    | |__) | | (___
// |  __  | |  __|   | |      |  ___/  |  __|   |  _  /   \___ \
// | |  | | | |____  | |____  | |      | |____  | | \ \   ____) |
// |_|  |_| |______| |______| |_|      |______| |_|  \_\ |_____/
//

//
//	Generate an empty multi-dimensional array based on the screen size of the
//	terminal window.
//
function make_an_empty_map(window_x, window_y)
{
	//
	//	3.	Create an array that will hold all the rows
	//
	let columns = [];

	//
	//	4.	Fill the column array with all the raws needed.
	//
	for(let i = 0; i < window_y; i++)
	{
		//
		//	1.	Fill an array with as many row we have. We need to do this once
		//		since we assume the window size is fixed.
		//
		let row = new Array(window_x);

		//
		//	2.	We fill the array with 0 as the default value
		//
		row.fill(0);

		//
		//	3.	Add the empty array
		//
		columns.push(row);
	}

	//
	//	->	Return the array
	//
	return columns;
}

//
//	Use a random function to generate a random pattern of true and false, where
//	true is when a char will be printed on the screen.
//
function put_stars_on_the_map(map_buffor)
{
	//
	//	1.	Loop over the height axis of the array
	//
	for(let y = 0; y < map_buffor.length; y++)
	{
		//
		//	1.	Pick a random location in the x axis
		//
		let x_ran = Math.floor(Math.random() * (window_x + 1));

		//
		//	2.	Set a true value in that specific location
		//
		map_buffor[y][x_ran] = 1;

	}

	//
	//	->	Return the updated map
	//
	return map_buffor;
}

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
				//
				//	1.	Move the cursor in the right position where the char
				//		will be printed.
				//
				//		IMPORTANT
				//
				//			Move the cursor only when there is something to
				//			print. Try to move this line outside the if
				//			statement and check out the difference.
				//
				readline.cursorTo(process.stdout, x, y);

				//
				//	2.	If the value is true, we draw this char on the screen
				//
				rl.write('█');
			}
		}

	}

}
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
				//
				//	1.	Move the cursor in the right position where the char
				//		will be printed.
				//
				//		IMPORTANT
				//
				//			Move the cursor only when there is something to
				//			print. Try to move this line outside the if
				//			statement and check out the difference.
				//
				readline.cursorTo(process.stdout, x, y)

				//
				//	2.	If the value is true, we draw this char on the screen
				//
				rl.write('█');
			}
		}

	}
}
