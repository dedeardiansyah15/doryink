function sidebarToggleFunction(){
    document.querySelector(".hamburger-menu").addEventListener("click", () =>{
        document.querySelector(".menu").classList.toggle("sidebartoggle");
        $('.hamburger-menu').toggleClass('animated');
    });
}

sidebarToggleFunction()


window.addEventListener('scroll',function(){
    const header = document.getElementById('header');

    if (window.scrollY >50){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});


const image = document.getElementById('image');

const images  = [
    'asset/home/slider/1.png',
    'asset/home/slider/2.png',
    'asset/home/slider/3.png',
    'asset/home/slider/4.png',
    'asset/home/slider/5.png',
    'asset/home/slider/6.png'
];

let currentIndex = 0;

function changeImage(){

    image.classList.remove('active');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        image.src=images[currentIndex];


        setTimeout(() => {
            image.classList.add('active');
        }, 10);
    }, 500);
}

setInterval(changeImage,7000)

image.classList.add('active');