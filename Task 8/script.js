/* ------------------------------ TASK 8 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const button = document.getElementById("btn__element");
const counter = document.getElementById("btn__state")
  state = 0;
button.onclick = function() {
  state += 1;
  counter.innerHTML = state;
};
