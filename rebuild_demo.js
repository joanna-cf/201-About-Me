'use strict';

/* PLANNING
Conditions
  if answer is right or wrong
Possible answers
Variables --> things to compare

Question about board games
Question loops until they give a correct answer 
Question with hints

*/

//TODO: board game yes or not
// Use a prompt to ask the question
// Store import
// check it against right or wrong
// alert them to if they were correct 
// do this five times
// when you can just copy-paste code, then it is not dry. Use a for-loop

var questions_array = ['Do I like sweaters?', 'am i dumb?', 'do I like coffee?', 'am I a teacher?'];
// J: can make an array for the possible yes or no answers possible that still count
var answers_array = [yesses, noes, yesses, yesses];
var bad_answers_array = [noes, yesses, noes, noes];
var question_responses = ['of course i like sweaters', 'ur dumb', 'it runs through my veins', 'im glad you can tell'];
var bad_question_responses =['hey', 'no you are', 'haven\'t you seen me drink it', 'why are you in class then'];

var yesses = ['yes', 'y', 'sure', 'yeah']; //arrays are containers and are not defined by what's inside them
var noes = ['naw', 'nope', 'n', 'no'];

// debugger; could be used here to inspect JS
for(var i = 0; i < questions_array.length; i++){

  do { //solves not having a response! So smart!
    var sweaters = prompt(questions_array[i]); //if arrays have index, and for loop starts at 0, then you can use the index to loop through 
  } while (!sweaters); //logical not. While nothing truthy inside of sweaters. Now expecting: '', null

  if(answers_array[i].includes(sweaters)){
    alert(question_responses[i]); // Alert question responses at index
  } else if (bad_answers_array[i].includes(sweaters)){
    alert(bad_question_responses[i]);
  } else {
    alert('try again');
  }
  console.log('given :' + sweaters + ', correct: yes');
}

// intiial code before it was put in a for loop.
// var sweaters = prompt('Do I like sweaters?');
// if(sweaters === 'yes'){
//   alert('of course, next question.');
// } else if (sweaters === 'no'){
//   alert('you grinch');
// } else {
//   alert('try again');
// }
// console.log('given :' + sweaters + ', correct: yes');

// var coffee = prompt('Do I like coffee?');
// if(coffee === 'yes'){
//   alert('of course, next question.');
// } else if (coffee === 'no'){
//   alert('to each his own');
// } else {
//   alert('try again');
// }
// console.log('given :' + coffee + ', correct: yes');


// while loop until they answer correctly
// what if they can't get it right
// 15 guesses
// descriptive messages in console 

// ask question and get response
// birth month
// 12
// hot==within 1 months, warm 2-3, cold 4-5. icy 6
// check how close they are and tell them one of the options
// complex switch (require us to have a static value)
// arrays of possibilities
// ask for a month number
