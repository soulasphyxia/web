import * as storage from '../storage.js';
const table = document.getElementById("customer-table")
const customers = storage.load();
generateTable(customers)
let isNaturalOrder = true;

function generateTable(customers) {
    table.innerHTML = `
    <tr>
            <th class="sort-key" id="id">#</th>
            <th class="sort-key" id="name">ФИО</span></th>
            <th class="sort-key" id="sex">Пол</th>
            <th class="sort-key" id="height">Рост</th>
            <th class="sort-key" id="weight">Вес</th>
            <th>Национальность</th>
            <th class="sort-key" id="birth-date">Дата рождения</th>
            <th>Номер телефона</th>
            <th>Адрес</th>
            <th>Номер карты</th>
            <th>Банковский счёт</th>
        </tr>`;

    for (let customer of customers) {
        table.appendChild(generateTableRow(customer))
    }

    Array.from(document.querySelectorAll(".sort-key")).forEach(
        th => th.addEventListener("click", () => {
            const sort_key = th.id;
            generateTable(storage.sort(sort_key, isNaturalOrder));
            isNaturalOrder = !isNaturalOrder;
        })
    )
}

function generateTableRow(customer) {
    const tr = document.createElement("tr");
    const fullName = customer["second-name"] + " " + customer["name"] + " " + customer["surname"];
    const address = `${customer["zip-code"]},${customer["country"]},${customer["region"]} обл.,${customer["district"]} р-н.,г.${customer["city"]},ул.${customer["street"]},д.${customer["home-address"]},кв.${customer["appartment-number"]}`

    tr.innerHTML = `
        <td>${customer.id}</td>
        <td>${fullName}</td>
        <td>${customer["sex"]}</td>
        <td>${customer["height"]}</td>
        <td>${customer["weight"]}</td>
        <td>${customer["nation"]}</td>
        <td>${customer["birth-date"]}</td>
        <td>${customer["phone-number"]}</td>
        <td>${address}</td>
        <td>${customer["card-number"]}</td>
        <td>${customer["bank-account"]}</td>
    `;
    return tr;
}

function resetTable() {
    generateTable(storage.load())
}

document.getElementById("reset").addEventListener("click", () => resetTable());

document.getElementById("find-btn").addEventListener("click", () => {
    const key = document.getElementById("find-key").value;
    const value = document.getElementById("find-value").value;
    generateTable(storage.find(key, value))
})

