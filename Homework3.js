/* 1) Given an array. Compute the length of the array. (without using .length) */

function arraysLength (arr) {
    length = 0;
    while(arr[length] !== undefined) {
        length += 1;
    }
    console.log(length)
}
arraysLength([1,2,3]);

/* 2) Given an array of numbers. Print the sum of the elements in array. */

function sum (arr) {
    let a = 0;
    let c = 0;
    while(a < arr.length) {
        c += arr[a];
        a += 1
    }
    console.log (c);
}
sum([1,2,3,4,5,6,7,8,9,10]);

/* 3) Given two numbers. Print the sum of the elements in array */

function isPowerOf3(a, b) {
    let result = [];
    for(let number = a; number <= b; number++) {
        let isPowerOfThree = false;
        let d = number;
        while (d > 1) {
            if(d%3) {
                isPowerOfThree = false;
                break;
            } else {
                d /= 3;
            }
            if (d === 3) {
                isPowerOfThree = true;
                break;
            }
        }
        if(isPowerOfThree) {
            result.push(number);
        }
    }
    return result;
}
isPowerOf3 (1, 40)

/* 4) Given a number as input, insert (-) between each two even numbers */

function evenNumbers (number) {
    let result = [];
    let str = '' + number;
    for(let a = 0; a < str.length; a++) {
        if (str[a] % 2 === 0 && str[a-1] % 2 === 0) {
            result.push('-', str[a],)
        } else {
            result.push(str[a])
        }
    }
    return result.join(' ')
    
}
evenNumbers(7180322)

/* 5) Insert a n positive number. Print the n-st prime number. */

function nstPrimeNumber(n) {
    let count = 0;
    let result = [];
    for (let primeNumber = 3;; primeNumber++) {
      let isPrime = true;
      for (let number = 2; number < primeNumber; number++) {
        if (primeNumber % number === 0) {
          isPrime = false;
          break;
        } else {
          continue;
        }
      }
      if (isPrime) {
        result.push(primeNumber)
          ++count;
      }
      if (count + 1 === n) {
        break;
      }
    }
    return result.pop();
  }
  nstPrimeNumber(14)