/**
 * QUESTION 2
 * ==========
 *
 * Complete the function 'findIntersection' below to find the intersection of two arrays. An intersection would be
 * the common elements that exists within both arrays. In this case, make sure that the elements returned are
 * also unique!
 *
 */

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

function findIntersection(arr1, arr2) {

    var commonArray = [];
    var uniqueArray = [];

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                commonArray.push(arr1[i]);
            }
        }
    }

    // Arrange result in ascending order
    var commonArraySorted = commonArray.sort();

    for (var v = 0; v < commonArraySorted.length; v++) {
        // If number is not equal to previous number, we add to unique array
        if (commonArraySorted[v] !== commonArraySorted[v - 1]) {
            uniqueArray.push(commonArraySorted[v]);
        }
    }

    return uniqueArray;

}

var intersection = findIntersection(firstArray, secondArray);
console.log(intersection);