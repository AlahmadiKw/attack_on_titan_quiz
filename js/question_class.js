// ==============
// shuffle array
// source: http://stackoverflow.com/a/2450976
// ==============
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// ===============
// quesiton class constructor
// ===============
function Question() {
	this.q  = '';
	this.choices = [];
	this.img = '';
	// ----- print question
	this.printQuestion = function(){
		if (!this.q){
			alert('q is not defined baby');
		}
		$(".question").html(this.q);
	}
	// ----- print choices
	this.printChoices = function(){
		if (!this.choices){
			alert('choices are not defined yet');
		}
		var temp_arr = ["wrong1", "wrong2", "wrong3", "correct"];
		temp_arr = shuffle(temp_arr);
		// alert(temp_arr);
		rootClick = this;
		$('.choices').children('li').each(function(i){
			$(this).html(rootClick.choices[temp_arr[i]]);
		});
	};
	// ----- print funnny image
	this.printImg = function() {
		$('#funny-img').html(this.img);
	}
}


