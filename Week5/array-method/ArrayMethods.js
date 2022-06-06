var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethods(arr1, arr2) {
    // Remove the last item from the vegetable array.
    arr2.pop();
    // console.log(arr2);

    // Remove the first item from the fruit array.
    arr1.shift();
    // console.log(arr1);

    // Find the index of "orange."
    var indexOfOrange = arr1.indexOf("orange"); 
    // console.log(indexOfOrange);

    // Add that number to the end of the fruit array
    arr1.push(indexOfOrange);
    // console.log(arr1);

    // Use the length property to find the length of the vegetable array.
    var arr2Length = arr2.length;
    // console.log(arr2Length);

    // Add that number to the end of the vegetable array.
    arr2.push(arr2Length);
    // console.log(arr2);

    // Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = arr1.concat(arr2);
    // console.log("food: " + food);

    // Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4, 2);
    // console.log(food);

    // Reverse your array.
    food.reverse();
    // console.log(food);

    // Turn the array into a string and return it.
    var foodText = food.toString();
    // console.log(foodText);
    return foodText;
}

console.log(arrayMethods(fruit, vegetables));