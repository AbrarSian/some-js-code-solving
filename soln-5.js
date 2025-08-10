/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

student["department"] = "." + student["department"];
var nameSubject = Object.values(student);
var realValue = nameSubject.join("");
var lastPart = [".@ph",".ac",".bd"]
var addedPart = lastPart.join("");

console.log(realValue.concat(addedPart))