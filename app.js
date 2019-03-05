'use strict';

//This array contains all the correct answers for the questions.
//var answers = ['YES'];

//Different variables for a possible yes answer.
var answer = 'y';
var answer_upper = answer.toUpperCase();
var full_answer_upper = 'YES';
var full_answer = full_answer_upper.toLowerCase();
var cap_answer = 'Yes';

//Different variables for a possible no answer.
var answer_n = 'n';
var answer_n_upper = answer_n.toUpperCase();
var full_answer_n = 'no';
var full_answer_n_upper = full_answer_n.toUpperCase();
var cap_answer_n = 'No';

//This is the first question for hair color.
var hair = prompt('Is my hair color black?');

if (hair === cap_answer || hair === answer || hair === answer_upper || hair === full_answer || hair === full_answer_upper) {
  alert('That is correct!');
} else {
  alert('What a shame! My hair color is black.');
}

console.log('The answer submitted to "Is my hair color black?" was ' + hair + '.');

//This is the second question, about NZ
var country = prompt('Do I come from New Zealand?');

if (country === answer || country === answer_upper || country === full_answer || country === full_answer_upper || country === cap_answer){
  alert('I do indeed!');
} else {
  alert('Oh but I am from New Zealand!');
}

console.log('The answer submitted to "Do I come from New Zealand?" is ' + country + '.');

//This is the third question, about my favourite game.
var game = prompt('Is my favorite game Monopoly?');

if (game === answer_n || game === answer_n_upper || game === full_answer_n || game === full_answer_n_upper || game === cap_answer_n){
  alert('You are correct! My favorite game is Lords of Waterdeep');
} else {
  alert('No way! My favorite game is Lords of Waterdeep');
}

console.log('The answer submitted to Monopoly being my favorite game is ' + game + '.');

//Defines variables that includes the possible yes or no answers.

var yesAnswers = ['yes', 'y', 'sure', 'absolutely'];
var noAnswers = ['no', 'nope', 'n', 'oh hell no'];

var cherries = prompt('Do you think I have ever lived on an orchard?').toLowerCase();

if (yesAnswers.includes(cherries)) {
  alert('Sure have! I lived on a cherry orchard for 6 weeks one summer!');
} else if (noAnswers.includes(cherries)){
  alert('Surprise! I actually have.');
} else {
  alert('Not sure what you mean, but I definitely have.');
}

console.log(cherries + " was the answer entered for the cherry question.");
