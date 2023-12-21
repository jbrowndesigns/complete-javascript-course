'use strict';

const currentYear = new Date().getFullYear();
const calcAgeCall = (birthYear) => currentYear - birthYear;


//*************************************************** BASIC FUNCTION 
/*
Parameter is the placeholder in the function
Argument is the the actual value to replace the parameter

functionName(parameter(s)){
  doSomething
}

functionName(Argument);
*/

function fruitProcessor(fruit1,fruit2){

  const juice = `Juice with ${fruit1} apples and ${fruit2} oranges.`;
  // By using return, the value juice can taken out of the scope block and captured
  return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0,5);
console.log(orangeJuice);

const appleAndOrange = fruitProcessor(3,3);
console.log(appleAndOrange);



//*************************************************** Function Declarations VS Expressions
/*
Declarations- functions with a name, can be called before being defined in the code due to hoisting
Expressions- functions without a name(anonymous function) that produce a value, cannot be called before being defined
*/

// Function Declaration
const age1 = calcAge(1991);

function calcAge(birthYear){
  return 2037 - birthYear;

}



// Function Expression
const calcAge2 = function(birthYear){
return 2037 - birthYear;
}
const age2 = calcAge2(1990);


console.log(age1, age2);



//*************************************************** ARROW FUNCTIONS
/*
An advantage to arrow functions with arrow functions the "this" keyword always represents the object that defined the arrow function.
NOTE If it is one line of code, return is not needed as it is done implicitly 
*/
//Standard Function
function calcbirthYear(birthYear){
  return 2037 - birthYear;
}

const ageTest = calcbirthYear(1992);
console.log(ageTest);

//Arrow function version
const calcArrowbirthYear = birthYear => 2037 - birthYear;

const age3 = calcArrowbirthYear(1992);
console.log(age3);

//EXAMPLE

const yearsUntilRetirement = birthYear => {
  //current year is declared value at top
  const year = 65 -(currentYear - birthYear);
  return year;
}

console.log(`The current year is ${currentYear} which leaves you ${yearsUntilRetirement(1991)} years to go`);


const yearsUntilRetirementWName = (birthYear, firstName) => {
  const year = 65 - (currentYear - birthYear);
  return `${firstName} has ${year} to go before reaching 65 years old.`
}

console.log(yearsUntilRetirementWName(1991, 'Justin'));

//************************************************* Functions Calling Other Functions
/*
NOTE When using "return" the function scope is immediately exited and any other lines will not be executed! 
Global Scope > Local Scope > Function Scope > Block Scope
*/


// Function to be called
const cutPieces = fruit => fruit * 4;


const fruitProcessor2 = (apples, oranges) => {
                      //Callback()
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice was made with ${applePieces} Apple Pieces and ${orangePieces} Orange pieces`;
  return juice;
}

console.log(fruitProcessor2(1,1));
console.log(fruitProcessor2(4,4));

//EXAMPLE

const canYouRetire = (birthYear)=>{
  const age = calcAgeCall(birthYear)
  console.log(age);
  age < 65 ? console.log(`You cannot retire`) : console.log(`You can retire`);
}

canYouRetire(1991);
canYouRetire(1950);


//QUIZ SAMPLE

//************************************************* CHALLENGE #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3; 


let scoreDolphins = calcAverage(85,54,41);
let scoreKoalas = calcAverage(23,34,27);

console.log(scoreDolphins, scoreKoalas);



const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2) ) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}


checkWinner(scoreDolphins, scoreKoalas); //✅