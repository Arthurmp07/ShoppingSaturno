let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};
  

var submit = document.querySelector("#participeSubmit")
var emailSub = document.querySelector("#inputEmail")
var telefoneSub = document.querySelector("#inputTelefone")
var instaSub = document.querySelector("#inputInsta")

function sendData() {

        req.open("POST", "https://api.jsonbin.io/v3/b", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2a$10$D54nKF5kaq8p3rn5v5UC4ujP.yp0vq4VFZAy2F0JZ2FT4C1JWFI0C");
        req.send(`{ "email": "${emailSub.value}", "telefone": "${telefoneSub.value}", "instagram": "${instaSub.value}"}`);  
}

submit.addEventListener("click", sendData)
