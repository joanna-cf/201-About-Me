'use strict';

//This array contains all the correct answers for the questions.
//var answers = ['YES'];

//This is the first question for hair color.
var hair = prompt('Is my hair color black?');
var hair_answer = 'y';
var hair_answer_upper = hair_answer.toUpperCase();
var hair_full_answer_upper = 'YES';
var hair_full_answer = hair_full_answer_upper.toLowerCase();

if (hair === 'Yes' || hair === hair_answer || hair === hair_answer_upper || hair === hair_full_answer || hair === hair_full_answer_upper) {
  alert('That is correct!');
} else {
  alert('What a shame! My hair color is black.');
}

console.log('The answer submitted to "Is my hair color black?" was ' + hair + '.');










// var eyeColor = prompt('Is your eye color blue?');
// var eyeColor_correctAnswer = 'no';

// // if (eyeColor === eyeColor_correctAnswer) {
// //     alert('nice guess');
// // } else {
// //     alert('wrong');
// // }

// if (eyeColor === 'N' || 'n') {
//     alert('You guessed right');
// } else if (eyeColor === 'maybe'){
//     alert ('Make a real guess') 
// } else {
//     alert ('nope');
// }

// if (eyeColor === 'N' || eyeColor === 'n') {
//     alert ('You guessed N');
// }

// // if (some condition) {
// //    some code to be executed if condition is true
// //  };
