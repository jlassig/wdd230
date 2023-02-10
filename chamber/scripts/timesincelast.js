let daysSinceString = "";

function getDaysSinceLast(){
 //if there is no "lastVisit"
if (!localStorage.getItem("lastVisit")) {
 //then put today's date and time in the "lastVisit" key
  localStorage.setItem("lastVisit", new Date().getTime());
  daysSinceString = ("Welcome! This is your first visit.");
  return daysSinceString;
} else {
 //otherwise, get today's date
  var currentDate = new Date();
  //get the last visit from local storage
  var lastVisit = new Date(parseInt(localStorage.getItem("lastVisit")));
  //find the difference between the two, the answer is in milliseconds.
  var timeDifference = currentDate - lastVisit;
  //take the answer from above, divide it by how many milliseconds in a second * seconds in a minute * minutes in an hour * hours in a day and then use Math.ceil to round it to the nearest full day so we can return it as a day.
  var daysSinceLastVisit = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//go and set todays date and time to the "last Visit" key
  localStorage.setItem("lastVisit", new Date().getTime());
  //because I am a freak about having something say "1 days". uggg
  if (daysSinceLastVisit == 1)
  {
  daysSinceString = ("It's been " + daysSinceLastVisit + " day since your last visit.");
  }
  else
    daysSinceString = ("It's been " + daysSinceLastVisit + " days since your last visit.");
  // document.write(daysSinceLastVisit);
  return daysSinceString;
}
};
//put the daysSinceString from the function above in the "dayssincelast" span tag in the html
document.querySelector("#dayssincelast").innerHTML = getDaysSinceLast();