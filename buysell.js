let asus = document.querySelector(".asus");
let hp = document.querySelector(".hp");
let acer = document.querySelector(".acer");
let dell = document.querySelector(".dell");
let lenovo = document.querySelector(".lenovo");
let mac = document.querySelector(".mac");
let samsung = document.querySelector(".samsung");
let pname = document.querySelectorAll(".name");
let pnone = document.querySelectorAll(".none");
let pprice = document.querySelectorAll(".price");
let pnew = document.querySelectorAll(".new");
let pphone = document.querySelectorAll(".phone");
let img = document.querySelectorAll(".img");
let goHome = document.querySelector(".homepage")
goHome.addEventListener("click",function () {
    window.location.href = "home.html"
})
asus.addEventListener("click", function () {
    img.forEach(img => img.src = "https://www.pricerunner.com/product/3015692145/ASUS-ExpertBook-B9-OLED.jpg");
    pname.forEach(name => name.textContent = "Asus");
    pnone.forEach(none => none.textContent = "Yoxdur");
    pprice.forEach(price => price.textContent = "1200$");
    pnew.forEach(newItem => newItem.textContent = "Bəli");
    pphone.forEach(phone => phone.textContent = "055-312-4560");
});
hp.addEventListener("click",function () {
    img.forEach(img => img.src = "https://th.bing.com/th/id/OIP.nWN5UJt-_KH7TtoHZ2MuUwHaGS?w=242&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7");
    pname.forEach(name => name.textContent = "HP");
    pnone.forEach(none => none.textContent = "Yoxdur");
    pprice.forEach(price => price.textContent = "1600$");
    pnew.forEach(newItem => newItem.textContent = "Xeyr");
    pphone.forEach(phone => phone.textContent = "050-012-1488");
})
acer.addEventListener("click",function () {
    img.forEach(img => img.src = "https://th.bing.com/th/id/OIP.JfysTTA3kBo4vWIc9kjupAHaFj?w=241&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7");
    pname.forEach(name => name.textContent = "Acer");
    pnone.forEach(none => none.textContent = "Yoxdur");
    pprice.forEach(price => price.textContent = "800$");
    pnew.forEach(newItem => newItem.textContent = "Bəli");
    pphone.forEach(phone => phone.textContent = "077-451-1268");
})
dell.addEventListener("click",function () {
    img.forEach(img => img.src = "https://th.bing.com/th/id/OIP.E7s9xyTEf7KV97V81H2w7wHaFU?w=277&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7");
    pname.forEach(name => name.textContent = "Dell");
    pnone.forEach(none => none.textContent = "Yoxdur");
    pprice.forEach(price => price.textContent = "1300$");
    pnew.forEach(newItem => newItem.textContent = "Bəli");
    pphone.forEach(phone => phone.textContent = "070-781-7262");
})
lenovo.addEventListener("click",function () {
    img.forEach(img => img.src = "https://th.bing.com/th/id/OIP.cumhA0I-xOQO8zPy1rBKkQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7");
    pname.forEach(name => name.textContent = "Lenovo");
    pnone.forEach(none => none.textContent = "Yoxdur");
    pprice.forEach(price => price.textContent = "1400$");
    pnew.forEach(newItem => newItem.textContent = "Bəli");
    pphone.forEach(phone => phone.textContent = "077-709-7481");
})
mac.addEventListener("click",function () {
    img.forEach(img => img.src = "https://th.bing.com/th/id/OIP.t7ndy7X5vjLN9yM79zn_2AHaHa?rs=1&pid=ImgDetMain");
    pname.forEach(name => name.textContent = "MacBook");
    pnone.forEach(none => none.textContent = "Yoxdur");
    pprice.forEach(price => price.textContent = "900$");
    pnew.forEach(newItem => newItem.textContent = "Xeyr");
    pphone.forEach(phone => phone.textContent = "070-589-1001");
})
samsung.addEventListener("click",function () {
    img.forEach(img => img.src = "https://www.bhphotovideo.com/images/images2500x2500/samsung_np900x5n_k01us_15_6_notebook_9_light_1304856.jpg");
    pname.forEach(name => name.textContent = "Samsung");
    pnone.forEach(none => none.textContent = "Yoxdur");
    pprice.forEach(price => price.textContent = "2900$");
    pnew.forEach(newItem => newItem.textContent = "Bəli");
    pphone.forEach(phone => phone.textContent = "077-777-7777");
})
document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let buttons = document.querySelectorAll('.list button');

    buttons.forEach(button => {
        let text = button.textContent.toLowerCase();
        if (text.includes(filter)) {
            button.style.display = '';
        } else {
            button.style.display = 'none';
        }
    });
});
function setActive(button) {
    const buttons = document.querySelectorAll('.list button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
function createPcElement(id) {
    let name = localStorage.getItem(`pc_${id}_name`);
    let price = localStorage.getItem(`pc_${id}_price`);
    let image = localStorage.getItem(`pc_${id}_image`);
    let neww = localStorage.getItem(`pc_${id}_yeni`);
    let phone = localStorage.getItem(`pc_${id}_phone`);
    let div = document.createElement('div');
    div.classList.add('son');
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('imgdiv');
    let img = document.createElement('img');
    img.classList.add('img');
    img.src = image || 'image.png'; 
    img.alt = 'Photo';
    imgDiv.appendChild(img);
    div.appendChild(imgDiv);
    let infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    let adDiv = document.createElement('div');
    adDiv.classList.add('ad');
    adDiv.innerHTML = `<p>Ad:</p><p class="name">${name}</p>`;
    infoDiv.appendChild(adDiv);

    let tesvirDiv = document.createElement('div');
    tesvirDiv.classList.add('tesvir');
    tesvirDiv.innerHTML = `<p>Təsvir:</p><p class="none">${neww}</p>`;
    infoDiv.appendChild(tesvirDiv);

    let qiymetDiv = document.createElement('div');
    qiymetDiv.classList.add('qiymet');
    qiymetDiv.innerHTML = `<p>Qiymət:</p><p class="price">${price}</p>`;
    infoDiv.appendChild(qiymetDiv);

    let yeniDiv = document.createElement('div');
    yeniDiv.classList.add('yeni');
    yeniDiv.innerHTML = `<p>Yeni:</p><p class="new">${neww}</p>`;
    infoDiv.appendChild(yeniDiv);

    let telefonDiv = document.createElement('div');
    telefonDiv.classList.add('telefon');
    telefonDiv.innerHTML = `<p>Telefon:</p><p class="phone">${phone}</p>`;
    infoDiv.appendChild(telefonDiv);

    div.appendChild(infoDiv);
    let btnDiv = document.createElement('div');
    btnDiv.classList.add('btndiv');
    let button = document.createElement('button');
    button.textContent = 'Ətraflı';
    btnDiv.appendChild(button);
    div.appendChild(btnDiv);
    document.querySelector('.comps').appendChild(div);
}
let pcs = JSON.parse(localStorage.getItem('pcs') || '[]');
pcs.forEach(pc => {
    createPcElement(pc.id);
});
function adjustHeight() {
    let comps = document.querySelector(".comps");

    if (comps) {
        if (comps.scrollHeight > comps.clientHeight) {
            comps.style.height = `${comps.scrollHeight}px`;
        }
    }
}

adjustHeight();
const compsObserver = new MutationObserver(adjustHeight);
const comps = document.querySelector(".comps");

if (comps) {
    compsObserver.observe(comps, { childList: true, subtree: true, characterData: true });
}
document.querySelectorAll('.btndiv button').forEach(button => {
    button.addEventListener('click', function() {
        let son = button.closest('.son');
        let imgSrc = son.querySelector('.img').src;
        let name = son.querySelector('.name').textContent;
        let description = son.querySelector('.none').textContent;
        let price = son.querySelector('.price').textContent;
        let isNew = son.querySelector('.new').textContent;
        let phone = son.querySelector('.phone').textContent;

        document.querySelector('.modal-img').src = imgSrc;
        document.querySelector('.modal-name').textContent = name;
        document.querySelector('.modal-none').textContent = description;
        document.querySelector('.modal-price').textContent = price;
        document.querySelector('.modal-new').textContent = isNew;
        document.querySelector('.modal-phone').textContent = phone;

        let modal = document.getElementById('detailsModal');
        modal.style.display = 'block';
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    let modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    let modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
let namme = localStorage.getItem("pc_1_name");
if (namme) {
    console.log(namme);
} else {
    console.log("Значение не найдено");
}
