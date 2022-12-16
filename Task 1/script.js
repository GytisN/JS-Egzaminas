/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator(a,b) {
    this.a = a;
    this.b = b;

    this.sum = function() {
        return a+b
    };

    this.subtraction = function() {
        return a-b
    };

    this.multiplication = function() {
        return a*b
    };

    this.division = function() {
        return a/b
    };
}
submit.addEventListener("click", function() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
        let q = Number(x);
        let w = Number(y);
    const result = new Calculator(q, w);
    document.getElementById("output").innerHTML = 
        "Skaičius a: " + result.a + "; skaičius b: " + result.b+ "; </br>" + 
        "Skaičių a ir b suma " +  `${result.sum()}` + ", </br>" + 
        "Skaičių a ir b skirtumas " +  `${result.subtraction()}` + ", </br>" +
        "Skaičių a ir b sandauga " +  `${result.multiplication()}` + ", </br>" + 
        "Skaičių a ir b dalyba " +  `${result.division()}`

    //console logai pasitikrinimui
    // console.log("Skaičius a: " + result.a + "; skaičius b: " + result.b+ ";")
    // console.log("skaičių a ir b suma " +  `${result.sum()}`);
    // console.log("skaičių a ir b skirtumas " +  `${result.subtraction()}`);
    // console.log("skaičių a ir b sandauga " +  `${result.multiplication()}`);
    // console.log("skaičių a ir b dalyba " +  `${result.division()}`);
  });

