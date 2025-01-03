document.getElementById("myH1").textContent = "What's up?";
document.getElementById("myP").textContent = "This website will be your introduction to \"variables\" in Javascript!";

// 1. Declaration   let x;
let x;
// 2. Assignment    x = 100;
x = 100;

// you can declare AND assign this in one line
// as follows: let x = 100;

// display 'x' in the console
console.log(x);



// let's play with some numbers...
let age = 21;                             // set the age
console.log(age);                         // print out just the age
console.log(typeof age);                  // print out the data type for 'age'
console.log(`You are ${age} years old.`); // sentence

let price = 10.99;
console.log(price);
console.log(typeof price);
console.log(`The price is $${price}.`);

let GPA = 3.46;
console.log(GPA);
console.log(typeof GPA);
console.log(`Your GPA is ${GPA}.`);


// how about some strings?
let firstName = "Edwin";
console.log(typeof firstName);
console.log(`My name is ${firstName}!`);

let favFood = "Pizza";
console.log(`I like ${favFood}.`);

// booleans!
let online = true;
console.log(typeof online);
console.log(`${firstName} is online: ${online}`);


//! Now, we will actually make something we can see on the site itself!
let fullName = "Edwin Villaneuva";
let myAge = 21;
let student = true;

document.getElementById("p1").textContent = `Your name is: ${fullName}.`;
document.getElementById("p2").textContent = `You are ${myAge} years old.`;
document.getElementById("p3").textContent = `Enrolled at UCF: ${student}`;