/* 
Write a series of JS statements that takes in a user's input of a number between 1 and 20 and fulfills the following conditions:

    - If a number is < 5 - return "Tiny"
    - If a number is  < 10 - return "Small"
    - If a number is  < 15 - return "Medium"
    - If a number is < 20 - return "Large"
    - If a number is =  20 - return "Huge"
*/

const name = prompt("What is your name");
const pickNumber = prompt(`Hello ${name}! Choose a number between 1 and 20.`);

if ( +pickNumber < 5) {
    console.log(`Tiny`)
} else if (+pickNumber <= 10) {
    console.log(`Small`)
} else if (+pickNumber <=15) {
    console.log(`Medium`)
} else if (+pickNumber < 20) {
    console.log(`Large`)
} else if (+pickNumber === 20) {
    console.log(`Huge`)
}