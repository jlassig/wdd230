//putting the current year for the copyright:
//first get today's date:
const y = new Date();
//get JUST the current year:
const year = y.getFullYear();
//now put the current year in the HTML where it says "copy-right-year":
document.querySelector("#copyright-year").innerHTML = year;


//putting the "last updated" at the bottom of the footer:
//the following is the string we want to write, including the last time the document was modified: 
let dateModified = ('Last updated: ' + document.lastModified);
//then we search the document by the ID, in this case "date-mod", and put in the string found in dateModified in that spot: 
document.getElementById("date-mod").innerHTML = dateModified;
