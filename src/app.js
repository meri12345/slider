const slideshow = document.querySelector(".slideshow");
const imgs = document.querySelectorAll("img")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

const width = imgs[1].clientWidth;
let counter=1;
next.addEventListener('click',()=>{
    slideshow.style.transition="transform 0.4s ease-in-out"
    counter++
    slideshow.style.transform="translateX("+(-width*counter) + "px)"
    console.log(counter)
    console.log(width)
})

slideshow.style.transform="translateX("+(-width*counter) + "px)"

prev.addEventListener('click',()=>{
    slideshow.style.transition="transform 0.4s ease-in-out"
    counter--
    slideshow.style.transform="translateX("+(-width*counter) + "px)"
    console.log(counter)
})

slideshow.addEventListener('transitionend',function(){
    if(counter==7){
        slideshow.style.transition="none"
        counter=1;
        slideshow.style.transform="translateX("+(-width*counter) + "px)"
    }
    if(counter==0){
        slideshow.style.transition="none"
        counter=6;
        slideshow.style.transform="translateX("+(-width*counter) + "px)"
    }

})
