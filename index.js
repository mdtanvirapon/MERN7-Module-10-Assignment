// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(arg1, arg2) {
    return arg1 - arg2;
}

const result = calculateDifference(10, 5);
console.log(result);



// 2. Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(5));
console.log(isOdd(10));


//3. Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(numbers) {
    if (numbers.length === 0) {
        return undefined; // or handle the empty array case as needed
    }
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

console.log(findMin([5, 3, 8, 1, 4]));
console.log(findMin([-2, -5, 0, 3]));


// 4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumbers);


// 5. Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

const sortedArray = sortArrayDescending([5, 3, 8, 1, 4]);
console.log(sortedArray);


// 6. Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; // Handle empty string
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Hello"));
console.log(lowercaseFirstLetter("WORLD"));
console.log(lowercaseFirstLetter(""));


// 7. Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript"));
console.log(countVowels(""));


// 8. Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numbers) {
    if (numbers.length === 0) return 0; // Handle empty array case

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

console.log(findAverage([1, 2, 3, 4, 5]));
console.log(findAverage([10, 20, 30]));
console.log(findAverage([]));