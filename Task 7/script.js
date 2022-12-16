/* ------------------------------ TASK 7 --------------------------------------------
Kreipiantis i zemiau pateikta resursa gauti siuos duomenis is serverio ir atvaizduoti juos htmle.
T.y. turi buti atvaizduota zinute ir nuotrauka <img>.
Taip pat tinklapyje turi buti atvaizduotas mygtukas, kuri paspaudus butu gaunami nauji duomenys
ir pakeiciami seni.
Taip pat isijungus si tinklapi is naujo turiu matyti ta pati irasa, kuri pries tai buvome gave ir tik paspaudus mygtuka "Refresh"
Turime gauti naujus duomenis.

Hint: naudojamas localstorage, saugoti informacijai;
------------------------------------------------------------------------------------ */

const URL = "https://cors-anywhere.herokuapp.com/https://random.dog/woof.json";

let usersData = null;

// // 1. Susiziureti reikiamus HTML objektus ir susirasyti juos i kintamuosius
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

// 2. Gauti duomenis ir API
async function getMessage() {
    const response = await fetch(URL, {
        method: "GET"
    });
      if (response.status === 200) {
        return await response.json();
    } else {
        console.log(response.statusText);
    }
};
