const list = document.querySelector('ul');
const text = document.querySelector('input');
const addChapter = document.querySelector('button');

addChapter.addEventListener('click', () => {
 const myChapter = text.value;


 const listItem = document.createElement('li');

 listItem.textContent = myChapter;
 const deleteButton = document.createElement('button');
 deleteButton.textContent = 'X';

 listItem.appendChild(deleteButton);
 list.appendChild(listItem);

 deleteButton.addEventListener('click', ()=>{
 list.removeChild(listItem);
 });

 });


text.focus();
text.value = '';
