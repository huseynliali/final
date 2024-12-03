function validate() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    let isValid = true;
    if (!name) {
        document.getElementById('name-error').textContent = 'Bu sahə doldurulmalıdır.';
        document.getElementById('name-error').classList.remove('success-message');
        document.getElementById('name-error').classList.add('error-message');
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = 'Düzgündür!';
        document.getElementById('name-error').classList.remove('error-message');
        document.getElementById('name-error').classList.add('success-message');
    }
    if (!phone) {
        document.getElementById('phone-error').textContent = 'Bu sahə doldurulmalıdır.';
        document.getElementById('phone-error').classList.remove('success-message');
        document.getElementById('phone-error').classList.add('error-message');
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phone-error').textContent = 'Telefon nömrəsi 000-000-0000 formatında olmalıdır.';
        document.getElementById('phone-error').classList.remove('success-message');
        document.getElementById('phone-error').classList.add('error-message');
        isValid = false;
    } else {
        document.getElementById('phone-error').textContent = 'Düzgündür!';
        document.getElementById('phone-error').classList.remove('error-message');
        document.getElementById('phone-error').classList.add('success-message');
    }
    if (!username) {
        document.getElementById('username-error').textContent = 'Bu sahə doldurulmalıdır.';
        document.getElementById('username-error').classList.remove('success-message');
        document.getElementById('username-error').classList.add('error-message');
        isValid = false;
    } else {
        document.getElementById('username-error').textContent = 'Düzgündür!';
        document.getElementById('username-error').classList.remove('error-message');
        document.getElementById('username-error').classList.add('success-message');
    }
    if (!password) {
        document.getElementById('password-error').textContent = 'Bu sahə doldurulmalıdır.';
        document.getElementById('password-error').classList.remove('success-message');
        document.getElementById('password-error').classList.add('error-message');
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('password-error').textContent = 'Şifrə ən azı 8 simvol olmalı və hərflər, rəqəmlər və xüsusi simvollar olmalıdır.';
        document.getElementById('password-error').classList.remove('success-message');
        document.getElementById('password-error').classList.add('error-message');
        isValid = false;
    } else {
        document.getElementById('password-error').textContent = 'Düzgündür!';
        document.getElementById('password-error').classList.remove('error-message');
        document.getElementById('password-error').classList.add('success-message');
    }
    if (!confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Bu sahə doldurulmalıdır.';
        document.getElementById('confirm-password-error').classList.remove('success-message');
        document.getElementById('confirm-password-error').classList.add('error-message');
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Şifrələr uyğun gəlmir. Zəhmət olmasa, yenidən cəhd edin.';
        document.getElementById('confirm-password-error').classList.remove('success-message');
        document.getElementById('confirm-password-error').classList.add('error-message');
        isValid = false;
    } else {
        document.getElementById('confirm-password-error').textContent = 'Düzgündür!';
        document.getElementById('confirm-password-error').classList.remove('error-message');
        document.getElementById('confirm-password-error').classList.add('success-message');
    }
    return isValid;
}

function GoHome() {
    window.location.href = "home.html";
}

function GoLogin() {
    window.location.href = "login.html";
}

function Register() {
    if (validate()) {
        let success = document.querySelector(".success")
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("confirmPassword", confirmPassword);
        success.style.display = "flex"
        setTimeout(function() {
            success.style.display = "none";
        }, 1000);
        window.location.href = "login.html"
    }
}