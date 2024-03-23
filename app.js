'use strict';
//Enter name
let name=window.prompt("Enter your name please");

// enter gender
let gender;
do {
  gender = window.prompt("Enter your gender please").toLowerCase();
} while (gender != 'male' && gender != 'female');

//Age

let age = parseInt(window.prompt('Enter your age please'));
if (age <= 0) {
  window.alert('Warning: Age is less than or equal to zero');
}

//Confirmation
let wantMessage = window.confirm('Do you want a welcoming message?');
if(wantMessage){
    if(gender.toLowerCase()=='female'){
        window.alert('Welocme Ms. '+name);
    }
    else if(gender.toLowerCase()=='male'){
        window.alert('Welocme Mr. '+name);
    }
    else{
        window.alert('Welocme '+name);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

//Answer 3 questions
function Questions() {
    let question1 = window.prompt('Are you married?');
    let question2 = window.prompt('Do you live in Jordan?');
    let question3 = window.prompt('Do you live in Amman?');
    return { question1, question2, question3 };
}
//Validate the Answers arent empty
function Validation() {
    let questions = Questions();
    if (questions.question1 === '') {
        questions.question1 = 'invalid';
    }
    if (questions.question2 === '') {
        questions.question2 = 'invalid';
    }
    if (questions.question3 === '') {
        questions.question3 = 'invalid';
    }
    return questions;
}
//Store them in an array
function Array1() {
    let answers = Validation(); 
    let array = [];
    for (let key in answers) {
        if (answers.hasOwnProperty(key)) {
            array.push(answers[key]); 
        }
    }
    return array;
}
//Display the answers
function Display() {
    let arr = Array1();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

Display();



//console.log(arr1[1])

//console.log(question1);
//console.log(question1.length);
//console.log(typeof(question1));