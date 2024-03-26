const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

rl.question("Enter the first number: ", function(number1) {
    number1 = parseFloat(number1);

    while (isNaN(number1)) {
        console.log("Please enter a valid number.");
        rl.question("Enter the first number: ", function(input) {
            number1 = parseFloat(input);
        });
    }

    rl.question("Enter the second number: ", function(number2) {
        number2 = parseFloat(number2);

        while (isNaN(number2)) {
            console.log("Please enter a valid number.");
            rl.question("Enter the second number: ", function(input) {
                number2 = parseFloat(input);
            });
        }

        let maxNumber = findMax(number1, number2);
        console.log("The maximum number is: " + maxNumber);

        rl.close();
    });
});
