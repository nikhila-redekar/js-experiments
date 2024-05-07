// Function to calculate the area of a circle
function calculateArea(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
}

// Example usage
const radius = 5; // You can change the radius to any value you want
const area = calculateArea(radius);
console.log("The area of the circle with radius", radius, "is", area);
