let logout = document.getElementsByClassName("logout");
let login = document.querySelector(".login");
let computers = document.querySelector(".computers");
let buysell = document.querySelector(".buysell")
buysell.addEventListener("click",function () {
    window.location.href = "buysell.html"
})
window.onload = function () {
    let firstVisit = localStorage.getItem("firstVisit");
    if (!firstVisit) {
        localStorage.clear();
        localStorage.setItem("firstVisit", "false");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let myCarousel = document.querySelector('#carouselExampleCaptions');
    let carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        ride: 'carousel'
    });
});
login.addEventListener("click",function(){
    window.location.href = "login.html"
})
if (localStorage.getItem("Logedin") === "true") {
    let logout = document.querySelector(".logout")
    let h1 = document.querySelector(".user")
    let username = localStorage.getItem("username")
    h1.textContent = " " + " " + username
    logout.style.display = "block"
    login.style.display = "none"
    computers.style.display = "block"
} 
// function Logout() {
//     let logoutMessage = document.querySelector("#logout-message")
//     let logout = document.getElementsByClassName("logout")[0];
//     let h1 = document.querySelector(".user");
//     localStorage.setItem("Logedin", "false");
//     h1.textContent = "Giriş etməlisiniz";
//     login.style.display = "block"
//     computers.style.display = "none"
//     if (logout) {
//         logout.style.display = "none";
//     }
//     setTimeout(function() {
//         logoutMessage.style.display = 'none';
//     }, 2000);
    
// }
function Logout() {
    let logoutMessage = document.querySelector("#logout-message");
    let logout = document.getElementsByClassName("logout")[0];
    let h1 = document.querySelector(".user");
    let login = document.querySelector(".login");
    let computers = document.querySelector(".computers");
    localStorage.setItem("Logedin", "false");
    h1.textContent = "Giriş etməlisiniz";
    if (login) {
        login.style.display = "block";
    }
    if (computers) {
        computers.style.display = "none";
    }
    if (logout) {
        logout.style.display = "none";
    }
    if (logoutMessage) {
        logoutMessage.style.display = "flex";
        setTimeout(function() {
            logoutMessage.style.display = "none";
        }, 2000);
    }
}

window.onload = function() {
    let loged = localStorage.getItem("Logedin");
    if (loged === 'true') {
        let successMessage = document.getElementById('success-message');
        successMessage.style.display = 'flex';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 2000);
        localStorage.removeItem("Logedin");
    }
};

window.onload = function() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === 'true') {
        let successMessage = document.getElementById('success-message');
        successMessage.style.display = 'flex';
        setTimeout(function() {
            successMessage.style.display = 'none';
            localStorage.setItem("isLoggedIn", "false");
        }, 2000);
    }
};


computers.addEventListener("click",function () {
    window.location.href = "computers.html"
});