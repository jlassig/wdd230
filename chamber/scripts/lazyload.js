//this is how to progressively load pictures

//first we load all the images via javascript
//note: querySelector here is looking for ALL img elements with an attribute of data-src. Becaues we wrote the data-src in the brackets, Javascript knows that is an attribute.
const imagesToLoad =document.querySelectorAll('img[data-src]');

//loadImages moves the path from data-src to src, and then data-src gets removed
const loadImages = (image) => {
 image.setAttribute('src', image.getAttribute('data-src'));
 image.onload = () =>{image.removeAttribute('data-src');};
};

//checking to see if interserctionObserver is supported on the user's screen
//IntersectionObserver will only load target images when the user scrolls down. 
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  //loop through each image and load it
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
  //load All the images if IntersectionObserver is not supported.
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

