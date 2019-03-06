'use strict';
/*
//Initial alert to introduce the user to my page.
alert('Welcome to my page! Let\'s answer a few questions.');

//This was my first method of doing yes answers before I was taught how to use an array.
//Different variables for a possible yes answer.
var answer = 'y';
var answer_upper = answer.toUpperCase();
var full_answer_upper = 'YES';
var full_answer = full_answer_upper.toLowerCase();
var cap_answer = 'Yes';

//This is the first question for hair color, utilizing the above yes variables.
var hair = prompt('Question 1: Is my hair color black?');

if (hair === cap_answer || hair === answer || hair === answer_upper || hair === full_answer || hair === full_answer_upper) {
  alert('That is correct!');
} else {
  alert('What a shame! My hair color is black.');
}

console.log('Response to Question 1 was ' + hair + '.');

//Defines variables that includes the possible yes or no answers in arrays!! Yay!

var yesAnswers = ['yes', 'y', 'sure', 'absolutely'];
var noAnswers = ['no', 'nope', 'n', 'oh hell no'];

//Variable for second question, countries
var country = prompt('Question 2: Do I come from New Zealand?').toLowerCase();

if (yesAnswers.includes(country)) {
  alert('Yes, I am!');
} else if (noAnswers.includes(country)){
  alert('Nope! New Zealand is my home country.');
} else {
  alert('I hope you didnt say Australia, because that is definitely wrong!');
}

console.log('Response to Question 2 was ' + country + '.');

//Third variable for board games question
var game = prompt('Question 3: Is Monopoly my favorite board game?').toLowerCase();

if (yesAnswers.includes(game)) {
  alert('No way! My favorite game is Lords of Waterdeep.');
} else if (noAnswers.includes(game)) {
  alert('Correct! Find out my favorite game at the end.');
} else {
  alert('No problem! Find out my favorite game at the end!');
}

console.log('Response to Question 3 was ' + game + '.');

//This is the fourth question, about cherries.
var cherries = prompt('Question 4: Do you think I have ever lived on an orchard?').toLowerCase();

if (yesAnswers.includes(cherries)) {
  alert('Sure have! I lived on a cherry orchard for 6 weeks one summer!');
} else if (noAnswers.includes(cherries)){
  alert('Surprise! I actually have.');
} else {
  alert('Not sure what you mean, but I definitely have.');
}

console.log('Response to Question 4 was ' + cherries + '.');

//This is the last question, about lunch.
var lunch = prompt('Question 5: Would I have a steak for lunch?').toLowerCase();

if (yesAnswers.includes(lunch)) {
  alert('Steak is a bit heavy. Probably not.');
} else if (noAnswers.includes(lunch)){
  alert('You know me well. I would have poke.');
} else {
  alert('Well, I would probably choose poke anyway.');
}

console.log('Response to Question 5 was ' + lunch + '.');

//Sixth question: Guess a number
// Planning
// Question: How many plants do I have in my house?
// Answer: 11
// Response: You're right!, too high, too low
// Opportunities to answer: 4

//Variable plants is the question box that will pop up for question 6.
var plants = prompt('Question 6: How many plants do I have in my house? Please enter a number.');
//This is the correct answer. 
var plantAnswer = 11;
//Index of how many guesses. 
var guesses = 1;

//A while loop that makes sure the user enters a guess, otherwise prompts them to submit a guess.
//This only works at the beginning though. Need to integrate it into the while loop somehow.
while(plants === '' || plants === null){
  plants = prompt('Please have a guess!');
}

//Loop to show too high or too low message for guess.
//Having trouble getting something to show something different when it is a correct answer. 
while(guesses < 4){
  console.log('Response ' + guesses + ' to Question 6 was ' + plants + '.');
  if (plants < plantAnswer){
    plants = prompt('That\'s too low. Have another try.');
  } else if (plants > plantAnswer){
    plants = prompt('That\'s too high. Have another try.');
  } else {
    plants = prompt('I\'m not sure what you mean. Have another try.');
  }
  guesses++;
}
//This console logs the last submission.
console.log('Response ' + guesses + ' to Question 6 was ' + plants + '.');

//Last alert to tell the user there are no more guesses.
alert('That\'s all the guesses you get!');

*/

//Question 7: Multiple correct answers, stored in array
//User gets 6 tries
//Displays correct answer when gets it correct OR used up all tries

//This is an array of my languages
var my_languages = ['english', 'chinese', 'french']; 
var i = 1;
//This is the message to show if the user gets the language correct or they use up the tries.
var possible_languages = 'The correct languages are English, Chinese, and French!';

//This is the prompt for question 7, making sure it's in lower case to match the array.
var language_anycase = prompt('Question 7: Which languages do I speak? Have a guess!');
var language = language_anycase.toLowerCase();

//This is a loop to display different messages depending on what the response is.
//I can't get this to break after a correct response, it just gets stuck in the loop until the tries are over.
//Need to fix this
do {
  console.log('Response ' + i + ' to Question 7 was ' + language + '.');
  switch(language){
  case my_languages[0]:
    alert('Tally ho! ' + possible_languages);
    break;
  case my_languages[1]:
    alert('Ni hao! ' + possible_languages);
    break;
  case my_languages[2]:
    alert('Bonjour! ' + possible_languages);
    break;
  default :
    language = prompt('Unfortunately not. Try again?'); 
  }
  i++;
} while (i < 3);
//Logs the final response. 
console.log('Response ' + i + ' to Question 7 was ' + language + '.');
//Final message before it goes to the home page.
alert('All done!' + possible_languages);




/*
while (i < 3){
  switch(my_languages){
  case 'english' :
    alert(possible_languages);
    break;
  case 'chinese' :
    alert(possible_languages);
    break;
  case 'french' :
    alert(possible_languages);
    break;
  default :
    language = prompt('Unfortunately not. Try again?');
  }
  i++;
}
*/












/*  Nicholas' code demo

var sweaters = prompt('Do I have 5 sweaters?');
var lowerSweaters = sweaters.toLowerCase();

if (sweaters === 'yes') {
  alert('That\'s right!');
} else if (sweaters === 'no') {
  alert('No way!');
} else {
  alert('Please answer the question.');
}
*/

/* Nicholas pre-lab demo
Question that accepts a number
see if answer was too high or two low
ask again
limited number of questions

prompt user for a guess
check if user is right
check if user writes a number
while the guess is too low or high, ask again


var guesses = 0;
var number = prompt('Guess how many Christmas sweaters I have');//stretch goal
guesses++;

while((number > 8 || number < 8) && guesses <3){
  if (number > 8){
    alert('too high');
  }
  number = prompt('Guess again');
  guesses++;
}

if(guesses <3){
  alert('great job');
} else {
  alert('bad job');
}

*/
