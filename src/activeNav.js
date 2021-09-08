function activeNav(btn) {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', ()=>{
            console.log('hi');
        })
        // e.addEventListener('click', ()=>{
        //     e.classList.add('active');
        //     var current = document.querySelectorAll('active');
        //     console.log(current);
        //     if (current.length > 1 ){
        //         current[0].classList = current[0].classList.replace(' active', '');
        //     }
            
            
        // });
    };
}

export default activeNav;