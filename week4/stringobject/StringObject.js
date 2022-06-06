// Requirement #1

function upperCaseLowerCase(str) {
    return str.toUpperCase() + " " + str.toLowerCase();
}

var strA = "hello world";
console.log(upperCaseLowerCase(strA));

// Requirement #2

function halfLength(num) {
    return Math.floor(num / 2);
}

var num1 = 692;
console.log(halfLength(num1));

// Requirement #3

function firstHalf(str) {
    var strLength = str.length;
    var halfLength1 = halfLength(strLength);

    return str.slice(0, halfLength1);
}
console.log(firstHalf("Hello World"));

// Requirement #4

function firstUpperSecondLower(str) {
    var first = str.slice(0, str.length / 2);
    var second = str.slice(str.length / 2);

    if (str.length % 2 === 0) {
        return first.toUpperCase() + second.toLowerCase();
    } else {
        if (first.length < second.length) {
            return first.toUpperCase() + second.toLowerCase();
        } else {
            return second.toUpperCase() + first.toLowerCase();
        }
    }
}

console.log(firstUpperSecondLower("evens"));
console.log(firstUpperSecondLower("even"));