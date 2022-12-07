const loader=document.querySelector(".preloader");
const slideBtn=document.querySelector(".switch");
const vid=document.querySelector(".video");
window.addEventListener("load",function(){
    loader.classList.add("hidden");
})
slideBtn.addEventListener("click",function(){
    if(!slideBtn.classList.contains("slide")){
        slideBtn.classList.add("slide");
        // console.log(slideBtn.classList);
        vid.pause();
    }
    else{
        slideBtn.classList.remove("slide");
        // console.log(slideBtn.classList);
        vid.play();
    }
})