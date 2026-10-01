let name = "Divya";
let learning = "JavaScript Day 2";

console.log("Welcome,", name);
console.log("You are learning:", learning);

function add(a, b) {
    return a + b;
}

console.log("Addition result:", add(10, 20));

for (let i = 1; i <= 3; i++) {
    console.log("Loop count:", i);
}

let skills = ["Manual Testing", "API Testing", "Playwright", "JavaScript"];

console.log("Skills:", skills);
console.log("First skill:", skills[0]);
console.log("Total skills:", skills.length);

let person = {
    name: "Divya",
    experience: 17,
    role: "Test Lead"
};

console.log("Person:", person);
console.log("Name:", person.name);
console.log("Experience:", person.experience);
console.log("Role:",person.role);

for (let skill of skills) {
    console.log("Learning:", skill);
}

function multiply(a, b) {
    return a * b;
}

console.log("Multiply result:", multiply(5, 6));

function greetUser(name) {
    return "Hello " + name + ", welcome to Day 2!";
}

console.log(greetUser("Divya"));


let browsers = ["Chrome", "Firefox", "Edge"];

console.log("First Browser:", browsers[0]);
console.log("Second Browser:", browsers[1]);
console.log("Third Browser:", browsers[2]);


for (let browser of browsers) {
    console.log("Testing on:", browser);
}

let user ={
    name: "Divya",
    role: "Test Lead", 
    experience: 17
};

for (let key in user) {
    console.log(key,":", user[key]);
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
console.log("Division result:",divide(100,5));


function checkEligibility(age) {
    if (age >= 18) {
        return "Eligible for testing job";
    } else {
        return "Not eligible";
    }
}

console.log(checkEligibility(30));

