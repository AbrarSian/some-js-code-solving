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