/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var dividedAsset = (area/2);
console.log(dividedAsset);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} 
else if (money >= 10000) {
  console.log("Cycle");
} 
else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for(i=1; i<=lastDay; i++){
    if( i%3 === 0 ){
        console.log(`${i}`,'-',"medicine")
    }
    else {
        console.log(`${i}`,'-',"rest")
    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var extension = fileName.split(".");
var extensionPart = extension.pop()
var extensionList = ["pdf","docx"];

if(fileName.startsWith("#") || extensionList.includes(extensionPart) ){
    console.log("Store")
}
else {
    console.log("Delete")
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

student["department"] = "." + student["department"];
var nameSubject = Object.values(student);
var realValue = nameSubject.join("");
var lastPart = [".@ph",".ac",".bd"]
var addedPart = lastPart.join("");

console.log(realValue.concat(addedPart))

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var salaryNow =startingSalary * (1.05) ** experience;

console.log(salaryNow.toFixed(2))