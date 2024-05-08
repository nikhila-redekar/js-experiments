// Declare arrays of exam scores
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

// Function to calculate the average of scores in an array
function getAverage(scores) {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

// Calculate and display average scores
let myAverage = getAverage(myScores);
console.log("My average score:", myAverage);

let yourAverage = getAverage(yourScores);
console.log("Your average score:", yourAverage);
