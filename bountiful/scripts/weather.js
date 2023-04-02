// // select HTML elements in the document

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=1332197040ea80518ea099b97ec567b3"

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
  const weatherCards = document.querySelector("#weather-cards")
  for (let i = 0; i < weatherdata.list.length; i += 8) {
    let card = document.createElement("div")
    let dateDiv = document.createElement("div")
    let tempDiv = document.createElement("div")
    let tempSpan = document.createElement("span")
    let weatherIconDiv = document.createElement("div")
    let weatherIcon = document.createElement("img")
    let humidityDiv = document.createElement("div")
    let weatherSrc = `https://openweathermap.org/img/w/${weatherdata.list[i].weather[0].icon}.png`
    let descriptionDiv = document.createElement("div")
    let description = toTitleCase(weatherdata.list[i].weather[0].description)
    let date = formatDate(weatherdata.list[i].dt_txt)
    dateDiv.textContent = date
    tempDiv.textContent = `Temp: ${weatherdata.list[i].main.temp.toFixed(0)}`
    tempSpan.innerHTML = "&#xb0;F"
    humidityDiv.textContent = `Humidity: ${weatherdata.list[i].main.humidity}`
    descriptionDiv.textContent = description

    //appendChild
    card.appendChild(dateDiv)
    card.appendChild(tempDiv)
    tempDiv.appendChild(tempSpan)
    card.appendChild(humidityDiv)
    card.appendChild(descriptionDiv)
    weatherCards.appendChild(card)

    if (i >= 16) {
      break
    }
  }
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
function formatDate(string) {
  let month = ""
  let year = string.slice(0, 4)
  let monthNum = string.slice(5, 7)
  let day = string.slice(8, 10)

  switch (monthNum) {
    case "01":
      month = "January"
      break
    case "02":
      month = "February"
      break
    case "03":
      month = "March"
      break
    case "04":
      month = "April"
      break
    case "05":
      month = "May"
      break
    case "06":
      month = "June"
      break
    case "07":
      month = "July"
      break
    case "08":
      month = "August"
      break
    case "09":
      month = "September"
      break
    case "10":
      month = "October"
      break
    case "11":
      month = "November"
      break
    case "12":
      month = "December"
      break
    default:
      month = "month"
      break
  }

  return `${month} ${day}, ${year}`
}
