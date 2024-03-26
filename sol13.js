function getUniqueNumbers(arr) {
    return arr.reduce((uniqueArray, num) => {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
        return uniqueArray;
    }, []);
}

let numbersArray = [1, 2, 3, 4, 5, 2, 3, 6, 7, 4, 8, 9, 1];

let uniqueNumbers = getUniqueNumbers(numbersArray);

console.log("Original array:", numbersArray);
console.log("Unique numbers array:", uniqueNumbers);
