// Function to calculate distance between two points
function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
}

// Example usage
const x1 = 2;
const y1 = 3;
const x2 = 5;
const y2 = 7;
const distance = calculateDistance(x1, y1, x2, y2);
console.log("The distance between (" + x1 + "," + y1 + ") and (" + x2 + "," + y2 + ") is " + distance);
