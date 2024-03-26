let stringsArray = ["apple", "banana", "grape", "watermelon", "pineapple", "kiwi", "orange", "strawberry", "blueberry", "peach"];

function findLongestString(arr) {
    let longestString = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString;
}
console.log("Longest string in the array:", findLongestString(stringsArray));
