let pcs = JSON.parse(localStorage.getItem('pcs')) || [];  

let goHome = document.getElementById("goHome");
goHome.addEventListener("click", function () {
    window.location.href = "home.html";
});

let inputs = [
    document.getElementById('input1'),  
    document.getElementById('input2'),  
    document.getElementById('input3'),   
    document.getElementById('input4'),   
    document.getElementById('input6'),   
    document.getElementById('input7'),   
    document.getElementById('input8'),   
    document.getElementById('input9'), 
    document.getElementById('input10'), 
    document.getElementById('input12')   
];

let errorMessage = document.getElementById('error-message');
inputs.forEach(input => {
    input.addEventListener('input', checkFields);
});

function checkFields() {
    let allFilled = inputs.every(input => input.value.trim() !== '');
    errorMessage.style.display = allFilled ? 'none' : 'block';
}

window.addEventListener('load', checkFields);

// document.getElementById('newPc').addEventListener('click', function () {
//     if (errorMessage.style.display === "block") {
//         alert("Bütün sahələri doldurun!");
//     } else {
//         let category = document.getElementById('input1').value;
//         let name = document.getElementById('input2').value;
//         let price = document.getElementById('input3').value;
//         let description = document.getElementById('input4').value;
//         let image = document.getElementById('input6').value;
//         let ram = document.getElementById('input7').value;
//         let processor = document.getElementById('input8').value;
//         let memory = document.getElementById('input9').value;
//         let memoryType = document.getElementById('input10').value;
//         let videoCard = document.getElementById('input12').value;

//         let newPc = {
//             id: pcs.length + 1,
//             category: category,
//             name: name,
//             price: price,
//             description: description,
//             image: image,
//             ram: ram,
//             processor: processor,
//             memory: memory,
//             memoryType: memoryType,
//             videoCard: videoCard
//         };

//         pcs.push(newPc);  
//         localStorage.setItem('pcs', JSON.stringify(pcs));
//         renderTable();   
//         let modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
//         modal.hide();
//     }
// });
document.getElementById('newPc').addEventListener('click', function () {
    if (errorMessage.style.display === "block") {
        alert("Bütün sahələri doldurun!");
    } else {
        let id = pcs.length + 1;
        let name = document.getElementById('input1').value;
        let price = document.getElementById('input3').value;
        let image = document.getElementById('input6').value;
        let neww = document.getElementById('input5').value;
        let phone = localStorage.getItem("phone")

        let newPc = {
            id: id,
            name: name,
            price: price,
            image: image
        };

        pcs.push(newPc);  
        localStorage.setItem('pcs', JSON.stringify(pcs));
        localStorage.setItem(`pc_${id}_name`, name);
        localStorage.setItem(`pc_${id}_price`, price);
        localStorage.setItem(`pc_${id}_image`, image);
        localStorage.setItem(`pc_${id}_phone`, phone);
        localStorage.setItem(`pc_${id}_yeni`, neww);

        renderTable();   
        let modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
        modal.hide();
    }
});


function renderTable() {
    let tbody = document.getElementById('bodyB');
    tbody.innerHTML = '';

    pcs.forEach((pc) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${pc.id}</td>
            <td>${pc.name}</td>
            <td>${pc.price}</td>
            <td><img src="${pc.image}" alt="${pc.name}" width="50"></td>
            <td>
                <button class="btn btn-secondary" onclick="editPc(${pc.id})">Customize</button>
                <button class="btn btn-danger" onclick="removePc(${pc.id})">Remove</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editPc(id) {
    let pc = pcs.find(pc => pc.id === id);
    document.getElementById('input13').value = pc.category;
    document.getElementById('input14').value = pc.name;
    document.getElementById('input15').value = pc.price;
    document.getElementById('input16').value = pc.description;
    document.getElementById('input17').value = pc.isNew;
    document.getElementById('input18').value = pc.image;
    document.getElementById('input19').value = pc.ram;
    document.getElementById('input20').value = pc.processor;
    document.getElementById('input21').value = pc.memory;
    document.getElementById('input22').value = pc.memoryType;
    document.getElementById('input23').value = pc.system;
    document.getElementById('input24').value = pc.videoCard;
    let modal = new bootstrap.Modal(document.getElementById('exampleModalR'));
    modal.show();
    document.getElementById('sCh').addEventListener('click', function () {
        pc.category = document.getElementById('input13').value;
        pc.name = document.getElementById('input14').value;
        pc.price = document.getElementById('input15').value;
        pc.description = document.getElementById('input16').value;
        pc.isNew = document.getElementById('input17').value;
        pc.image = document.getElementById('input18').value;
        pc.ram = document.getElementById('input19').value;
        pc.processor = document.getElementById('input20').value;
        pc.memory = document.getElementById('input21').value;
        pc.memoryType = document.getElementById('input22').value;
        pc.system = document.getElementById('input23').value;
        pc.videoCard = document.getElementById('input24').value;
        localStorage.setItem('pcs', JSON.stringify(pcs));
        renderTable();
        modal.hide();
    });
}

function removePc(id) {
    if (confirm("Əminsiz?")) {
        pcs = pcs.filter(pc => pc.id !== id);
        localStorage.setItem('pcs', JSON.stringify(pcs));
        renderTable();
    }
}

document.querySelector('input[aria-label="Username"]').addEventListener('input', function (e) {
    let searchQuery = e.target.value.toLowerCase();
    let filteredPcs = pcs.filter(pc => pc.name.toLowerCase().includes(searchQuery));
    renderFilteredTable(filteredPcs);
});

function renderFilteredTable(filteredPcs) {
    let tbody = document.getElementById('bodyB');
    tbody.innerHTML = '';

    filteredPcs.forEach((pc) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${pc.id}</td>
            <td>${pc.name}</td>
            <td>${pc.price}</td>
            <td><img src="${pc.image}" alt="${pc.name}" width="50"></td>
            <td>
                <button class="btn btn-secondary" onclick="editPc(${pc.id})">Customize</button>
                <button class="btn btn-danger" onclick="removePc(${pc.id})">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function renderTable() {
    let tbody = document.getElementById('bodyB');
    tbody.innerHTML = '';

    pcs.forEach((pc) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${pc.id}</td>
            <td>${pc.name}</td>
            <td>${pc.price}</td>
            <td>
                <img src="${pc.image}" alt="${pc.name}" width="50" style="cursor: pointer;" 
                     onclick="openImageModal('${pc.image}', '${pc.name}')">
            </td>
            <td>
                <button class="btn btn-secondary" onclick="editPc(${pc.id})">Customize</button>
                <button class="btn btn-danger" onclick="removePc(${pc.id})">Remove</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function openImageModal(imageSrc, imageAlt) {
    let modal = new bootstrap.Modal(document.getElementById('imageModal'));
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalImage').alt = imageAlt;
    modal.show();
}

document.styleSheets[0].insertRule(`
    .is-invalid {
        border-color: red;
    }
`, document.styleSheets[0].cssRules.length);
window.onload = function() {
    renderTable();
};
document.getElementById('input6').addEventListener('input', function() {
    let imageUrl = this.value;
    let showImg = document.querySelector('.showimg');
    showImg.src = imageUrl;
});
