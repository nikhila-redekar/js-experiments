// Declare an array of objects representing items ordered
let lunch = [
    { item: "Chicken Fajitas", price: 19.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

// Function to calculate subtotal
function calculateSubtotal(order) {
    let subtotal = 0;
    for (let item of order) {
        subtotal += item.price;
    }
    return subtotal;
}

// Function to calculate tax
function calculateTax(subtotal) {
    return subtotal * 0.08; // 8% tax
}

// Function to calculate tip
function calculateTip(subtotal) {
    return subtotal * 0.18; // 18% tip
}

// Function to calculate total due
function calculateTotal(subtotal, tax, tip) {
    return subtotal + tax + tip;
}

// Calculate subtotal
let subtotal = calculateSubtotal(lunch);
console.log("Subtotal:", subtotal.toFixed(2));

// Calculate tax
let tax = calculateTax(subtotal);
console.log("Tax (8%):", tax.toFixed(2));

// Calculate tip
let tip = calculateTip(subtotal);
console.log("Tip (18%):", tip.toFixed(2));

// Calculate total due
let total = calculateTotal(subtotal, tax, tip);
console.log("Total Due:", total.toFixed(2));
