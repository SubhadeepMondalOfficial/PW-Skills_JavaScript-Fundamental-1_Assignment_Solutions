// Q6. You are developing a form validation system. Write a program that takes user information(such as name, email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages like "Name should be a string," "Email should be a string," or "age should be a number." if any field is not proper.

let fullName = "SubhaDeep";
let email = "subhadeepmondalofficial@gmail.com";
let age = "25";

if (typeof fullName !== "string") {
  console.log("Full Name should be a string");
} else if (typeof email !== "string") {
  console.log("Email should be a string");
} else if (typeof age !== "number") {
  console.log("Age should be a number");
}
