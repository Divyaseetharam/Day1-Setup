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