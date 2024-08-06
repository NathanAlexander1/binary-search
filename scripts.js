let stringArray = ["apple", "apricot", "banana", "blueberry", "carrot", "cherry", "date", "dill", "fig", "huckleberry", "iguana", "jackfruit", "kiwi", "lemon", "mango", "melon", "nectarine", "orange", "passionfruit", "peach", "starfruit", "strawberry", "zebra"];
let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101];
let targetString = stringArray[(Math.floor(Math.random() * stringArray.length))]
let targetNum = numArray[(Math.floor(Math.random() * numArray.length))]

var doSearch = function(array, targetValue) {
	var left = 0;
	var right = array.length - 1;
    var guess;
    var guesses = 0;
    let targetVal = document.getElementById("targetValue");
    let printedStr = document.getElementById("correctString");
    targetVal.textContent = targetValue;
    
    while (left <= right) {
        guess = Math.floor((right + left)/2);
        guesses++;
        console.log(guess);
        if(array[guess] === targetValue) {
            //guesses correctly
            console.log("Target value: " + targetValue)
            console.log(guesses + "!");
            printedStr.textContent="Guessed the target value (" + array[guess] + ") in " + guesses + " guess(es)!";
            return guess;
        } else if (array[guess] < targetValue) {
            //guesses incorrectly with 
            console.log("guess: " + array[guess] +", target value: " + targetValue)
            console.log('guess is less than target value')
            left = guess + 1;
        } else {
            console.log("guess: " + array[guess] +", target value: " + targetValue)
            console.log('guess is more than target value')
            right = guess - 1;
        }
    }
    //target value not in array
	return -1;
};

// doSearch(stringArray, targetString);
doSearch(numArray, targetNum);