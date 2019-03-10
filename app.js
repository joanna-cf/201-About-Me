'use strict';

/*TODO:
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

//Defines variables to be used in loop 
var yesYes = ['yes', 'y', 'sure', 'absolutely'];
var noNo = ['no', 'nope', 'n', 'oh hell no'];
var questions = ['Question 1: Is my hair color black?', 'Question 2: Do I come from New Zealand?', 'Question 3: Is Monopoly my favorite board game?', 'Question 4: Do you think I have ever lived on an orchard?', 'Question 5: Would I have a steak for lunch?'];
var rightAnswers = [yesYes, yesYes, noNo, yesYes, noNo];
var wrongAnswers = [noNo, noNo, yesYes, noNo, yesYes];
var right = ['That is correct!', 'Yes, I consider myself a Kiwi and moved to the US two years ago!', 'Correct! My favorite game is Lords of Waterdeep', 'Sure have! I lived on a cherry orchard for 6 weeks one summer!', 'You know me well. I would have poke.'];
var wrong = ['My hair really is black! Look! No greys!', 'Nope! New Zealand is my home country.', 'No way! My favorite game is Lords of Waterdeep.', 'Surprise! I actually have.', 'Steak is a bit heavy. Probably not.'];

//Create array to log all correct answers.
var correct = [];

//Function to ask the Y/N questions
function askQuestions(){
  for (var i = 0; i < questions.length; i++){
    do {
      var responses = prompt(questions[i]).toLowerCase();
    } while (!responses);

    if (rightAnswers[i].includes(responses)){
      alert(right[i]);
      correct.push(responses);
      console.log(user + ' responded to ' + questions[i] + ' with ' + responses + ' and got it correct.');
    } else if (wrongAnswers[i].includes(responses)){
      alert(wrong[i]);
    } else {
      alert ('Oops! Let\'s try another question');
    }
  }
}

askQuestions();

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
      alert('That\'s right!');
      correct.push(plantAnswer);
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

//Question 7: Multiple correct answers, stored in array
//User gets 6 tries
//Displays correct answer when gets it correct OR used up all tries

//This is an array of my languages
var my_languages = ['english', 'chinese', 'french']; 
var i = 1;
//This is the message to show if the user gets the language correct or they use up the tries.
var possible_languages = 'The correct languages are English, Chinese, and French!';

//This function will ask Q7
function askLanguage() {
  //This is the prompt for question 7, making sure it's in lower case to match the array.
  var language = prompt('Question 7: Which languages do I speak? Have a guess!').toLowerCase();
  var response = 'Response ' + i + ' to Question 7 was ' + language + '.';

  //This is a loop to display different messages depending on what the response is.
  //Stretch goal: complex while condition: haven't gotten correct response as false
  while (i < 6) {
    console.log('Response ' + i + ' to Question 7 was ' + language + '.');
    switch(language){
    case my_languages[0]:
      alert('Tally ho!');
      correct.push(language);
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

//Alerts user of how many questions they got correct
alert(user + ', you got ' + correct.length + ' out of 7 correct! Good job!');
console.log('The total number of correct answers is ' + correct.length + '. ');

//This was my original code, before we looked at how to use for-loops to go through the first 5 questions
// //This function will ask Q1
// function askHair(){
// //variable for first question, hair
//   var hair = prompt(questions[0]).toLowerCase();

//   while(hair === '' || hair === null){
//     hair = prompt('Please have a guess!');
//   }

//   if (yesAnswers.includes(hair)) {
//     alert('That is correct!');
//     correct.push('Q1');
//     console.log(user + ' got Question 1 correct.');
//   } else if (noAnswers.includes(hair)){
//     alert('Nope! New Zealand is my home country.');
//   } else {
//     alert('You should probably enter a yes or no response.');
//   }
//   console.log('Response to Question 1 was ' + hair + '.');
// }

// //This function will ask Q2
// function askCountry(){
//   //Variable for second question, countries
//   var country = prompt(questions[1]).toLowerCase();

//   while(country === '' || country === null){
//     country = prompt('Please have a guess!');
//   }

//   if (yesAnswers.includes(country)) {
//     alert('Yes, I am!');
//     correct.push('Q2');
//     console.log(user + ' got Question 2 correct.');
//   } else if (noAnswers.includes(country)){
//     alert('Nope! New Zealand is my home country.');
//   } else {
//     alert('I hope you didnt say Australia, because that is definitely wrong!');
//   }
//   console.log('Response to Question 2 was ' + country + '.');
// }

// //This function will ask Q3
// function askGame(){
//   //Third variable for board games question
//   var game = prompt(questions[2]).toLowerCase();

//   while(game === '' || game === null){
//     game = prompt('Please have a guess!');
//   }

//   if (yesAnswers.includes(game)) {
//     alert('No way! My favorite game is Lords of Waterdeep.');
//   } else if (noAnswers.includes(game)) {
//     alert('Correct! Find out my favorite game at the end.');
//     correct.push('Q3');
//     console.log(user + ' got Question 3 correct.');
//   } else {
//     alert('No problem! Find out my favorite game at the end!');
//   }
//   console.log('Response to Question 3 was ' + game + '.');
// }

// //This function will ask Q4
// function askCherries(){
//   //This is the fourth question, about cherries.
//   var cherries = prompt(questions[3]).toLowerCase();

//   while(cherries === '' || cherries === null){
//     cherries = prompt('Please have a guess!');
//   }

//   if (yesAnswers.includes(cherries)) {
//     alert('Sure have! I lived on a cherry orchard for 6 weeks one summer!');
//     correct.push('Q4');
//     console.log(user + ' got Question 4 correct.');
//   } else if (noAnswers.includes(cherries)){
//     alert('Surprise! I actually have.');
//   } else {
//     alert('Not sure what you mean, but I definitely have.');
//   }
//   console.log('Response to Question 4 was ' + cherries + '.');
// }

// //This function will ask Q5
// function askLunch(){
//   //This is the last question, about lunch.
//   var lunch = prompt(questions[4]).toLowerCase();

//   while(lunch === '' || lunch === null){
//     lunch = prompt('Please have a guess!');
//   }

//   if (yesAnswers.includes(lunch)) {
//     alert('Steak is a bit heavy. Probably not.');
//   } else if (noAnswers.includes(lunch)){
//     alert('You know me well. I would have poke.');
//     correct.push('Q5');
//     console.log(user + ' got Question 5 correct.');
//   } else {
//     alert('Well, I would probably choose poke anyway.');
//   }
//   console.log('Response to Question 5 was ' + lunch + '.');
// }

// //This is an array of all the functions that will ask the five questions
// var run_questions = [askHair(), askCountry(), askGame(), askCherries(), askLunch()];

// //This for loop will go through all the 5 functions, calling them in turn
// for (var q = 0; q < run_questions.length; q++){
//   run_questions[q];
// }