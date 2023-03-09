// // select HTML elements in the document
const currentTempSpan = document.querySelector("#temp")
const windSpeedSpan = document.querySelector("#windspeed")
const weatherIconDiv = document.querySelector("#weather-icon-div")
const weatherType = document.querySelector("#weather-type")

// const iconContainer = document.querySelector("#icon-div")

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=41.0896&lon=-112.0639&units=imperial&appid=1332197040ea80518ea099b97ec567b3"

async function apiFetch() {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      // console.log(data) // this is for testing the call
      displayResults(data)
    } else {
      throw Error(await response.text())
    }
  } catch (error) {
    console.log(error)
  }
}

function displayResults(weatherdata) {
  let temp = weatherdata.main.temp.toFixed(0)
  let windspeed = weatherdata.wind.speed.toFixed(1)

  currentTempSpan.innerHTML = `<strong>${temp}</strong>`
  windSpeedSpan.innerHTML = `${windspeed}`

  //print the Windchill in the span on the HTML:
  document.querySelector("#windchill").innerHTML = getWindChill(temp, windspeed)

  let iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`
  let desc = weatherdata.weather[0].description
  let descriptionTitle = toTitleCase(desc)

  let weatherIcon = document.createElement("img")
  weatherIcon.setAttribute("src", iconsrc)
  weatherIcon.setAttribute("alt", descriptionTitle)
  weatherType.textContent = descriptionTitle

  weatherIconDiv.appendChild(weatherIcon)
}

apiFetch()

function toTitleCase(string) {
  var sentence = string.toLowerCase().split(" ")
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
  }
  sentence = sentence.join(" ")
  return sentence
}

//t = temp, s = windspeed
function getWindChill(t, s) {
  //temp is in fahrenheit and speed is in mph

  if (t <= 50 && s > 3) {
    //Math.pow is how you write exponents in js!!
    let windchill =
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16)
    //windchill has a lot of numbers after the decimal, so toFixed(2) makes it so there is only 2 numbers after. Note: the format is in a string.
    document.querySelector("#windchill-F").innerHTML = "&#xb0;F"
    return windchill.toFixed(2)
  } else {
    //the temp and/or windspeed don't follow the National Weather Service rules for windchill:
    return "N/A"
  }
}
