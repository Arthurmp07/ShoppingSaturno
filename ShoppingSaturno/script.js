var navToolbarBtn = document.querySelector("#navToolbarBtn")
var navToolbarScreen = document.querySelector(".navToolbarScreen")
var navToolbarScreenBackBtn = document.querySelector("#navToolbarScreenBackBtn")

function navToolbarFunction(){
    navToolbarScreen.style.display = "flex";
}
function navToolbarScreenBackFunction(){
    navToolbarScreen.style.display = "none"
}

navToolbarBtn.addEventListener("click", navToolbarFunction)
navToolbarScreenBackBtn.addEventListener("click", navToolbarScreenBackFunction)
