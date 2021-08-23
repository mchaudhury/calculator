console.log("Hello World");

const firstName = "Adam";
let age = "25";
console.log(firstName,age);

let favRobot = "Voltron";
let favColor = `blue`;

console.log(`I am ${age} years old`);

const isCool = true;


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter a number: ", function(answer){

    if (+answer === 12){
        console.log("That is correct!")
    } else {
        console.log("Not correct")
    }

    reader.close();
    
})

