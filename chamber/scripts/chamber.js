function toggleMenu(){
 // every time the hamburger button is clicked, the primaryNav will have a class of open
 document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick=toggleMenu;



//getting the date: 
const today = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	today
);
//now put the current date in the HTML where it says "header-date":
document.querySelector(".header-date").innerHTML = fullDate;



//putting the "last updated" at the bottom of the footer:
//the following is the string we want to write, including the last time the document was modified: 
let dateModified = ('Last Modification: ' + document.lastModified);
//then we search the document by the ID, in this case "date-mod", and put in the string found in dateModified in that spot: 
document.getElementById("date-mod").innerHTML = dateModified;

//putting the current year for the copyright:
//first get today's date, we already have that listed above as "today":
//get JUST the current year:
const year = today.getFullYear();
//now put the current year in the HTML where it says "copyright-year":
document.querySelector("#copyright-year").innerHTML = year;


//creating a banner for the top of the screen that invites people to the meet-n-greet, and the banner shows on Mondays and Tuesdays. 
if (today.getDay() == 1 || today.getDay() == 2){
  document.querySelector(".banner").classList.toggle("banner-shown");
//the user can also click the close to make the banner go away and it goes away, at least until the page is reloaded. 
  document.querySelector(".banner-close").addEventListener('click', function() {
  this.closest(".banner").style.display = "none";
});
};



