# Project Name
Tic-Tac-Toe

## Table of contents
* [LiveDemoLink](#LiveDemoLink)
* [Description](#Description)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#Setup)
* [CodeExamples](#CodeExamples)
* [Features](#features)
* [status](#status)
* [WishList](#WishList)
* [Contact](#contact)

## LiveDemoLink
[LiveDemoLink](https://karthikeyansekar-sydney.github.io/tictactoe/)

## Description
This is a simple game of tic tac toe that I have created with my javascript/jquery skills. Here I have created a tic-tac-toe game where two players can play against each other with a more appealing UserInterface and catchy CSS effects.

## Screenshots
![Game screenshot]screenshot(images/ss.png)

## Technologies
[jQuery JavaScript Library v3.4.1 ](https://jquery.com/)

## Setup
<h5>To Play the game</h5>
* git fork(to get the code from my Repository to your remote repository)
* git clone "URL"(to get the code from your repository to the Local Repository)

<h5>To Update any codes to the existing Project do the steps as follows:</h5>
* git add -A
* git commit -m "your message"
* git pull upstream master
* git push origin master
* Pull request to merge the changes made


## CodeExamples
<h5>Sample Javascript code:</h5>

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

## Features
List of features ready:
* Two Player Game Option
* Interactive User Interface
* Improved look and feel

To-do list:
* Option to play against computer(AI)
* Level of the game say easy, medium, Hard

## Status
Project is: _in progress_

## WishList
* Option to play against computer(AI)
* Level of the game say easy, medium, Hard

## Contact
Created by [@karthik](karthikeyansep27@gmail.com) - feel free to contact me!
