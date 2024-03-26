const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}

function getUserInput() {
    rl.question("Enter a number: ", function(number) {
        if (!isNaN(number)) {
            console.log(`The number ${number} is ${checkEvenOrOdd(parseInt(number))}.`);
        } else {
            console.log("Invalid input! Please enter a valid number.");
        }
        rl.close();
    });
}

getUserInput();
