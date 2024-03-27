var navToolbarBtn = document.querySelector(".navToolbarBtn");
var headerNav = document.querySelector(".headerNav");
var navSearch = document.querySelector(".navSearch");
var navLinks = document.querySelector(".navLinks");
var navToolbarBtnBack = document.querySelector(".navToolbarBtnBack");
var backgroundNavMobile = document.querySelector(".backgroundNavMobile");

function navToolbarFunction(){
    headerNav.style.position = "absolute"
    headerNav.style.top = "0"
    headerNav.style.height = "100vh"
    headerNav.style.justifyContent = "center"
    headerNav.style.backgroundImage = "url(headerNav/headerNavImg/back_header.jpeg)"
    headerNav.style.flexDirection = "column"
    navLinks.style.flexDirection = "column"
    navLinks.style.width = "100vw"
    navLinks.style.height = "50vh"
    navLinks.style.fontSize = "10vw"
    backgroundNavMobile.style.height = "100vh"
    backgroundNavMobile.style.width = "100vw"
    backgroundNavMobile.style.backgroundColor = "rgba(0, 0, 0, 0.527)"
    backgroundNavMobile.style.backdropFilter = "blur(2px)"

    navSearch.style.display = "none"
    navToolbarBtn.style.display = "none"

    navLinks.style.display = "flex"
    navToolbarBtnBack.style.display = "flex"
}

function navToolbarBtnBackFunction(){
    headerNav.style.position = ""
    headerNav.style.top = "0"
    headerNav.style.height = "5vh"
    headerNav.style.justifyContent = "space-between"
    headerNav.style.backgroundImage = ""
    headerNav.style.flexDirection = "row"
    navLinks.style.flexDirection = "row"
    navLinks.style.width = "40vw"
    navLinks.style.height = ""
    navLinks.style.fontSize = ""
    backgroundNavMobile.style.height = ""
    backgroundNavMobile.style.width = ""
    backgroundNavMobile.style.backgroundColor = ""
    backgroundNavMobile.style.backdropFilter = ""

    navSearch.style.display = "flex"
    navToolbarBtn.style.display = "flex"

    navLinks.style.display = "none"
    navToolbarBtnBack.style.display = "none"
}

navToolbarBtn.addEventListener("click", navToolbarFunction)
navToolbarBtnBack.addEventListener("click", navToolbarBtnBackFunction )