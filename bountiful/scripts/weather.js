// // select HTML elements in the document
const currentTempSpan = document.querySelector("#temp")
const weatherIconDiv = document.querySelector("#weather-icon-div")
const weatherType = document.querySelector("#weather-type")
const humidityDiv = document.querySelector("#humidity-div")

const currentTempSpan2 = document.querySelector("#temp2")
const weatherIconDiv2 = document.querySelector("#weather-icon-div2")
const weatherType2 = document.querySelector("#weather-type2")
const humidityDiv2 = document.querySelector("#humidity-div2")

const currentTempSpan3 = document.querySelector("#temp3")
const weatherIconDiv3 = document.querySelector("#weather-icon-div3")
const weatherType3 = document.querySelector("#weather-type3")
const humidityDiv3 = document.querySelector("#humidity-div3")

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=1332197040ea80518ea099b97ec567b3"

async function apiFetch() {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      console.log(data) // this is for testing the call
      displayResults(data)
    } else {
      throw Error(await response.text())
    }
  } catch (error) {
    console.log(error)
  }
}

function displayResults(weatherdata) {
  // let temp = weatherdata.main.temp.toFixed(0)
  let temp = weatherdata.list[0].main.temp.toFixed(0)
  let humidityInfo = weatherdata.list[0].main.humidity

  let temp2 = weatherdata.list[1].main.temp.toFixed(0)
  let humidityInfo2 = weatherdata.list[1].main.humidity

  currentTempSpan.innerHTML = `<strong>${temp}</strong>`
  humidityDiv.innerHTML = `Humidity: ${humidityInfo}%`

  currentTempSpan2.innerHTML = temp2
  humidityDiv2.innerHTML = `Humidity: ${humidityInfo}%`

  // let iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`
  // let desc = weatherdata.weather[0].description
  // let descriptionTitle = toTitleCase(desc)

  // let weatherIcon = document.createElement("img")
  // weatherIcon.setAttribute("src", iconsrc)
  // weatherIcon.setAttribute("alt", descriptionTitle)
  // weatherIcon.setAttribute("width", "75")
  // weatherIcon.setAttribute("height", "75")
  // weatherType.textContent = descriptionTitle

  // weatherIconDiv.appendChild(weatherIcon)
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
