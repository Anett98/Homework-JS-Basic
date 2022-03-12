/* 1) For a given number calculate the sum of its digits. */
let a = + prompt();
sum = 0;
while(a > 0) {
    let c = a % 10;
    sum += c;
    a = (a - a%10) / 10;
}
console.log(sum);

/* 2) Given three sides of a triangle. Check whether the triangle is valid or not. Print 'yes' if it is valid and 'no' otherwise.*/
let b = +prompt();
let c = +prompt();
let d = +prompt();
if(b + c > d && b + d > c && d + c > b) {
    console.log('yes');
} else {
    console.log('no');
}

/* 3) Count numbers of digit 9 in a number. */
let x = +prompt();
let count = 0;
while(x > 0) {
    let c = x % 10;
    if(c === 9) {
        count += 1;
    }
    x = (x - x % 10) / 10
}
console.log(count);

/* 4) Given a positive number. Print it in reverse order. */
let l = +prompt ();
let number = 0;
while( l > 0) {
    number = number * 10 + l % 10;
    l = (l - l % 10) / 10;
}
console.log(number);


/* 5)Given a number as input, check, is it power of 2 */
let y = +prompt();
while(y > 0) {
    y = y/2;
    if(y === 2) {
        console.log(true)
        break;
    } else if (y / 2 < 2) {
        console.log(false);
        break;
    }else {
        continue;
    }
}
