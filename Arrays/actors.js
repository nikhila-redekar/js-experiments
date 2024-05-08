// Define the famousActors array
let famousActors = [
    { 
      memID: 101, 
      name: "Bob Brown", 
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"] 
    },
    { 
      memID: 142, 
      name: "Sallie Smith", 
      films: ["A Good Day", "A Better Day"] 
    },
    { 
      memID: 187, 
      name: "Fred Flanders", 
      films: ["Who is Fred?", "Where is Fred?", 
              "What is Fred?", "Why Fred?"]
    },
    { 
      memID: 203, 
      name: "Bobbie Boots", 
      films: ["Walking Boots", "Hiking Boots", 
              "Cowboy Boots"] 
    },
];

// Find the actor whose ID is 187
let actorWithID187 = famousActors.find(actor => actor.memID === 187);
console.log("Who is the actor whose ID is 187?", actorWithID187.name);

// Find actors who have been in at least 3 films
let actorsWithThreeOrMoreFilms = famousActors.filter(actor => actor.films.length >= 3);
console.log("Who has have been in at least 3 films?", actorsWithThreeOrMoreFilms.map(actor => actor.name));

// Find actors whose name starts with "Bob"
let actorsWithNameBob = famousActors.filter(actor => actor.name.startsWith("Bob"));
console.log("Who has a name that starts with 'Bob'?", actorsWithNameBob.map(actor => actor.name));

// Find actors who have been in a film that starts with "A"
let actorsInFilmsStartingWithA = famousActors.filter(actor => actor.films.some(film => film.startsWith("A")));
console.log("Which actors have been in a film that starts with 'A'?", actorsInFilmsStartingWithA.map(actor => actor.name));
