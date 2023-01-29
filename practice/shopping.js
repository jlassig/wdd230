const list = document.querySelector('ul');
const item = document.querySelector('input');
const addItem = document.querySelector('button');

function clickHandler(){
 const newFood = item.value;
 item.value = '';
 const listItem = document.createElement('li');
 const theItem = document.createElement('span');
 const deleteButton = document.createElement('button');


 listItem.appendChild(theItem);
 theItem.textContent = newFood;
 listItem.appendChild(deleteButton);
 deleteButton.textContent = 'Delete';
 list.appendChild(listItem);

 deleteButton.addEventListener('click', ()=>{
  list.removeChild(listItem);
 });


}
addItem.addEventListener("click", clickHandler);
item.focus();




