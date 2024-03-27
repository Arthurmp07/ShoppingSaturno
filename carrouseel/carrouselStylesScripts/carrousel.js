var carrouselNextBtn = document.querySelector(".carrouselNextBtn")
var carrouselImg2 = document.querySelector("#carrouselImg2")
var carrousel = document.querySelector(".carrousel")


function carrouselNextBtnFunction(){
    carrousel.scrollLeft =+ "100vw"
}

carrouselNextBtn.addEventListener("click", carrouselNextBtnFunction)