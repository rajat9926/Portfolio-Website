let b = document.querySelectorAll("section");
let c = document.querySelectorAll("header nav a");
let mb = document.getElementById('menu-icon')
let nav = document.getElementsByClassName('navbar')[0]

mb.addEventListener('click',()=>{
    mb.classList.toggle('bx-x')
    nav.classList.toggle('active')
})



window.onscroll=()=>{
    b.forEach((items)=>{
        let wh = window.scrollY
        // let sh = items.offsetHeight
        let ot = items.offsetTop-70
        let id = items.getAttribute('id');
        console.log(items)
        if(wh>=ot){
            c.forEach((links)=>{
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            })
            items.classList.add('show-animation');
        }
        else{
            items.classList.remove('show-animation');
        }
    });
    let a = document.getElementsByClassName("header")[0].classList
    a.toggle("header-scroll",window.scrollY>100);

    mb.classList.remove('bx-x')
    nav.classList.remove('active')
}