/* ------------------------------ TASK 9 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
3. Isrykiuoti pagal varda mazejimo tvarka

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
let usersData = null;

const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

async function getUsersList() {
    const response = await fetch(ENDPOINT, {
        method: "GET"
    });
    if (response.status === 200) {
        return await response.json();
    } else {
        console.log(response.statusText);
    }
};

async function onButtonClick() {
    const users = await getUsersList();
    usersData = [];
    users.forEach(el => {
        usersData.push({
            login: el.login,
            url: el.avatar_url
        })
    });
    const sortedArray = usersData.sort((a, b) => {
        if (a.login.length > b.login.length) {
            return -1
        } else {
            return 1
        }
    })
    renderUsers(sortedArray)
};

function renderUsers(arr) {
    output.innerHTML = ""
    const htmlData = [];
    arr.forEach(el => {
        htmlData.push(`
        <div>
            <img style="width:100%" "align-items:left"; src="${el.url}"/>
            <br />
            <p style="text-align:center"> ${el.login} </p>
        </div>`)
    });
    output.innerHTML = htmlData.join("")
};

btn.addEventListener("click", function() {
    btn.classList.toggle("active");
    
    if(btn.classList.contains("active")) {
        if (!usersData) {
            onButtonClick();
        } else {
            output.style.display = "block";
        }
    } else {
        output.style.display = "none";
    }
    document.getElementById('btn').style.display = "none"
})