/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// const burgerPrice = 550;
// if (burgerPrice > 500){
//     console.log("You'll get Free Coke")
// }
// else{
//     console.log("Coke Price 30 tk")
// }

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
// const weight = 60 ;
// const height = 1.58 ;
// const BMI = weight / ( height * height );
// console.log(BMI.toFixed(2))
// if ( BMI < 18.5){
//     console.log("you are underweight")
// }
// else if (BMI >= 18.5 && BMI <=24.9 ){
//     console.log("You Are Normal")
// }
// else if (BMI >=25 && BMI <= 29.9) {
//     console.log("You're Overweight")
// }

// else {
//     console.log("You Are Obese")
// }

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


// var score = 60.5;

// if (score >= 90){
//     console.log("A")
// }
// else if ( score >=80){
//     console.log("B")
// }
// else if ( score >=70){
//     console.log("C")
// }

// else if ( score >=60){
//     console.log("D")
// }

// else {
//     console.log("F")
// }

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// var scoreMine = 90;
// var scoreF = 39;

// if (scoreMine >= 80){
//     if (scoreF > 80 ){
//         console.log ("Go For a Lucnh")
//     }
//     else if (scoreF < 80 && scoreF >= 60 ){
//         console.log("Good Luck next Time")
//     }
//     else if (scoreF < 60 && scoreF >=40){
//         console.log("Keep You Friend's Msg Unseen")
//     }
//     else{
//         console.log("Block You Friend")
//     }
// }
// else {
//     console.log("Go To Home and Sleep")
// }


/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


// var num1 = 10;
// var num2 = 15;

// // if (num1 > num2) {
// //     console.log(num1 * 2)
// // }

// // else{
// //     console.log(num1 + num2)
// // }

// // Ternary Operator
// num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2);




/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var fare = 800 ;
var age = 6;
var isStudent = true;

if (age < 10){
    console.log("Free")}
    else if (isStudent){
        console.log(("Fare: $" +  (fare - (fare * 50 / 100))) )
    }
    else if (age >= 60){
        console.log( ("Fare: $" + (fare - (fare * 15 / 100))  ))
    }

else{
    console.log("Fare: $" + fare)
}













 























