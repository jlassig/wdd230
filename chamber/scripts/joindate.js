
//for the join page hidden input field with an id of "date"
var currentDate = new Date();
var formattedDate = currentDate.toLocaleString();
// console.log(formattedDate);
document.querySelector("#date").value = formattedDate;