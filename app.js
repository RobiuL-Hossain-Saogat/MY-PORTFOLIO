const hamb=document.querySelector('.header .nav-bar .nav-list .hamb');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
const header=document.querySelector('.header.container');

hamb.addEventListener('click',()=>{
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active')
});

document.addEventListener('scroll', ()=>{
    var scroll_position=window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor='#29323c';
    }else{
        header.style.backgroundColor='transparent';
    }
});

var typed=new Typed(".typing",{
    strings:["I'm a CSE Student","I'm a Web Developer","I'm a Web Designer",],
    typeSpeed:100,
    Backspeed:60,
    loop:true
})