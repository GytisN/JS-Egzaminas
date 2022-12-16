/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

function getJson(url) {

fetch(url)
.then(function (response) {
    return response;
})

.then(function (data) {
    return data.json();
})

.then(function (Normal) {
    const html = Normal.map (
        (data) => `<div class="card">
        <h3 class="car-brand"> ${data.brand} </h3>
        <p class="car-model"> ${data.models.join(", ")} </p>
        </div>`
    );
    document.getElementById("output").innerHTML = html.join("");
    console.log(Normal)
})

.catch(function (err) {
    console.log(err.message)
})

}

window.onload = getJson(ENDPOINT);