// Exercise #1 Solution
function findWords() {
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
    let dog_names = ["Max", "HAS", "PuRple", "dog"];
    let found = false;
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.toLowerCase().includes(dog_names[i].trim().toLowerCase())) {
            console.log("Matched " + dog_names[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("No Matches");
    }
}

// Call the function
findWords();


// Exercise #2 Solution
function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

// Call the function with the given array
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log("Given arr == ", arr);
console.log("Output arr == ", replaceEvens(arr));

// Four codewars problems i've done

// One
function add(lst) {
    let cumulativeSum = 0;
    let result = [];

    for (let num of lst) {
        cumulativeSum += num;
        result.push(cumulativeSum);
    }

    return result;
}

// Test case
console.log(add([1, 2, 3, 4, 5]));

// Two
function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

// Test case
console.log(squareSum([1, 2, 2]));

// Three
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Test cases
console.log(evenOrOdd(3));
console.log(evenOrOdd(6));
console.log(evenOrOdd(0));

// Four
function noSpace(x) {
    return x.replace(/\s/g, '');
}

// Test case
console.log(noSpace("hello world"));
