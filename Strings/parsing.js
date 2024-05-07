// Function to parse and display first and last name
function parseAndDisplayName(fullName) {
    // Find the index of the space
    const spaceIndex = fullName.indexOf(" ");

    // Extract first name and last name
    const firstName = fullName.substring(0, spaceIndex);
    const lastName = fullName.substring(spaceIndex + 1);

    // Display the name components
    console.log("Name: " + fullName);
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
}

// Test the function
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
