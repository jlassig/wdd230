//get what is written in the temp and windspeed <span> 's
let tempString = document.querySelector("#temp").innerHTML;
let windspeedString = document.querySelector("#windspeed").innerHTML;
//turn those into decimal numbers
let temp = parseFloat(tempString);
let windspeed = parseFloat(windspeedString);

//t = temp, s = windspeed
function getWindChill(t,s)
{//temp is in fahrenheit and speed is in mph

 if ((t <= 50) && (s > 3))
 {
  //Math.pow is how you write exponents in js!!
  let windchill =  35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
  //windchill has a lot of numbers after the decimal, so toFixed(2) makes it so there is only 2 numbers after. Note: the format is in a string.
  document.querySelector("#windchill-F").innerHTML = "&#xb0;F";
  return windchill.toFixed(2);
 }
 else
 {
  //the temp and/or windspeed don't follow the National Weather Service rules for windchill:
  return "N/A"
 }
}
//print the Windchill in the span on the HTML: 
document.querySelector("#windchill").innerHTML = getWindChill(temp, windspeed);