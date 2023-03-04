const directoryurl = "./json/data.json"
//the buttons
const getGrid = document.querySelector(".getGrid")
const getList = document.querySelector(".getList")
//the div where we put either the grid or list
const companyInfo = document.querySelector("div.company-info")
let defaultGrid = true

async function getBusinessData(defaultGrid) {
  const response = await fetch(directoryurl)
  if (response.ok) {
    const data = await response.json()

    const companies = data["companies"]
    if (defaultGrid === true) {
      companies.forEach(displayGrid)
    } else {
      companies.forEach(displayList)
    }
  }
}

const displayGrid = (company) => {
  // Create elements for the grid to add to the div.company-info element
  let card = document.createElement("div")
  let companyImg = document.createElement("img")
  let address = document.createElement("div")
  let cityState = document.createElement("div")
  let phone = document.createElement("div")
  let url = document.createElement("div")
  let a = document.createElement("a")

  //adding the text info
  address.textContent = company.address
  cityState.textContent = company.cityState
  phone.textContent = company.phone

  // adding attributes to the image, url and card
  card.setAttribute("class", "companyCard")
  companyImg.setAttribute("src", company.imageSrc)
  companyImg.setAttribute("alt", company.imageAlt)
  // companyImg.setAttribute("width", "150px")
  companyImg.setAttribute("loading", "lazy")
  url.setAttribute("class", "website-div")
  a.setAttribute("href", company.url)
  a.setAttribute("target", "blank")

  //take out the really long urls and change the text to "website"
  if (company.url.length > 50) {
    a.textContent = "website"
    //otherwise, print the website, but also take out the "https://www." and the "https://"
  } else {
    let urlString = company.url
    let fixedUrlString = urlString.replace(/^https?:\/\/(www\.)?/, "")

    a.textContent = fixedUrlString
  }

  //put the a in the website div with all its attributes.
  url.appendChild(a)

  // Append the section(card) with the created elements
  card.appendChild(companyImg)
  card.appendChild(address)
  card.appendChild(cityState)
  card.appendChild(phone)
  card.appendChild(url)
  //now append each card to the companyInfo
  companyInfo.appendChild(card)
}

const displayList = (company) => {
  // Create elements for the grid to add to the div.company-info element
  let listing = document.createElement("div")
  let name = document.createElement("h2")
  let address = document.createElement("div")
  let phone = document.createElement("div")
  let url = document.createElement("div")

  //adding the text info
  name.textContent = company.company
  address.textContent = `${company.address}, ${company.cityState}`
  phone.textContent = company.phone

  // adding attributes to the url
  url.setAttribute("class", "website-div")
  url.setAttribute("href", company.url)
  url.textContent = company.url
  url.setAttribute("target", "blank")

  // Append the section(listing) with the created elements
  listing.appendChild(name)
  listing.appendChild(address)
  listing.appendChild(phone)
  listing.appendChild(url)
  //now append each listing to the companyList
  companyInfo.appendChild(listing)
}

function clickTheButtons() {
  getBusinessData(true)

  getGrid.addEventListener("click", () => {
    companyInfo.classList.add("companyGrid")
    companyInfo.classList.remove("companyList")
    companyInfo.innerHTML = ""
    getBusinessData(true)
  })

  getList.addEventListener("click", () => {
    companyInfo.classList.add("companyList")
    companyInfo.classList.remove("companyGrid")
    companyInfo.innerHTML = ""
    getBusinessData(false)
  })
}

clickTheButtons()
