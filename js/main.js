$(document).ready(function() {

var bx1 = $('#box1');
var bx2 = $('#box2');
var bx3 = $('#box3');
var bx4 = $('#box4');
var bx5 = $('#box5');
var bx6 = $('#box6');
var bx7 = $('#box7');
var bx8 = $('#box8');
var bx9 = $('#box9');

var playValid = false;
var win = false;

var isPlayerOne = true;
var isPlayerTwo = false;

function boxCheck(boxplayed) {
	if ( $(boxplayed).hasClass('free') ) {
		playValid = true;
	} else {
		playValid = false;
	}
}

function resetGame() {
	$('.box').removeClass('played');
	$('.box').removeClass('U-turn');
	$('.box').removeClass('I-turn');
	$('.box').html('');
	$('.box').addClass('free');
	isPlayerOne = true;
	isPlayerTwo = false;
}

function winMsg(player) {
	win = true;

	if (player == "I") {
		alert("Congratulations, you beat the player two!");

	} else {
		alert("Player Two have Won");
	}
resetGame();
}

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

function checkDraw() {

	if ( !($('.box').hasClass('free')) ) {
		alert("Draw! Try playing again!");
		resetGame();
	}
}

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
$('#reset-button').on('click', function() {
	resetGame();
})
});
