// Define the courses array
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];

// Find when the PROG200 course starts
let prog200StartDate = courses.find(course => course.CourseId === "PROG200").StartDate;
console.log("When does the PROG200 course start?", prog200StartDate);

// Find the title of the PROJ500 course
let proj500Title = courses.find(course => course.CourseId === "PROJ500").Title;
console.log("What is the title of the PROJ500 course?", proj500Title);

// Find titles of courses that cost $50 or less
let coursesUnderFifty = courses.filter(course => parseFloat(course.Fee) <= 50).map(course => course.Title);
console.log("What are the titles of the courses that cost $50 or less?", coursesUnderFifty);

// Find classes that meet in "Classroom 1"
let classesInClassroom1 = courses.filter(course => course.Location === "Classroom 1").map(course => course.Title);
console.log("What classes meet in 'Classroom 1'?", classesInClassroom1);
