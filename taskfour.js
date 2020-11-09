/* Write a series of JS statements that prompt a user for their name, rate of pay, and hours worked per week.
The program needs to compute the total pay for the employee.
If the hours worked are greater than 40, use 1.5 for the overtime rate.
Print the result to the console in a sentence.
*/

const name = prompt("What is your name?");
const rateOfPay = prompt(`What is your rate of pay`);
const hoursPerweek = prompt(`How many hours do you work per week?`);

const payment = +rateOfPay * +hoursPerweek;
const overtimeRate = (+rateOfPay * +hoursPerweek) * 1.5;

if (+hoursPerweek > 40) {
    console.log(`${name} worked a total of ${hoursPerweek} hours receiving a pay of $ ${overtimeRate}`)
} else {
    console.log(`${name} worked a total of ${hoursPerweek} hours receiving a pay of $ ${payment}`)  
}