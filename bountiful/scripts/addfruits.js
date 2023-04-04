document.addEventListener('DOMContentLoaded', function(){
const orangeDiv = document.querySelector("#oranges")
const greenDiv = document.querySelector("#kiwis")

displayFruits("orange")
displayFruits("orange")
displayFruits("kiwi")
displayFruits("kiwi")

lazyLoad()

function displayFruits(fruit){
let fruitImg = document.createElement("img")

fruitImg.setAttribute("width", "175")
fruitImg.setAttribute("height", "175")

if (fruit == "orange"){
 fruitImg.setAttribute("src","./images/placeholder-orange.png")


 fruitImg.setAttribute("data-src","./images/orange.png")
 fruitImg.setAttribute("alt", "picture of orange slice")
 fruitImg.setAttribute("loading", "lazy")
 orangeDiv.appendChild(fruitImg)
}

else if (fruit == "kiwi")
{
  fruitImg.setAttribute("src", "./images/placeholder-green.png")
  fruitImg.setAttribute("data-src", "./images/kiwi.png")
  fruitImg.setAttribute("alt", "picture of kiwi slice")
  fruitImg.setAttribute("loading", "lazy")
   greenDiv.appendChild(fruitImg)
}

}
})


function lazyLoad(){

//this is how to progressively load pictures

//first we load all the images via javascript
//note: querySelector here is looking for ALL img elements with an attribute of data-src. Becaues we wrote the data-src in the brackets, Javascript knows that is an attribute.
const imagesToLoad = document.querySelectorAll("img[data-src]")

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
}
//loadImages moves the path from data-src to src, and then data-src gets removed
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"))
  image.onload = () => {
    image.removeAttribute("data-src")
  }
}

//checking to see if interserctionObserver is supported on the user's screen
//IntersectionObserver will only load target images when the user scrolls down.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target)
        observer.unobserve(item.target)
      }
    })
  }, imgOptions)
  //loop through each image and load it
  imagesToLoad.forEach((img) => {
    observer.observe(img)
  })
  //load All the images if IntersectionObserver is not supported.
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img)
  })
}

}