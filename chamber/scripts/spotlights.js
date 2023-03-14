const directoryurl = "./json/data.json"
//the spotlight divs
const spotlight1 = document.querySelector(".spotlight1")
const spotlight2 = document.querySelector(".spotlight2")
const spotlight3 = document.querySelector(".spotlight3")

async function getBusinessData() {
  const response = await fetch(directoryurl)
  if (response.ok) {
    const data = await response.json()

    const companies = data["companies"]
   let condition = true;

    let counter = 1
      while(condition){
        companies.forEach((company) => {
          let companiesLength = companies.length
          let randoNum = getRandomNumber(companiesLength)
          let index = companies.indexOf(company)
          if (randoNum == index) {
            if (
              (company.membershiplevel === "gold" ||
                company.membershiplevel === "silver") &&
              counter != 4
            ) {


              displaySpotlight(company, counter)
              counter++
              companies.splice(index, 1)
            }
            if(counter>3){
             condition = false;
            }

          }
        })
      }
   
  }
}

function displaySpotlight(company, spotlightNumber) {
  // Create elements)
  let imgUrl = document.createElement("a")
  let companyImg = document.createElement("img")
  let phoneHolder = document.createElement("p")
  let companyUrl = document.createElement("a")
  let companyInfo = document.createElement("div")

  // //adding the text info
  phoneHolder.textContent = company.phone

  // // adding attributes to the image, url and card
  companyImg.setAttribute("src", company.imageSrc)
  companyImg.setAttribute("alt", company.imageAlt)
  companyImg.setAttribute("width", "150")
  companyImg.setAttribute("height", "150")
  companyImg.setAttribute("loading", "lazy")
  companyImg.setAttribute("class", "spotlight-img")
  imgUrl.setAttribute("href", company.url)
  imgUrl.setAttribute("target", "blank")
  phoneHolder.setAttribute("class", "company-phone")
  companyUrl.setAttribute("href", company.url)
  companyUrl.setAttribute("target", "blank")
  companyUrl.setAttribute("class", "company-site-homepage")
  companyInfo.setAttribute("class", "company-info")

  //take out the really long urls and change the text to "website"
  if (company.url.length > 50) {
    companyUrl.textContent = "website"
    //otherwise, print the website, but also take out the "https://www." and the "https://"
  } else {
    let urlString = company.url
    let fixedUrlString = urlString.replace(/^https?:\/\/(www\.)?/, "")
    companyUrl.textContent = fixedUrlString
  }

  imgUrl.appendChild(companyImg)
  companyInfo.appendChild(phoneHolder)
  companyInfo.appendChild(companyUrl)

  if (spotlightNumber == 1) {
    spotlight1.appendChild(imgUrl)
    spotlight1.appendChild(companyInfo)
  } else if (spotlightNumber == 2) {
    spotlight2.appendChild(imgUrl)
    spotlight2.appendChild(companyInfo)
  } else if (spotlightNumber == 3) {
    spotlight3.appendChild(imgUrl)
    spotlight3.appendChild(companyInfo)
  }
}

 function getRandomNumber(num){
  let number = Math.floor(Math.random()*(num));
  return number;}


getBusinessData()


