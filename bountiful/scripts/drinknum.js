function getNumberOfDrinks() {
  let needToOrder = ""
  if (!localStorage.getItem("orderedDrinks")) {
    localStorage.setItem("orderedDrinks", 0)
    needToOrder = "You haven't ordered a drink yet."
    return needToOrder
  } else {
    let currentAmountOfDrinks = parseInt(localStorage.getItem("orderedDrinks"))

    if (currentAmountOfDrinks == 1) {
      needToOrder = "You've ordered 1 drink"
    } else needToOrder = `You've ordered ${currentAmountOfDrinks} drinks.`
    // document.write(daysSinceorderedDrink);
    return needToOrder
  }
}


document.querySelector("#drinks-num").innerHTML = getNumberOfDrinks()
