// 1) Given 3 numbers a,b abd step. Create an array of evenly spaced elements starting from a to b spaced by step.
function spacedByStep (a, b, step) {
    let result = [a];
    while(a <= b) {
        a += step
        if(a > b) {
            break;
        }
        result.push(a)
        }
    return result
}
spacedByStep(1, 5, 0.5)

// 2) Given a string and a symbol. Find the number of occurrences of the symbol in the string.
function occurrencesOfTheSymbol (str, symbol) {
    let count = 0;
    for(let i = 0; i <= str.length; i++) {
        if(str[i] === symbol) {
            count++
        }
    }
    return `The number of occurrences of ${symbol} is ${count}`
}
occurrencesOfTheSymbol('another string', 't')

// 3) Given a string. Check wether the string is palindrome or not.
function palindrome (str) {
    let reverse = '';
    for(let i = str.length-1; i >= 0; i--) {
        reverse += str[i] 
    }
    if (reverse === str) {
        return 'yes'
    }
    return 'no'
}
palindrome('racecar')

// 4) Given an array of numbers. Find the maximum element in array.
function maxNumber (arr) {
    let max = arr[0];
    for(let a = 0; a < arr.length; a++) {
        if(max < arr[a]) {
            max = arr[a];
        }
    }
    return max; 
}
 maxNumber([2, 6, 8, 43, -9])

 // 5) Given an array. Create the array which elements are products between two neghbours.
 function twoNumbersProducts (arr) {
    let result = [];
    for(let i = 0; i < arr.length -1; i++) {
       result.push(arr[i]* arr[i+1])
    }
    return result
}
twoNumbersProducts([1, 1, 4, 32, 6])

// 6) Given a string and symbols. Change first symbol by the second one in the string.
function changeTheSymbol (str, symbol1, symbol2) {
    let result = '' 
    for(let i = 0; i <= str.length - 1; i++) {
        if(str[i] === symbol1) {
            result += symbol2;
            continue;
        }
         result += str[i];
    }
    return result
}
changeTheSymbol('another string', 't', 'T')

/* 7) Print the following number pattern.
1
12
123
1234
12345
1234
123
12
1
*/

let x = +prompt(); // Please, enter 5 for getting the same pattern
let matrix = '';
for(let k = 1;k <= x ; k++) {
    for(let l = 1; l <= k; l++) {
        matrix += l;
    }
    matrix += '\n';
}
for(let k = 1; k <= x-1; k++) {
    for(let l = 1; l <= x - k; l++) {
        matrix += l;
    }
    matrix += '\n';
}
 console.log(matrix);
