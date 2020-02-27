$(document).ready(function() {
/* Declaration of variables for each box */
var bx1 = $('#box1');
var bx2 = $('#box2');
var bx3 = $('#box3');
var bx4 = $('#box4');
var bx5 = $('#box5');
var bx6 = $('#box6');
var bx7 = $('#box7');
var bx8 = $('#box8');
var bx9 = $('#box9');

/* Declarations to check whether the box is valid to play */
var playValid = false;
var win = false;

/* Declarations and initialisations of variables to count player scores */
var isPlayerOne = true;
var isPlayerTwo = false;
var firstPlayerScore = 0;
var secondPlayerScore = 0;

/* Definition of the function to check whether the box is valid to do the next move */
function boxCheck(boxplayed) {
	if ( $(boxplayed).hasClass('free') ) {
		playValid = true;
	} else {
		playValid = false;
	}
}

/* Definition of the function to reset game if any move was done by mistake and it clears the board to start from first */
function resetGame() {
	$('.box').removeClass('played');
	$('.box').removeClass('U-turn');
	$('.box').removeClass('I-turn');
	$('.box').html('');
	$('.box').addClass('free');
	isPlayerOne = true;
	isPlayerTwo = false;

}

/* Definition of the function to calculate the score of each player and to display the winning message*/
function winMsg(player) {
	win = true;

	if (player == "I") {
		firstPlayerScore = firstPlayerScore + 1;
		$('#firstPlayerScore').text(`Player 1: ${firstPlayerScore}`);
		$('.successmsg').text('**Congratulations, Player 1 have won**');

} else {

		secondPlayerScore = secondPlayerScore + 1;
		$('#secondPlayerScore').text(`Player 2: ${secondPlayerScore}`);
	  $('.successmsg').text('**Congratulations, Player 2 have won**');
	}
resetGame();
}

/* Definition of the function to check whether the player have won the game and it calls other function to display the winning message
as well */
function conForWin() {

	if ( bx1.hasClass('I-turn') && bx2.hasClass('I-turn') && bx3.hasClass('I-turn') ) {
		winMsg("I");
	} else if ( bx1.hasClass('U-turn') && bx2.hasClass('U-turn') && bx3.hasClass('U-turn') ) {
		winMsg("U");
	}

	else if ( bx4.hasClass('I-turn') && bx5.hasClass('I-turn') && bx6.hasClass('I-turn') ) {
		winMsg("I");
	} else if ( bx4.hasClass('U-turn') && bx5.hasClass('U-turn') && bx6.hasClass('U-turn') ) {
		winMsg("U");
	}

	else if ( bx7.hasClass('I-turn') && bx8.hasClass('I-turn') && bx9.hasClass('I-turn') ) {
		winMsg("I");
	} else if ( bx7.hasClass('U-turn') && bx8.hasClass('U-turn') && bx9.hasClass('U-turn') ) {
		winMsg("U");
	}

	else if ( bx1.hasClass('I-turn') && bx4.hasClass('I-turn') && bx7.hasClass('I-turn') ) {
		winMsg("I");
	} else if ( bx1.hasClass('U-turn') && bx4.hasClass('U-turn') && bx7.hasClass('U-turn') ) {
		winMsg("U");
	}

	else if ( bx5.hasClass('I-turn') && bx2.hasClass('I-turn') && bx8.hasClass('I-turn') ) {
		winMsg("I");
	} else if ( bx5.hasClass('U-turn') && bx2.hasClass('U-turn') && bx8.hasClass('U-turn') ) {
		winMsg("U");
	}

	else if ( bx6.hasClass('I-turn') && bx9.hasClass('I-turn') && bx3.hasClass('I-turn') ) {
		winMsg("I");
	} else if ( bx6.hasClass('U-turn') && bx9.hasClass('U-turn') && bx3.hasClass('U-turn') ) {
		winMsg("U");
	}

	else if ( bx1.hasClass('I-turn') && bx5.hasClass('I-turn') && bx9.hasClass('I-turn') ) {
		winMsg("I");
	} else if ( bx1.hasClass('U-turn') && bx5.hasClass('U-turn') && bx9.hasClass('U-turn') ) {
		winMsg("U");
	}

	else if ( bx5.hasClass('I-turn') && bx7.hasClass('I-turn') && bx3.hasClass('I-turn') ) {
		winMsg("I");
	} else if ( bx5.hasClass('U-turn') && bx7.hasClass('U-turn') && bx3.hasClass('U-turn') ) {
		winMsg("U");
	}
}

/* Definition of the function to check whether the game has been drawn */

function checkDraw() {

	if ( !($('.box').hasClass('free')) ) {
		alert("Draw! Try playing again!");
		resetGame();
	}
}

/* This function will be triggered only when the player one clicks on a box */

$('.box').on('click', function Iplay() {
	if (isPlayerOne) {
		boxCheck(this);
		if(playValid){
		$(this).removeClass('free');
		$(this).addClass('played');
		$(this).addClass('I-turn');
		$(this).html("I");
		isPlayerOne = false;
		isPlayerTwo = true;
		checkDraw();
		conForWin();
}
	 else {
		alert("That box has already been played. Please choose another box");
	}
}

/* This function executes when the player two clicks on a free box */
else if (isPlayerTwo){
	{
			boxCheck(this);
		if(playValid){

		$(this).removeClass('free');
		$(this).addClass('played');
		$(this).addClass('U-turn');
		$(this).html("U");
		isPlayerOne = true;
		isPlayerTwo = false;
		checkDraw();
		conForWin();
}
	else {
		alert("That box has already been played. Please choose another box");
	}
}
}
});

/* Declaration of the function which calls resetgame function while the button has been clicked*/
$('#reset-button').on('click', function() {
	resetGame();
})
});
