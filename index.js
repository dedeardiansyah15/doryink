function sidebarToggleFunction(){
    document.querySelector(".hamburger-menu").addEventListener("click", () =>{
        document.querySelector(".menu").classList.toggle("sidebartoggle");
        $('.hamburger-menu').toggleClass('animated');
    });
}

sidebarToggleFunction()