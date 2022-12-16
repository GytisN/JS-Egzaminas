/* ------------------------------ TASK 5 --------------------------------------------
Sukurkite duomenu masyva, kuriame butu talpinami duomenys apie studentus:
1. Vardas
2. Pavarde
3. Amzius
4. Studijavimo datos pradzia

Turint siuos duomenis atlikti filtravima pagal studijavimo datos pradzia. Pavyzdziui,
norime matyti studentus kurie pradejo studijuoti nuo 2022-03-10. Si pasirinkima vartotojas atlieka
paprastu inputu. Filtravimas ivyksta tik tada kai vartotojas paspaudzia mygtuka Submit

P.S Reikalingus HTML elementus prisideti, kaip input, output ir tt
------------------------------------------------------------------------------------ */

const array = [
    { id: '1', firstName: "Justas", secondName: "Kupčinskas", studiesStarted: "2022-03-10" },
    { id: '2', firstName: "Joana", secondName: "Pociūtė", studiesStarted: "2022-03-10" },
    { id: '3', firstName: "Aurimas", secondName: "Jurkevičius", studiesStarted: "2021-11-16" },
    { id: '4', firstName: "Sofija", secondName: "Levickaitė", studiesStarted: "2022-03-10" },
    { id: '5', firstName: "Regina", secondName: "Vasiliauskienė", studiesStarted: "2022-04-30" },
    { id: '6', firstName: "Evaldas", secondName: "Jakubauskas", studiesStarted: "2022-03-10" },
    { id: '7', firstName: "Arūnė", secondName: "Navickienė", studiesStarted: "2022-01-03" },
    { id: '8', firstName: "Dainius", secondName: "Ambrazaitis", studiesStarted: "2022-04-30" },
    { id: '9', firstName: "Mindaugas", secondName: "Buločius", studiesStarted: "2022-03-10" },
    { id: '10', firstName: "Gintarė", secondName: "Jankauskaitė", studiesStarted: "2021-11-16" },
    { id: '11', firstName: "Nerijus ", secondName: "Kazlauskas", studiesStarted: "2022-03-10" },
    { id: '12', firstName: "Algimantas", secondName: "Survila", studiesStarted: "2022-01-03" },
];

const dataDiv = document.querySelector(".data");
let htmlData = [];
const selectBox = document.querySelector("select");

function render(array) {
    array.forEach((el) => {
        htmlData.push(`
        <div>
              ${el.firstName} ${el.secondName}, studijos pradėtos ${el.studiesStarted}
        </div>`)
    });
    console.log(htmlData);
    console.log(htmlData.join(' '))
    dataDiv.innerHTML = htmlData.join(' ')
}

function init() {
    render(array);
}

submit.addEventListener("click", function() {
    htmlData = []
    let dataArray = [];
    if (selectBox.value === "date1") {
        dataArray = array.filter(el => el.studiesStarted === '2021-11-16').sort((a, b) => b.studiesStarted - a.studiesStarted)
    } else if (selectBox.value === "date2") {
        dataArray = array.filter(el => el.studiesStarted === '2022-01-03').sort((a, b) => b.studiesStarted - a.studiesStarted)
    } else if (selectBox.value === "date3") {
        dataArray = array.filter(el => el.studiesStarted === '2022-03-10').sort((a, b) => b.studiesStarted - a.studiesStarted)
    } else if (selectBox.value === "date4") {
        dataArray = array.filter(el => el.studiesStarted === '2022-04-30').sort((a, b) => b.studiesStarted - a.studiesStarted)
    } else {
        dataArray = array
    }
        render(dataArray)
  
})

init();