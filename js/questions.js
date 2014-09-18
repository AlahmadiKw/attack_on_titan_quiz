
/* ===================
   questions
   =================== */
var q1 = new Question();
q1.q = 'Choose the correct order of the three walls protecting the humans:';
q1.choices = {'wrong1' : 'Wall Maria, Wall Sina, Wall Rose',
			  'wrong2' : 'Wall Rose, Wall Sina, Wall Maria',
			  'wrong3' : 'Wall Sina, Wall Maria, Wall Rose',
			  'correct': 'Wall Maria, Wall Rose, Wall Sina'};
q1.img = '<iframe src="http://giphy.com/embed/jOUNxurgyh1vy?html5=true" width="500" height="281" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
// -----------
var q2 = new Question();
q2.q = 'Who&#39;s the evil <em>Bitch</em>?';
q2.choices = {'wrong1' : 'Ymir',
			  'wrong2' : 'Sasha Blouse',
			  'wrong3' : 'Hange Zo&#246;',
			  'correct': 'Annie Leonhart'};
q2.img = '<iframe src="http://giphy.com/embed/syozT3paYYk5q?html5=true" width="500" height="281" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
// -----------
var q3 = new Question();
q3.q = 'There is currently one video game adaptaion of the show. Which console is that game made for?';
q3.choices = {'wrong1' : 'PS3',
			  'wrong2' : 'Ninetendo Wii U',
			  'wrong3' : 'Ninetendo Wii',
			  'correct': 'Ninetendo 3DS'};
q3.img = '<iframe src="http://giphy.com/embed/dziuyfiX6OfGE?html5=true" width="500" height="225" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
// -----------
// episode 15
var q4 = new Question();
q4.q = 'What are the names of the two titans that were captured by the Scout Regiment?';
q4.choices = {'wrong1' : 'Hintan and Sonny',
			  'wrong2' : 'Aiko and Tsubame',
			  'wrong3' : 'Ahmad and Mohammad',
			  'correct': 'Sonny and Bean'};
q4.img = '<iframe src="http://giphy.com/embed/HDz7ooB1OOtEI?html5=true" width="500" height="1005" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
// -----------
// episode 4
var q5 = new Question();
q5.q = 'Annie Leonhart is one of the top ten trainees who gets to choose if they want to join the militery police. Which rank was she?';
q5.choices = {'wrong1' : '11th',
			  'wrong2' : '7th',
			  'wrong3' : '5th',
			  'correct': '4th'};
q5.img = '<iframe src="http://giphy.com/embed/zIN9ZDjo0kuAM?html5=true" width="500" height="327" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
// -----------
// episode 22
var q6 = new Question();
q6.q = 'How fast can the wagons go when pulled by Scout Regiment horser? <span class="hint">hint: episode 22</span>';
q6.choices = {'wrong1' : '30Km/hr',
			  'wrong2' : '70Km/hr',
			  'wrong3' : '50Km/hr',
			  'correct': '20Km/hr'};
q6.img = '<iframe src="http://giphy.com/embed/uv2k5AwiAQPjW?html5=true" width="500" height="250" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
// -----------
var q7 = new Question();
// edpisode 15
q7.q = 'How do titans survive?';
q7.choices = {'wrong1' : 'Human flesh',
			  'wrong2' : 'Shawarma',
			  'wrong3' : 'They can be in full power without anything',
			  'correct': 'Sunlight'};
q7.img = '<iframe src="http://giphy.com/embed/33xCd556zL3pK?html5=true" width="500" height="372" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';




q8 = new Question();
q8.q = 'On the 57th expedition, the soldiers used colored smoke guns as codes, which one of the color codes meaning is correct?'
q8.choices = {'wrong1' : 'Red: Deviant Type Titan spotted',
			  'wrong2' : 'Black: Titan spotted',
			  'wrong3' : 'Purple: Attack the titans',
			  'correct': 'Green: Change direction of the formation'};
q8.img = '<iframe src="http://giphy.com/embed/pJHBIMAUSTmco?html5=true" width="500" height="364" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

// ----- save all question in an array
var questions = [q1, q2, q3, q4, q5, q6, q7, q8];
