function concat(str1, str2) {
    return str1.concat(str2);
}
console.log(concat("dog", "cat"));

function indexOf(str) {
    return str.indexOf("o");
}
console.log(indexOf("hotel"));

function lastIndexOf(str) {
    return str.lastIndexOf("e");
}
console.log(lastIndexOf("watermellon"));

var strA = "The plain jane, walked down marry lane."
function match(str) {
    return str.match(/ane/);
}
console.log(match(strA));

var strA = "The plain jane, walked down marry lane."
function replace(str) {
    return str.replace(/jane/g, "John");
}
console.log(replace(strA));

var myString = "watermellon";
function slice(str) {
    return str.slice(0, 5);
}
console.log(slice(myString));

var myStringA = "Hello world, today I went to the store to buy food and stuff."
function split(str) {
    return str.split(" ");
}
console.log(split(myStringA));

var myStringB = "Basketball";
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase(myStringB));

var myStringC = "Baseball";
function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toUpperCase(myStringC));

var myStringD = "Aplhabet";
function substr(str) {
    return str.substr(1, 4);
}
console.log(substr(myStringD));
