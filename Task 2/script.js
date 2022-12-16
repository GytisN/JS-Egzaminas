/* ------------------------------ TASK 2 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor (title, director, budget,) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    };

    wasExpensive() {
        if (this.budget >= 100000000) {
            return true;
        } else {
            return false;
        }
    };
}

const blockbuster  = new Movie ('Mad Max: Fury Road', 'George Miller', 185100000 )

blockbuster.wasExpensive();


document.getElementById("input").innerHTML = blockbuster.title + ' <i> by </i> ' +  blockbuster.director

document.getElementById("output").innerHTML = 
"Was movie expensive? " + blockbuster.wasExpensive() +
", </br>" + blockbuster.budget + " USD";