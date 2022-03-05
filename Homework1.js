/* 1) Declare 2 variables a and b, such that a > b, and define values for them. Output their sum, difference, product, qutient, remainder*/

let a = 36;
let b = 5;
console.log(a + b, a - b, a * b, a / b, a % b);

       // Same exercise, but a little bit diffrenet.
 let a = +prompt('Enter a number');  
 let b = +prompt('Enter a number');
 if (a > b) {
    console.log(a + b, a - b, a * b, a / b, a % b);
 } else {
     console.log('a < b');
 }


/* 2) Print your name and age in the following format: "May name is ___, I am ____."*/

let name = 'Anna';
let age = 23;
console.log('My name is ' + name + ', I am ' + age + '.');

/* 3) Declare a variable with defined value. Print yes if last digit is 'odd', otherwise print 'no'. */

let number = +prompt('Please, enter a number');
if(number % 2 === 0) {
    console.log('no');
} else {
    console.log('yes');
}

/* 4) Check whether a given number is negative. Print 'yes', if it is negative, print 'no' otherwise. */

let x = +prompt('Enter a number');
if (x < 0) {
    console.log('yes');
} else if(x > 0) {
    console.log('no');
} else {
    console.log('0 is neither positive nor negative');
}

/* 5) Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.*/

let c = +prompt('Enter a number');
let d = +prompt('Enter another number');
if(c % d === 0) {
    console.log('1');
} else if (d % c === 0) {
    console.log('1');
} else {
    console.log('0');
}

/* 6) Given any number between 1 and 12. Print the name of the respective month.*/

let month = +prompt('Please, enter a number between 1 and 12');
 if(month === 1) {
     console.log('January');
 } else if(month === 2) {
     console.log('February');
 } else if(month === 3) {
     console.log('March');
 } else if(month === 4) {
     console.log('April');
 } else if(month === 5) {
     console.log('May');
 } else if(month === 6) {
     console.log('June');
 } else if(month === 7) {
     console.log('July');
 } else if(month === 8) {
     console.log('August');
 } else if(month === 9) {
     console.log('September');
 } else if(month === 10) {
    console.log('October');
} else if(month === 11) {
    console.log('November');
} else if(month === 12) {
    console.log('December');
} else {
    console.log('There is no month under that number');
}

/* 7) Given three numbers. Find the maximum one.*/

let number1 = +prompt('Please, enter a number');
let number2 = +prompt('Please, enter a number');
let number3 = +prompt('Please, enter a number');
if (number1 > number2 && number1 > number3) {
    console.log(number1 + ' is the maximum number');
} else if (number2 > number1 && number2 > number3) {
    console.log(number2 + ' is the maximum number');
} else if (number3 > number1 && number3 > number2) {
    console.log(number3 + ' is the maximum number');
}