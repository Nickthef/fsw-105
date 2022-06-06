var shopper = {
    firstName: "Nick",
    lastName: "Franks",
    birthYear: 1995,
    payWithEbt: true,
    groceryCart: ["apples", "eggs", "ice-cream", "milk", "candy"],
    fullName: function() {
        return shopper.firstName + " " + shopper.lastName;
    }
}
console.log(shopper.fullName());
console.log(shopper.birthYear); 