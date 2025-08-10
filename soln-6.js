/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var salaryNow =startingSalary * (1.05) ** experience;

console.log(salaryNow.toFixed(2))