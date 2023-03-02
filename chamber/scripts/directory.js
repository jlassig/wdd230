const directoryurl = './json/data.json';
async function getBusinessData(){
 const response = await fetch(directoryurl);
 const data = await response.json();
 // console.table(data.companies);

 displayCompanies(data.companies);

}

getBusinessData();


const displayCompanies = (companies) => {
  const cards = document.querySelector('div.cards'); // select the output container element
  companies.forEach((company) =>{

    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let companyImg = document.createElement('img');
    let address = document.createElement('div');
    let cityState = document.createElement('div');
    let phone = document.createElement('div');
    let url = document.createElement('div');


    // Build the h2 content out to show the prophet's full name - finish the template string
   address.textContent = company.address;
   cityState.textContent = company.cityState;
   phone.textContent = company.phone;
   url.textContent = company.url;

    // Build the image portrait by setting all the relevant attribute
   companyImg.setAttribute('src', company.companyImg);
   companyImg.setAttribute('alt', company.imageAlt);
   companyImg.setAttribute('width', '150');
   companyImg.setAttribute('loading', 'lazy');

    // Append the section(card) with the created elements
    card.appendChild(companyImg);
    card.appendChild(address);
    card.appendChild(cityState);
    card.appendChild(phone);
    card.appendChild(url);
    cards.appendChild(card);  

  }
)}

// function testImage(){
//   const testImageHolder = document.querySelector('div.hello');
//   let helloImg = document.createElement('img');
//   helloImg.setAttribute('src','/chamber/images/thebird-logo.jpg')
//   testImageHolder.appendChild(helloImg);

// }
// testImage();