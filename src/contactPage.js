import User from './user.svg';

function contact() {
  const centerBodyDiv = document.querySelector('.center');
  centerBodyDiv.innerHTML = ' ';

  // CREATE MAIN DIVS
  const pageTitle = document.createElement('div');
  const mainBody = document.createElement('div');

  // MAIN DIV CLASS
  pageTitle.classList.add('pageTitle');

  // MAIN -- SUB-DIV
  // ===== BODY ====

  // PAGETITLE
  const header = document.createElement('h1');
  header.innerHTML = 'Contact Us';
  pageTitle.append(header);

  // MAINBODY
  mainBody.classList.add('mainBody');
  const chefContactHolder = document.createElement('div');
  const managerContactHolder = document.createElement('div');
  const waiterContactHolder = document.createElement('div');
  // ADDING CLASS
  chefContactHolder.classList.add('holder');
  managerContactHolder.classList.add('holder');
  waiterContactHolder.classList.add('holder');

  /******************************************************************
    MAINBODY ----- SUB-DIVS 
    ******************************************************************/
  const leftchef = document.createElement('div');
  const rightchef = document.createElement('div');
  leftchef.classList.add('chefLeft');
  rightchef.classList.add('chefRight');

  const leftmanager = document.createElement('div');
  const rightmanager = document.createElement('div');
  leftmanager.classList.add('chefLeft');
  rightmanager.classList.add('chefRight');

  const leftwaiter = document.createElement('div');
  const rightwaiter = document.createElement('div');
  leftwaiter.classList.add('chefLeft');
  rightwaiter.classList.add('chefRight');

  // INSIDE CHEFCONTACTHOLDER
  const chefText = document.createElement('p');
  const chefNumber = document.createElement('p');
  // RIGHT
  const img = new Image();
  const img1 = new Image();
  const img2 = new Image();

  chefText.innerHTML = 'Chèf';
  chefNumber.innerHTML = '555-231-0293';

  img.src = User;
  img1.src = User;
  img2.src = User;

  // INSIDE MANAGER CONTACT HOLDER
  const managerTxt = document.createElement('p');
  const managerNumber = document.createElement('p');

  managerTxt.innerHTML = 'Manager';
  managerNumber.innerHTML = '505-213-0523';

  // INSIDE WAITER CONTACT HOLDER
  const waiterTxt = document.createElement('p');
  const waiterNumber = document.createElement('p');

  waiterTxt.innerHTML = 'Waiter';
  waiterNumber.innerHTML = '419-911-1000';

  // APPENDING
  leftchef.append(chefText, chefNumber);
  rightchef.append(img);
  leftmanager.append(managerTxt, managerNumber);
  rightmanager.append(img1);
  leftwaiter.append(waiterTxt, waiterNumber);
  rightwaiter.append(img2);
  waiterContactHolder.append(leftwaiter, rightwaiter);
  managerContactHolder.append(leftmanager, rightmanager);
  chefContactHolder.append(leftchef, rightchef);
  mainBody.append(chefContactHolder, managerContactHolder, waiterContactHolder);

  /******************************************************************
    MAINBODY ----- SUB-DIVS 
    ******************************************************************/

  centerBodyDiv.append(pageTitle, mainBody);
}

export default contact;
