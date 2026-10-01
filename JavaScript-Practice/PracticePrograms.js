//Write a function that checks if a number is even or odd.

function checkEvenOdd(num){
    if(num%2 ==0){
        return num + " is an even number.";
    } else {
        return num + " is an odd number.";
    }

};  
console.log(checkEvenOdd(4)); // Output: "4 is an even number."
console.log(checkEvenOdd(7)); // Output: "7 is an odd number."   

//Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


//Write a function that takes an array of numbers and returns the largest number in the array.  
function findLargest(numbers) {
    let largest = numbers[0];  // assume first number is largest

    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

console.log(findLargest([10, 25, 3, 99, 45]));  // Expected output: 99

//Wrtie a function that takes a string and reverse it.

function reverseString(str) {
    let reversed = "";

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

console.log(reverseString("Divya"));  // Expected: ayviD

//Count vowels in a string
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("automation"));  // Expected: 6


