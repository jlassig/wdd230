// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
//I changed this because I wanted to add some quotes!
const url = 'prophet-info.json';
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);  //// note that we reference the prophet array of the data object given the structure of the json file
  displayProphets(data.prophets);
}

getProphetData();



const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards'); // select the output container element


  prophets.forEach((prophet) => {
   //getting a random quote. first set the length of the quotes array in the JSON: 
    let quotesLength = (prophet.quotes).length;
    //then get a random number from that length
    let randoNum = getRandomNumber(quotesLength);
    //then get the quote that matches that random number
    let quote = (prophet.quotes)[randoNum];

    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let infobox = document.createElement('div');
    let birthdate = document.createElement('div');
    let birthplace = document.createElement('div');

    let quoteBox = document.createElement('div');
    
    

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place: ${prophet.birthplace}`;
    quoteBox.textContent = `"${quote}"`;


    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    //give classes to a couple of the new elements:
    quoteBox.setAttribute('class','quoteBox');
    infobox.setAttribute('class', 'infobox');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(infobox);
    infobox.appendChild(birthdate);
    infobox.appendChild(birthplace);


    card.appendChild(portrait);
    card.appendChild(quoteBox);

   




    cards.appendChild(card);
  } )// end of forEach loop
 }

 //num is the length of the quotes array in the each prophet in the JSON. 
 //the following came from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 function getRandomNumber(num){
  let number = Math.floor(Math.random()*(num));
  return number;

}


