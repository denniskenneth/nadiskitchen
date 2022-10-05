// IMPORRTS
import { Homebtn, mainListener } from './eventListeners';
// MAIN FUNCTION
function onLoad() {
  // Getting the content div
  //   const contentDiv = document.querySelector('#content');
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'content');
  // CREATE HEADER, BODY N FOOTER DIVS
  const headerDiv = document.createElement('div');
  const bodyDiv = document.createElement('div');
  const footerDiv = document.createElement('div');

  // ADD CLASSES TO THE DIV
  headerDiv.classList.add('header');
  bodyDiv.classList.add('body');
  footerDiv.classList.add('footer');

  // CREATING SUB-DIVS
  const logoHolder = document.createElement('div');
  const navHolder = document.createElement('div');
  const leftBodyDiv = document.createElement('div');
  const centerBodyDiv = document.createElement('div');
  const rightBodyDiv = document.createElement('div');

  // ADD CLASSES TO THE SUB-DIVS
  logoHolder.classList.add('logoHolder');
  navHolder.classList.add('navHolder');
  leftBodyDiv.classList.add('left');
  centerBodyDiv.classList.add('center');
  rightBodyDiv.classList.add('right');

  // INJECTING HTML INTO THE PAGE(THROUGH SUB-DIVS)
  // HEAD

  logoHolder.innerHTML = '<h3>REPAG</h3>';
  var homeBtn = document.createElement('a');
  var menuBtn = document.createElement('a');
  var contactBtn = document.createElement('a');
  // ADD CLASS TO HEAD NAV
  homeBtn.classList.add('navbtn', 'active');
  menuBtn.classList.add('navbtn');
  contactBtn.classList.add('navbtn');

  menuBtn.addEventListener('click', () => {
    if (homeBtn.classList.contains('active')) {
      homeBtn.classList.remove('active');
    } else if (contactBtn.classList.contains('active')) {
      contactBtn.classList.remove('active');
    } else {
      return;
    }
    menuBtn.classList.add('active');
  });

  contactBtn.addEventListener('click', () => {
    if (homeBtn.classList.contains('active')) {
      homeBtn.classList.remove('active');
    } else if (menuBtn.classList.contains('active')) {
      menuBtn.classList.remove('active');
    } else {
      return;
    }
    contactBtn.classList.add('active');
  });

  // BODY
  //CENTER DIV
  const welcomeText = document.createElement('h1');
  const catchPhrase = document.createElement('p');
  const scheduleDiv = document.createElement('div');
  const scheduleHeader = document.createElement('h2');
  const weekday = document.createElement('div');
  const weekend = document.createElement('div');
  const sunday = document.createElement('div');
  const seeMenuBtn = document.createElement('button');

  // ADD CLASS FOR CENTER DIV SUB-CLASS
  catchPhrase.classList.add('catchPhrase');
  scheduleDiv.classList.add('scheduleDiv');
  scheduleHeader.classList.add('scheduleHeader');
  weekday.classList.add('weekdayHolder');
  weekend.classList.add('weekendHolder');
  sunday.classList.add('sundayHolder');
  seeMenuBtn.classList.add('menuBtn');

  // FOOTER
  const footerTxt = document.createElement('p');
  const footerlink = document.createElement('a');

  // ADD HTML TEXT FOR CENTER DIV SUB DIVS

  // HEAD
  homeBtn.innerHTML = 'Home';
  menuBtn.innerHTML = 'Menu';
  contactBtn.innerHTML = 'Contact';
  // BODY
  welcomeText.innerHTML = 'Welcome to the Home of Amazing Food &#x1f609;';
  catchPhrase.innerHTML =
    'We serve some of your <br><br>Favourite Ghana Dishes';
  scheduleHeader.innerHTML = 'Working Hours';
  weekday.innerHTML = `<p>Monday - Thursday</p><p>11:30am - 9:30pm</p>`;
  weekend.innerHTML = `<p>Friday - Saturday</p><p>11:30am - 10:00pm</p>`;
  sunday.innerHTML = `<p>Sunday</p><p>1:00pm - 8:00pm</p>`;
  seeMenuBtn.innerHTML = 'See Menu';
  // FOOTER
  footerlink.setAttribute('href', 'https://www.instagram.com/denioncode/');
  footerlink.setAttribute('target', '_blank');
  footerlink.innerHTML = `DeniOnCode`;
  footerTxt.innerHTML = `Build By `;

  // APPENDING DIVS
  // HEAD
  headerDiv.append(navHolder);
  navHolder.append(homeBtn, menuBtn, contactBtn);
  // BODY
  scheduleDiv.append(scheduleHeader, weekday, weekend, sunday);
  centerBodyDiv.append(welcomeText, catchPhrase, scheduleDiv, seeMenuBtn);
  bodyDiv.append(leftBodyDiv, centerBodyDiv, rightBodyDiv);
  // FOOTER
  footerTxt.append(footerlink);
  footerDiv.append(footerTxt);
  // MAIN
  contentDiv.append(headerDiv, bodyDiv, footerDiv);
  document.body.appendChild(contentDiv);

  //Event Listeners
  Homebtn(homeBtn);

  mainListener(contentDiv, menuBtn, seeMenuBtn, centerBodyDiv, contactBtn);
}

export default onLoad;
