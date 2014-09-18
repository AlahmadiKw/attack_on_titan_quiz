

// GLOBAL VARIABLES
var max_lives = 2;


$(document).ready(function() {

	//=================
	// insert overlay
	//=================
	$(".overlay").fadeIn();
	$('.overlay-inner-inner').on('click', '.submit', function(event) {
		$(".overlay").fadeOut(1000);
	});

	// --- global variables and flags
	var counter = 0;
	var score = 0;
	var didChoose = false;
	var lives = max_lives;
	var finishGame = false;


	//==================
	// insert length(questions)right/wrong bubles
	//==================
	for (var i=0; i<questions.length; i++){
		$(".score").children('ul').append("<li></li>");
	}
	//==================
	// insert initial lives
	//==================
	$('#lives').text(+lives);

	//==================
	// load first question
	//==================

	questions[counter].printQuestion();
	questions[counter].printChoices();
	questions[counter].printImg();
	$('.score li:nth-child('+counter+1+')').addClass('current-circle');

	//==================
	// listen to user choice;
	//==================
	$('.choices').on('click', 'li', function(event){
		$('.choices').children('li').removeClass('choice-clicked');
		$(this).toggleClass('choice-clicked');
		didChoose = true;
	});


	//==================
	// validate answer after submit
	//==================
	$('.choices-submit-container').on('click', '.submit', function(event) {
		if (!finishGame){
			if (!didChoose){
				alert('Hey! choose an answer');
			} else {
				//--- validate
				if (questions[counter].choices['correct'] === $('.choice-clicked').text()){
					// alert('correct');
					score++;
					$('.score li:nth-child('+(counter+1)+')').removeClass('current-circle');
					$('.score li:nth-child('+(counter+1)+')').addClass('correct-circle');
				} else {
					// proccess wrong
					lives--;
					$('.score li:nth-child('+(counter+1)+')').removeClass('current-circle');
					$('.score li:nth-child('+(counter+1)+')').addClass('wrong-circle');
					if (lives>=0){
						alert('wrong\nYou have '+ lives +' remaining lives');
					} else {
						alert('YOU LOST. You\'re a horrbile fan. but you can still continue');
					}
				}
				counter++;
				if (counter < questions.length) {
					$('#lives').text(+lives);
					questions[counter].printQuestion();
					questions[counter].printChoices();
					questions[counter].printImg();
					$('.score li:nth-child('+(counter+1)+')').addClass('current-circle');
					$('.choices').children('li').removeClass('choice-clicked');
				} else {
					finishGame = true;
					processFinalScore(score, questions);
				}
			}
		} else {
			alert("refresh the page to play again");
		}
	});
});


function processFinalScore(score, questions){
	if (score >= questions.length-max_lives){
		alert("you answered"+score+" out of "+questions.length+"\nOMG!! You win.");
	} else {
		alert("you answered"+score+" out of "+questions.length+"\nThanks for trying, but no gift for you");
	}
}
