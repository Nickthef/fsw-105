// Section A
function fiveAndGreaterOnly(arr) {
    // your code here
    var result = arr.filter(function(val) {
        return val >= 5;
    });
    
    return result;
} // close function

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));  // Output: [6, 8]



function evensOnly(arr) {
    // your code here
    var evensOnly = arr.filter(function(val) {
        return val % 2 === 0;
    });

    return evensOnly;
} // close function

console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2]));  // Output: [6, 8, 2]



// Section B
function doubleNumbers(arr) {
    // your code here
    var doubleNumbers = arr.map(function(val) {
        return val * 2;
    });

    return doubleNumbers;
} // close function

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));  // Output: [4, 10, 200]


function stringItUp(arr){
    // your code here 
    var string = arr.map(function(num) {
        return num.toString();
    });

    return string;
}

console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));  // Output: ["2", "5", "100"]


function capitalizeNames(arr){
    // your code here
    var capName = arr.map(function(val) {
        var firstLetter = val.charAt(0).toUpperCase();
        var restOfLetters = val.slice(1).toLowerCase();
        var result = firstLetter + restOfLetters;

        return result;
    });

    return capName;
}

console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//Output: ["John", "Jacob", "Jingleheimer", "Schmidt"]


// Section C
function total(arr)
{
    //your code here 
    var addAll = arr.reduce(function(val, final) {
        return final = final + val;
    });
    return addAll;
}

console.log("---  Array Reduce #1 ---");
console.log(total([1, 2, 3]));  // Output: 6


function stringConcat(arr) {
    //your code here 
    var result = arr.reduce(function(str) {
        return arr.join("");
    });
    
    return result;
}

console.log("---  Array Reduce #2 ---")
console.log(stringConcat([1, 2, 3]));   // Output: "123"


function totalVoters(arr){
    //your code here
     return arr.reduce(function(count, voter) {
        return count + voter.voted;
    }, 0);
}

var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];

console.log("---  Array Reduce #3 ---")
console.log( totalVoters(voters) );  // Output: 7


// Section D
function leastToGreatest(arr) {
    //your code here
    var result = arr.sort(function(num1, num2) {
        return num1 - num2;
    });
    return result;
}

console.log("---  Array Sort #1 ---");
console.log( leastToGreatest([1, 3, 5, 2, 90, 20]) );  //Output: [1, 2, 3, 5, 20, 90]


function  greatestToLeast(arr){
    //your code here
    var result = arr.sort(function(num1, num2) {
        return num2 - num1;
    });
    return result;
}

console.log("---  Array Sort #2 ---")
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));  // Output: [90, 20, 5, 3, 2, 1]


function lengthSort(arr) {
    //your code here 
    var result = arr.sort(function(str1, str2) {
        return str1.length - str2.length;
    });
    return result;
}

console.log("---  Array Sort #3 ---")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "wolf", "eaten", "family"]