// Define a function to print contact information like a mailing label
function printContact(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(`${contact.city}, ${contact.state} ${contact.zip}`);
}

// Define an object with contact information
let myInfo = {
    name: "Pursalane Faye",
    address: "121 Cardinal Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126"
};

// Call the printContact function with the object
printContact(myInfo);
