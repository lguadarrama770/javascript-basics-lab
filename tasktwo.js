/*
Create a series of JS statements that asks a user what their favorite color is out of 3 different colors 
(Give the user 3 colors to choose from.). 
Based on their color choice, write conditional statements that print a message to the console. 
*/

const name = prompt("What is your name?");
let color = prompt(`Hello ${name}, choose a color. Red, Blue, or Purple?`);
const colorRed = 'Red';
const colorBlue = 'Blue';
const colorPurple = 'Purple';

if(color.toUpperCase() === colorRed.toUpperCase()) {
    console.log(`${name} chose RED`)
} else if(color.toUpperCase() === colorBlue.toUpperCase()) {
    console.log(`${name} chose BLUE`)
} else if(color.toUpperCase() === colorPurple.toUpperCase()) {
    console.log(`${name} chose PURPLE`)
}
