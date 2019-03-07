'use strict';

/*Things to do
True false statements to kick out of the while loop, more complicated conditions
Integrating the '' and null into the loops
Putting the first 5 questions ino an array
Random number?
Reorganize variables for Q7
Find a separator function to put spaces between list between array items
*/

//Initial alert to introduce the user to my page and get their name.
var user = prompt('Hi there! What\'s your name?');
alert('Well, ' + user + ', welcome to my page! I\'ve made some questions so you can get to know a little about me! Let\'s get started.');
console.log('User\'s name is ' + user);

//Defines variables that includes the possible yes or no answers in arrays
var yesAnswers = ['yes', 'y', 'sure', 'absolutely'];
var noAnswers = ['no', 'nope', 'n', 'oh hell no'];

//Create array to log all correct answers.
var correct = [];

//This function will ask Q1
function askHair(){
//variable for first question, hair
  var hair = prompt('Question 1: Is my hair color black?').toLowerCase();

  if (yesAnswers.includes(hair)) {
    alert('That is correct!');
    correct.push('Q1');
    console.log(user + ' got Question 1 correct.');
  } else if (noAnswers.includes(hair)){
    alert('Nope! New Zealand is my home country.');
  } else {
    alert('You should probably enter a yes or no response.');
  }
  console.log('Response to Question 1 was ' + hair + '.');
}
askHair();


//This function will ask Q2
function askCountry(){
  //Variable for second question, countries
  var country = prompt('Question 2: Do I come from New Zealand?').toLowerCase();

  if (yesAnswers.includes(country)) {
    alert('Yes, I am!');
    correct.push('Q2');
    console.log(user + ' got Question 2 correct.');
  } else if (noAnswers.includes(country)){
    alert('Nope! New Zealand is my home country.');
  } else {
    alert('I hope you didnt say Australia, because that is definitely wrong!');
  }
  console.log('Response to Question 2 was ' + country + '.');
}
askCountry();


//This function will ask Q3
function askGame(){
  //Third variable for board games question
  var game = prompt('Question 3: Is Monopoly my favorite board game?').toLowerCase();

  if (yesAnswers.includes(game)) {
    alert('No way! My favorite game is Lords of Waterdeep.');
  } else if (noAnswers.includes(game)) {
    alert('Correct! Find out my favorite game at the end.');
    correct.push('Q3');
    console.log(user + ' got Question 3 correct.');
  } else {
    alert('No problem! Find out my favorite game at the end!');
  }
  console.log('Response to Question 3 was ' + game + '.');
}
askGame();


//This function will ask Q4
function askCherries(){
  //This is the fourth question, about cherries.
  var cherries = prompt('Question 4: Do you think I have ever lived on an orchard?').toLowerCase();

  if (yesAnswers.includes(cherries)) {
    alert('Sure have! I lived on a cherry orchard for 6 weeks one summer!');
    correct.push('Q4');
    console.log(user + ' got Question 4 correct.');
  } else if (noAnswers.includes(cherries)){
    alert('Surprise! I actually have.');
  } else {
    alert('Not sure what you mean, but I definitely have.');
  }
  console.log('Response to Question 4 was ' + cherries + '.');
}
askCherries();


//This function will ask Q5
function askLunch(){
  //This is the last question, about lunch.
  var lunch = prompt('Question 5: Would I have a steak for lunch?').toLowerCase();

  if (yesAnswers.includes(lunch)) {
    alert('Steak is a bit heavy. Probably not.');
  } else if (noAnswers.includes(lunch)){
    alert('You know me well. I would have poke.');
    correct.push('Q5');
    console.log(user + ' got Question 5 correct.');
  } else {
    alert('Well, I would probably choose poke anyway.');
  }
  console.log('Response to Question 5 was ' + lunch + '.');
}
askLunch();


// QUESTION 6: Guess a number
// Planning
// Question: How many plants do I have in my house?
// Answer: Random?
// Response: You're right!, too high, too low
// Opportunities to answer: 4

//Variable plants is the question box that will pop up for question 6.
var plants = prompt('Question 6: How many plants do I have in my house? Please enter a number.');
//This is the correct answer. 
var plantAnswer = 11;
console.log('The number of plants is ' + plantAnswer);
//Index of how many guesses. 
var guesses = 1;

//This function will ask Q6
function askPlants(){
  //A while loop that makes sure the user enters a guess, otherwise prompts them to submit a guess.
  //This only works at the beginning though. Need to integrate it into the while loop somehow.
  while(plants === '' || plants === null){
    plants = prompt('Please have a guess!');
  }

  //Loop to show too high or too low message for guess.
  //Having trouble getting something to show something different when it is a correct answer. 
  while (guesses < 4) {
    console.log('Response ' + guesses + ' to Question 6 was ' + plants + '.');
    if (plants < plantAnswer){
      plants = prompt('That\'s too low. Have another try.');
    } else if (plants > plantAnswer){
      plants = prompt('That\'s too high. Have another try.');
    } else if (plants == plantAnswer){
      plants = prompt('That\'s right!');
      correct.push('Q6');
      console.log(user + ' got Question 6 correct.');
      break; //or use i = 4;
    } else {
      plants = prompt('Maybe. Have another try.');
    }
    guesses++;
  }
}
askPlants();
//This console logs the last submission.
console.log('Response ' + guesses + ' to Question 6 was ' + plants + '.');

//Last alert to tell the user there are no more guesses.
alert('I actually have ' + plantAnswer + ' plants in my house!');

//This function will ask Q7
function askLanguage() {
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
  var response = 'Response ' + i + ' to Question 7 was ' + language + '.';

  //This is a loop to display different messages depending on what the response is.
  //Stretch goal: complex while condition: haven't gotten correct response as false
  while (i < 6) {
    console.log('Response ' + i + ' to Question 7 was ' + language + '.');
    switch(language){
    case my_languages[0]:
      alert('Tally ho!');
      correct.push('Q7');
      console.log(user + ' got Question 7 correct.');
      i = 9;
      break;
    case my_languages[1]:
      alert('Ni hao!');
      correct.push('Q7');
      console.log(user + ' got Question 7 correct.');
      i = 9;
      break;
    case my_languages[2]:
      alert('Bonjour!');
      correct.push('Q7');
      console.log(user + ' got Question 7 correct.');
      i = 9;
      break;
    default:
      language = prompt('Unfortunately not. Try again?');
    }
    i++;
  }
  //Logs the final response. 
  console.log(response);
  //Final message before it goes to the home page.
  alert('All done!' + possible_languages);
}
askLanguage();



//tally of correct answer, showing user's name too
alert(user + ', you got ' + correct.length + ' out of 7 correct! Good job!');
console.log('The total number of correct answers is ' + correct.length + '. ' + user + ' got ' + correct + ' correct.');

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
