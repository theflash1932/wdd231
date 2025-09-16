cdate = document.querySelector("#copy");
nowYear = new Date().getFullYear();
cdate.innerHTML = `&copy; ${nowYear} &middot; Timbuktu Chamber of Commerce`;

lastm = document.querySelector("#lastModified");
mod = document.lastModified;
lastm.innerHTML = 'Last modification: ' + document.lastModified;

const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const gridView = document.querySelector('#grid');
const listView = document.querySelector('#list');
const cardView = document.querySelector('#cards');

gridView.addEventListener('click', () => {
    cardView.classList.remove('list');
});

listView.addEventListener('click', () => {
    cardView.classList.add('list');
});