const readline = require('readline');

const cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a city: ", (userInput) => {
    const index = cities.indexOf(userInput);
    if (index !== -1) {
        console.log(`Index of ${userInput} in the array is: ${index}`);
    } else {
        console.log("Not Found");
    }
    rl.close();
});
