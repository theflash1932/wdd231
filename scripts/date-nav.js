cdate = document.querySelector("#copy");
nowYear = new Date().getFullYear();
cdate.innerHTML = `&copy; ${nowYear}`;

lastm = document.querySelector("#lastModified");
mod = document.lastModified;
lastm.innerHTML = 'Last modification: ' + document.lastModified;

const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');  
});