var readlineSync = require('readline-sync');

var playerName = readlineSync.question("What is your name? ");

var welcomeMessage = `Welcome ${playerName} to the Escape Room Game simulation!`;

console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;


while(isAlive == true) {
    var menuId = readlineSync.keyIn('Press 1 to Put hand in hole, Press 2 to Find the key, or, Press 3 to Open the door: ', {limit: '$<1-3>'});

    switch(menuId) {
        case "1":
            if (menuId == 1)
            console.log(`Oh no! You put your hand in the hole. You are DEAD! Game over!`);
            isAlive = false;
            break;

        case "2":
            if (menuId == 2 && hasKey == false) {
                console.log(`You have found the key! Please proceed to the next menu option.`);
                hasKey = true;
            } else {
                console.log(`You have already found the key! Move on to the next option!`);
            }
            break;

        case "3":
            if (menuId == 3 && hasKey == true) {
                console.log(`${playerName}, You have found the key and unlocked the door. Great job, you win!`);
            } else {
                console.log(`You have not yet found the key! Go back and select option 2!`);
            }
            break;
    }
}