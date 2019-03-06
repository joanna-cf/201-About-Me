'use strict';

//This was my first method of doing yes answers before I was taught how to use an array.
//Different variables for a possible yes answer.
var answer = 'y';
var answer_upper = answer.toUpperCase();
var full_answer_upper = 'YES';
var full_answer = full_answer_upper.toLowerCase();
var cap_answer = 'Yes';

//This is the first question for hair color, utilizing the above yes variables.
var hair = prompt('Is my hair color black?');

if (hair === cap_answer || hair === answer || hair === answer_upper || hair === full_answer || hair === full_answer_upper) {
  alert('That is correct!');
} else {
  alert('What a shame! My hair color is black.');
}

console.log('User entered ' + hair + ' in response to the first question.');

//Defines variables that includes the possible yes or no answers in arrays!! Yay!

var yesAnswers = ['yes', 'y', 'sure', 'absolutely'];
var noAnswers = ['no', 'nope', 'n', 'oh hell no'];

//Variable for second question, countries
var country = prompt('Do I come from New Zealand?').toLowerCase();

if (yesAnswers.includes(country)) {
  alert('Yes, I am!');
} else if (noAnswers.includes(country)){
  alert('Nope! New Zealand is my home country.');
} else {
  alert('I hope you didnt say Australia, because that is definitely wrong!');
}

console.log('User entered ' + country + ' in response to the second question.');

//Third variable for board games question
var game = prompt('Is Monopoly my favorite board game?').toLowerCase();

if (yesAnswers.includes(game)) {
  alert('No way! My favorite game is Lords of Waterdeep.');
} else if (noAnswers.includes(game)) {
  alert('Correct! Find out my favorite game at the end.');
} else {
  alert('No problem! Find out my favorite game at the end!');
}

console.log('User entered ' + game + ' in response to the third question.');

//This is the fourth question, about cherries.
var cherries = prompt('Do you think I have ever lived on an orchard?').toLowerCase();

if (yesAnswers.includes(cherries)) {
  alert('Sure have! I lived on a cherry orchard for 6 weeks one summer!');
} else if (noAnswers.includes(cherries)){
  alert('Surprise! I actually have.');
} else {
  alert('Not sure what you mean, but I definitely have.');
}

console.log('User entered ' + cherries + ' in response to the fourth question.');

//This is the last question, about lunch.
var lunch = prompt('Would I have a steak for lunch?').toLowerCase();

if (yesAnswers.includes(lunch)) {
  alert('Steak is a bit heavy. Probably not.');
} else if (noAnswers.includes(lunch)){
  alert('You know me well. I would have poke.');
} else {
  alert('Well, I would probably choose poke anyway.');
}

console.log('User entered ' + lunch + ' in response to the last question.');
