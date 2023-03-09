// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp")
const iconContainer = document.querySelector("#icon-div")

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=1332197040ea80518ea099b97ec567b3"
// "https://api.openweathermap.org/data/2.5/weather?lat=41.0896&lon=-112.0639&units=imperial&appid=1332197040ea80518ea099b97ec567b3"

//lat=41.0896&lon=-112.0639
// q = Fairbanks
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
  currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`

  const fragment = document.createDocumentFragment()
  for (var i = 0; i < weatherdata.weather.length; i++) {
    let weatherFig = document.createElement("figure")
    let weatherIcon = document.createElement("img")
    let captionDesc = document.createElement("figcaption")
    let iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[i].icon}.png`
    let desc = weatherdata.weather[i].description
    let descriptionTitle = toTitleCase(desc)
    console.log("hello")

    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", descriptionTitle)
    captionDesc.textContent = descriptionTitle

    weatherFig.appendChild(weatherIcon)
    weatherFig.appendChild(captionDesc)
    fragment.appendChild(weatherFig)
  }
  iconContainer.appendChild(fragment)
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
