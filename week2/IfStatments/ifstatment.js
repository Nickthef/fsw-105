// Preliminaries.

if (5 > 3) {
  console.log("is greater than");
}

if ("cat".length === 3) {
  console.log("is the length");
}

var cat = "cat";
var dog = "dog";
if (cat === dog) {
  console.log("are the same");
} else {
  console.log("not the same");
}

// Bronze Medal.

var person = {
  firstName: "Bobby",
  age: 12,
};

if (person.age > 18) {
  console.log(person.firstName + " " + "Is aloud to go to the movies");
} else {
  console.log(person.firstName + " " + "Is not aloud to go to the movies");
}

if (person.firstName.charAt(0) === "B") {
  console.log(person.firstName + " " + "Is aloud to go to the movies");
}

if (person.firstName.charAt(0) === "B" && person.age > 18) {
  console.log(person.firstName + " " + "Is aloud to go to the movies");
} else {
  console.log(person.firstName + " " + "Is not aloud to go to the movies");
}

// Silver Medal.

if (1 === "1") {
  console.log("strict");
} else if (1 == "1") {
  console.log("loose");
} else {
  console.log("not equal at all");
}

if (1 <= 2 && 2 === 4) {
  console.log("yes");
}

// Gold Medal (#1).

// Reference line 3-5.

5 > 3 ? console.log("is greater than") : ""

// Reference line 32-34.

person.firstName.charAt(0) === "B" ? console.log("Is aloud to go to the movies") : ""

// Reference line 44-45.

1 === "1" ? console.log("Strict") : ""

// Gold Medal (#2).

if (typeof "dog" === "string") {
  console.log("is a string");
}
console.log(typeof "dog");

// Gold Medal (#3).

var boolean = true;
if (boolean === true) {
  console.log("is a boolean")
}
console.log(typeof true);

// Gold Medal (#4).

var myVar = 10;
if (typeof myVar !== "undefined") {
  console.log("is defined")
} else {
  console.log("not defined")
}

// Gold Medal (#5).

var s = "s";
var num12 = 12;
console.log(s)
if (s > num12) {
  console.log("is greater than 12")
} else {
  console.log("is not greater than 12")
}

// Gold Medal (#6).

var flower = "cucumber";
var myAge = 26;
if ( flower > myAge) {
  console.log("is greater than 12")
} else {
  console.log("is not greater than 12")
}

// Gold Medal (#7)







