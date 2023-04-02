function toggleMenu() {
  // every time the hamburger button is clicked, the primaryNav will have a class of open
  document.getElementById("primaryNav").classList.toggle("open")
  document.getElementById("hamburgerBtn").classList.toggle("open")
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu

//getting the date:
const today = new Date()

//putting the "last updated" at the bottom of the footer:
//the following is the string we want to write, including the last time the document was modified:
let dateModified = "Last Modification: " + document.lastModified
//then we search the document by the ID, in this case "date-mod", and put in the string found in dateModified in that spot:
document.getElementById("date-mod").innerHTML = dateModified

//putting the current year for the copyright:
//first get today's date, we already have that listed above as "today":
//get JUST the current year:
const year = today.getFullYear()
//now put the current year in the HTML where it says "copyright-year":
document.querySelector("#copyright-year").innerHTML = year
