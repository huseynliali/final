let home = document.querySelector(".homepage");
let register = document.querySelector(".register button");
let login = document.querySelector(".login")
home.addEventListener("click",function () {
    window.location.href = "home.html";
})
register.addEventListener("click",function () {
    window.location.href = "register.html";
})
function Login() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let user = localStorage.getItem("username");
    let pass = localStorage.getItem("password");
    let loged;
    let del;
    localStorage.setItem("isLoggedIn", "true");
    if (username == user && password == pass) {
        loged = true;
        del = true;
        // localStorage.removeItem("Logedin")
        let success = document.querySelector(".success")
        localStorage.setItem("Logedin", loged);
        localStorage.setItem("delete" ,del);
        
        success.style.display = "flex";
        setTimeout(function() {
            success.style.display = "none";
            window.location.href = "home.html"
        }, 1000);
    } else {
        alert("Şifrə və ya istifadəçi adı düzgün yazılmayıb");
        loged = false;
        del = false;
        localStorage.setItem("Logedin",loged);
    }
    
}