// let age = 15;


// if (age < 13) {
//     console.log("You are a child");
// } else if (age >= 13 && age <= 17) {
//     console.log("You are a teenager");
// } else {
//     console.log("You are ok");
// }

// let student = "sujjal";
// function greet(name){
//     console.log(`Hello, there ${name}`);//Backtick(``) is needed the double quote will not work...
// }

// greet("sujjal");
// greet(student);

// Task to be done

// function introduce(myName, age){
//     console.log(`Hi, my name is ${myName} and I am ${age} years old.`);
//     console.log("Hi, my name is "+myName+" and I am "+age+" years old.");
// }
// let nam = "sujjal";
// let umer = 21;
// introduce(nam,umer);

// let name = "sujjal";
// const arrowFun = () => {
//     console.log("Hello world!!!");
// }
// const arrowfun1 = () => `Hello, ${name}`;
// console.log(arrowFun2)

let animals = ["sujjal", "ballu bhai", "ransh ko baccha", "syal", "giraffe"]
const [firstAnimal, ...rest] = animals
console.log(firstAnimal);
console.log(rest)
