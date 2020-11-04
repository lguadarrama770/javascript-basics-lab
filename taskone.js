/*
Using a series of JS statements, write a program that takes the user's name. 
Ask a few questions to get information from the user.
After the user has answered all of the questions, print a summary of those answers to the console
*/


//prompt questions
const name = prompt("What is your name");
const job = prompt(`Hello ${name}! what do you do?`);
const question = prompt(`Awesome! Do you enjoy being a ${job}`);

//if else statement
if(question.toUpperCase === 'Yes'){
    console.log(`${name} enjoys being a ${job}`);
} else if(question.toUpperCase === 'No'){
    console.log(`${name} does not enjoy being a ${job}`)
}

//document.querySelector('main').innerHTML = ;