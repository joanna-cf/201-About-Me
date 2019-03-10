'use strict';

// The following code was the project re-written by Nicholas on Class 5

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

// intiial code before it was put in a for loop. Also from Class 5
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

/* Nicholas' Lab 3 Code review

Logging tries
alert('you look ' + ++i + ' tries');

Have HTML appear before all prompts:
Best practice: put it on the page, don't pop it up.
If we have to use it: put a button, if click button, then quiz pops up

      var guessed_florida = false; //haven't guessed florida correct yet
      //need something to check

      if (seven === 'florida' && guessed_florida === false){
        alert();
        guessed_florida = true; // won't be able to guess this again, has it has become true, won't go into this code block again
      } else if (seven === 'washington' && guessed_washington === false){
        alert();
        guessed_washington = true;
      }

      if (guessed_florida && guessed_washington){
        alert();
        break;
      }

Nick's code from scratch
While loops can have more complex conditionals than for loops

var answers = ['f', 'w', 'c', 'h'];
// do this so we can count down the number of guesses left
var past_correct_guesses = [];
var guesses = 6;
var answered_correct = false;

//while guesses left and use not answered correctly yet (answered correct === false)
while (guesses > 0 && answered_correct === false}{ //every single guess
  debugger;
  var state_lived = prompt('You have ' + guesses + ' guesses left. What is...');  
  var is_a_cheater = false;

  //DONE: are they are cheater e.g. check florida twice
  for (var k = 0; k < past_correct_guesses. length; k++){
    if(state_lived === past_correct_guesses [k]){
      is_a_cheater = true;
    }
  }

  // DONE: don't check florida again
  // TODO: check washington
  for (var j = 0; j <answers.length; j++){ //checks every single answer
    // check for correct answer
    if(state_lived === answers[j] && is_a_cheater === false){  //if one matches, triggers statement
      alert('Good job, you have 1 more state to find');
      past_correct_guesses.push(state_lived);
      guesses--;
    }
  }

 if (is_a_cheater){
    alert('stop cheater, you lose two guesses');
    guesses -= 2;
  }
  
  //TODO: to fix
  else {
    alert('nope, try again');
    guesses--;
  }
}
*/

/* Nicholas lab 3 demo
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

/*  Nicholas' Lab 2 Code Review

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
