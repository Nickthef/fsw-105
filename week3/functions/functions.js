// Requirement #1

function add(a, b) {
    return a + b;
}

add(5, 5);
console.log("Sum is: " + add(5, 5));

// Requirement #2

function findMax(a, b, c) {
    return Math.max(a, b, c);
}
var max = findMax(2, 4, 6);
console.log("Max number is: " + max);

// Requirement #3

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
} 

var cat = 6;
var dog = 7;
console.log(evenOrOdd(cat));
console.log(evenOrOdd(dog));


// Requirement #4

function string(word) {
    if (word.length <= 20) {
        return word + word;
    } else {
        return word.slice(0, word.length / 2)
    }
}
console.log(string("cat"));


