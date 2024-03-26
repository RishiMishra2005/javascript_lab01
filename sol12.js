function findIntersection(arr1, arr2) {
    let intersection = [];
    for (let num of arr1) {
        if (arr2.includes(num) && !intersection.includes(num)) {
            intersection.push(num);
        }
    }
    return intersection;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

let result = findIntersection(array1, array2);

console.log("Intersection of the two arrays:", result);
