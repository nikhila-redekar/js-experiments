// Function to calculate gross pay
function calculateGrossPay(payRate, hoursWorked) {
    let regularHours = Math.min(hoursWorked, 40); // Calculate regular hours (up to 40)
    let overtimeHours = Math.max(hoursWorked - 40, 0); // Calculate overtime hours (hours worked beyond 40)
    let regularPay = regularHours * payRate; // Calculate regular pay
    let overtimePay = overtimeHours * (payRate * 1.5); // Calculate overtime pay (1.5 times the rate)
    let grossPay = regularPay + overtimePay; // Calculate total gross pay
    return grossPay;
}

// Example usage
const payRate = 15; // Pay rate per hour
const hoursWorked = 45; // Total hours worked
const grossPay = calculateGrossPay(payRate, hoursWorked);
console.log("Gross pay for " + hoursWorked + " hours worked at $" + payRate + " per hour is $" + grossPay);
