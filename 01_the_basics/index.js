const readline = require('readline');

//
//	Over-right the function to fix a problem within Readline.
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

//
//	Set the direction of the cursor
//
let dirrection_y = true;
let dirrection_x = true;

//
//	Set the initial position of the cursor
//
let position_x = 0;
let position_y = 0;

//
//	Get the terminal window size
//
let window_x = process.stdout.columns;
let window_y = process.stdout.rows;

//
//	Set the cursor to the top left corner of the terminal window so we can clear
//	the terminal screen
//
readline.cursorTo(process.stdout, position_x, position_y)

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
//	Fill the first character
//
rl.write('█');

//
//	React to CTR+C so we can close the app, and potentially do something before
//	closing the app.
//
rl.on('close', function() {

	process.exit(0);

});

//
//	Start the main loop
//
draw();

//
//	The main loop that moves the cursor around the screen.
//
function draw()
{
	setTimeout(function() {

		//
		//	1.	Move the cursor up or down
		//
		dirrection_y ? position_y++ : position_y--

		//
		//	2.	When we reach the bottom of the terminal window, we switch
		//		direction from down, to up.
		//
		if(position_y == window_y)
		{
			//
			//	1.	Switch the direction to go up
			//
			dirrection_y = false

			//
			//	2.	Move the next column or previous one depending on the
			//		direction.
			//
			dirrection_x ? position_x++ : position_x--
		}

		//
		//	3.	When we reach the top of the terminal screen, switch direction
		//		again
		//
		if(position_y < 0)
		{
			//
			//	1.	Switch the direction to go down
			//
			dirrection_y = true

			//
			//	2.	Move the next column or previous one depending on the
			//		direction.
			//
			dirrection_x ? position_x++ : position_x--
		}

		//
		//	4.	When we reach the far right of the terminal screen we switch
		//		direction from 'to right', to 'to left'
		//
		if(position_x == window_x) { dirrection_x = false }

		//
		//	5.	When we reach the far left (beginning) of the terminal window
		//		we switch direction again.
		//
		if(position_x == 0) { dirrection_x = true }

		//
		//	6.	Move the cursor in the right position where the char will
		//		be printed.
		//
		readline.cursorTo(process.stdout, position_x, position_y)

		//
		//	7.	Write on char on the terminal screen.
		//
		rl.write('█');

		//
		//	8.	Restart the loop.
		//
		draw();

	}, 1)
}