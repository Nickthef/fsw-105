const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name? ");

readlineSync.question(
  `Hello ${name}, Welcome to DOOM! Where you will risk your life to destroy evil. Press Enter to begin.`
);

const enemies = ["Goblin", "Dragon", "Zombie", "Undead Monkey"];
const treasure = [
  "Healing potion",
  "Steel plate-body",
  "Special key",
  "Emerald",
];
var reward = [];
let userHealth = 40;
const options = ["Walk", "Exit", "Print"];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game() {
  const attackStrength = Math.floor(Math.random() * 10) + 1;
  const enemy = enemies[Math.floor(Math.random() * enemies.length)];
  let enemyHealth = 40;
  const enemyAttackStrength = Math.floor(Math.random() * 30) + 1;

  const index = readlineSync.keyInSelect(
    options,
    "What would you like to do next?"
  );

  if (options[index] == "Exit") {
    return (userHealth = 0);
  } else if (options[index] == "Print") {
    console.log(name + ": \n" + userHealth + "\nTreasure: " + pickUp);
  } else if (options[index] === "Walk") {
    let key = Math.random();
    if (key <= 0.3) {
      console.log("Now you're walking...");
    } else if (key >= 0.3) {
      console.log(`${enemy} Has Spawned!`);

      while (enemyHealth > 0 && userHealth > 0) {
        const user = readlineSync.question(
          "What do you want to do? enter 'r' to run or 'a' to attack: "
        );

        switch (user) {
          case "r":
            const run = Math.random();
            if (run < 0.5) {
              console.log(
                `Before you can run away ${enemy} Attacks with: ${enemyAttackStrength}`
              );
            } else {
              console.log("You ran away!");
              break;
            }
          case "a":
            enemyHealth -= attackStrength;
            console.log(
              `You attacked ${enemy} with ${attackStrength} Attack Strength`
            );

            userHealth -= enemyAttackStrength;
            console.log(
              `Enemy just attacked you with: ${enemyAttackStrength} Attack Strength`
            );

            if (enemyHealth <= 0) {
              console.log(`You killed ${enemy}.\n ${enemy} dropped ${pickUp}`);
              let loot = Math.random();
              if (loot <= 0.3) {
                reward.push(pickUp);
              }
            } else if (userHealth <= 0) {
              console.log(`${enemy} Has defeated you. you are dead.`);
            }
        }
      }
    }
  }
}

while (userHealth > 0) {
  game();
}
