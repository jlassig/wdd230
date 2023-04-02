let selects = ["#fruit1", "#fruit2", "#fruit3"]
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

const orderHolder = document.querySelector("#order-info")

async function getFruitData() {
  const response = await fetch(url)
  const data = await response.json()
  // console.log(data);
  selects.forEach(function (select) {
    displayFruitOptions(select, data)
  })
}

getFruitData()

const displayFruitOptions = (select, fruits) => {
  let selectInput = document.querySelector(select) //
  fruits.forEach((fruit) => {
    let option = document.createElement("option")
    option.setAttribute("value", fruit.name)
    option.innerHTML = fruit.name
    selectInput.appendChild(option)
  })
}

const getNutrition = (select, fruits) => {
  let nutritionArray = []
  let fruitSelect = document.querySelector(select)
  let fruitOption = fruitSelect.options[fruitSelect.selectedIndex]
  let fruitValue = fruitOption.textContent

  if (fruits.some((fruitObj) => fruitObj.name === fruitValue)) {
    let fruit = fruits.find((fruitObj) => fruitObj.name === fruitValue)

    nutritionArray.push(fruit.name)
    let info = fruit.nutritions

    nutritionArray.push(info.carbohydrates)
    nutritionArray.push(info.protein)
    nutritionArray.push(info.fat)
    nutritionArray.push(info.sugar)
    nutritionArray.push(info.calories)
  }
  return nutritionArray
}

const displayDrinkInfo = (array1, array2, array3) => {
  let totalCarb = 0
  let totalProt = 0
  let totalFat = 0
  let totalSugar = 0
  let totalCal = 0

  let nameHolder = document.createElement("p")
  let emailHolder = document.createElement("p")
  let phoneHolder = document.createElement("p")
  let fruitHolder = document.createElement("p")

  let instructionHolder = document.createElement("p")
  let dateHolder = document.createElement("p")

  let carbHolder = document.createElement("p")
  let protHolder = document.createElement("p")
  let fatHolder = document.createElement("p")
  let sugarHolder = document.createElement("p")
  let calHolder = document.createElement("p")

  let name = document.querySelector("#fname")
  nameHolder.innerHTML = `Name: ${name.value}`
  let email = document.querySelector("#email-input")
  emailHolder.innerHTML = `Email: ${email.value}`
  let phone = document.querySelector("#phone-input")
  phoneHolder.innerHTML = `Phone: ${phone.value}`

  let fruit1 = array1[0]
  let fruit2 = array2[0]
  let fruit3 = array3[0]
  fruitHolder.innerHTML = `The fruits you chose: ${fruit1}, ${fruit2}, and ${fruit3}`

  let instructions = document.querySelector("#instructions")
  instructionHolder.innerHTML = `Instructions: ${instructions.value}`

  let date = getDate()
  dateHolder.innerHTML = date

  totalCarb = array1[1] + array2[1] + array3[1]
  totalProt = array1[2] + array2[2] + array3[2]
  totalFat = array1[3] + array2[3] + array3[3]
  totalSugar = array1[4] + array2[4] + array3[4]
  totalCal = array1[5] + array2[5] + array3[5]

  carbHolder.innerHTML = `Total carbohydrates: ${totalCarb.toFixed(1)}`
  protHolder.innerHTML = `Total protein: ${totalProt.toFixed(1)}`
  fatHolder.innerHTML = `Total fat: ${totalFat.toFixed(1)}`
  sugarHolder.innerHTML = `Total sugar: ${totalSugar.toFixed(1)}`
  calHolder.innerHTML = `Total calories: ${totalCal.toFixed(1)}`

  orderHolder.appendChild(dateHolder)
  orderHolder.appendChild(nameHolder)
  orderHolder.appendChild(emailHolder)
  orderHolder.appendChild(phoneHolder)
  orderHolder.appendChild(fruitHolder)
  orderHolder.appendChild(instructionHolder)

  orderHolder.appendChild(carbHolder)
  orderHolder.appendChild(protHolder)
  orderHolder.appendChild(fatHolder)
  orderHolder.appendChild(sugarHolder)
  orderHolder.appendChild(calHolder)
}

async function buttonClicked(event) {
  event.preventDefault()
  orderHolder.innerHTML = ""
  let fruit1Array = []
  let fruit2Array = []
  let fruit3Array = []

  const response = await fetch(url)
  const data = await response.json()
  // console.table(data);

  fruit1Array = getNutrition("#fruit1", data)
  fruit2Array = getNutrition("#fruit2", data)
  fruit3Array = getNutrition("#fruit3", data)

  displayDrinkInfo(fruit1Array, fruit2Array, fruit3Array)
  addToNumberofDrinks()
}

const submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", buttonClicked)

function getDate() {
  //getting the date:
  const today = new Date()
  const fullDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(today)
  return fullDate
}

//also, add +1 to how many drinks the user has made
//display the number of drinks on the home page.
//store this number in the users local storage



function addToNumberofDrinks() {
 if (!localStorage.getItem("orderedDrinks")) {
   localStorage.setItem("orderedDrinks", 0)
 }
   let currentAmountOfDrinks = parseInt(localStorage.getItem("orderedDrinks"))
  currentAmountOfDrinks++
  localStorage.setItem("orderedDrinks", currentAmountOfDrinks)
  console.log(currentAmountOfDrinks)
}

