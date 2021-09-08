function menu() {
     // Getting the content div
     const centerBodyDiv = document.querySelector('.center');
     centerBodyDiv.innerHTML=" ";
 
     // CREATE MAIN DIVS
     const pageTitle = document.createElement('div');
     const mainBody = document.createElement('div');
 
     // MAIN DIV CLASS
     pageTitle.classList.add('pageTitle');
 
     // MAIN -- SUB-DIV
     // ===== BODY ====
 
     // PAGETITLE
     const header = document.createElement('h1');
     header.innerHTML="Menu";
     pageTitle.append(header);
 
     // MAINBODY
     mainBody.classList.add('mainBody')
     const food1Holder = document.createElement('div');
     const food2Holder = document.createElement('div');
     const food3Holder = document.createElement('div');
     // ADDING CLASS
     food1Holder.classList.add('holder');
     food2Holder.classList.add('holder');
     food3Holder.classList.add('holder');
 
     /******************************************************************
     MAINBODY ----- SUB-DIVS 
     ******************************************************************/
     const leftFood1 = document.createElement('div');
     const rightFood1 = document.createElement('div');
     leftFood1.classList.add('chefLeft');
     rightFood1.classList.add('chefRight');
 
     const leftFood2 = document.createElement('div');
     const rightFood2 = document.createElement('div'); 
     leftFood2.classList.add('chefLeft');
     rightFood2.classList.add('chefRight');
 
     const leftFood3 = document.createElement('div');
     const rightFood3 = document.createElement('div');
     leftFood3.classList.add('chefLeft');
     rightFood3.classList.add('chefRight');
 
     // INSIDE FOOD1 HOLDER
     const food1Name = document.createElement('p');
     const food1Desc = document.createElement('p');
     // RIGHT
    //  const img = document.createElement('img');
    //  const img1 = document.createElement('img');
    //  const img2 = document.createElement('img');
 
     food1Name.innerHTML="Kenkey n stew ";
     food1Desc.innerHTML="A wonderful delicacy made of maize<br>Served with tasty tomatoe stew ";
 
    //  img.setAttribute('src', '../dist/assets/user.svg');
    //  img1.setAttribute('src', '../dist/assets/user.svg');
    //  img2.setAttribute('src', '../dist/assets/user.svg');
 
     // INSIDE FOOD2 HOLDER
     const food2Name = document.createElement('p');
     const food2Desc  = document.createElement('p');
 
     food2Name.innerHTML="Banku n tilapia ";
     food2Desc.innerHTML="A delicacy made of fermented corn.<br>Served with pepper n tilapia";
 
     // INSIDE WAITER CONTACT HOLDER
     const food3Name = document.createElement('p');
     const food3Desc = document.createElement('p');
 
     food3Name.innerHTML = "Light soup n fufu";
     food3Desc.innerHTML = "A cassava dough served with<br>Light soup";
 
 
 
 
     // APPENDING
     leftFood1.append(food1Name, food1Desc);
    //  rightfleftFood1.append(img);
     leftFood2.append(food2Name, food2Desc);
    //  rightFood2.append(img1);
     leftFood3.append(food3Name, food3Desc);
    //  rightFood3.append(img2);
     food3Holder.append(leftFood3, rightFood3);
     food2Holder.append(leftFood2, rightFood2);
     food1Holder.append(leftFood1, rightFood1);
     mainBody.append(food1Holder, food2Holder, food3Holder);
 
 
     /******************************************************************
     MAINBODY ----- SUB-DIVS 
     ******************************************************************/
 
 
    //  console.log('Menu Page');
     centerBodyDiv.append(pageTitle, mainBody)
}

export default menu;