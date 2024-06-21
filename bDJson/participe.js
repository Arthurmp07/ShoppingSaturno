var participeSubmit = document.querySelector("#participeSubmit")
var dataJson = JSON.parse(partipe);

function submitJson(){
    console.log(dataJson[0])
}

participeSubmit.addEventListener("click", submitJson)