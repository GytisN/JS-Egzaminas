/* ------------------------------ TASK 3 ---------------------------------------------------
Sutvarkykite užduoties "Task 3" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { composition } from './modules/math/composition.js';
import { division } from './modules/math/division.js';
import { multiplication } from './modules/math/multiplication.js';
import { subtraction } from './modules/math/subtraction.js';
import { one, two, three, four, five } from './modules/numbers/numbers.js';


let a = composition(one, four);
let b = division(four, two);
let c = subtraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

document.getElementById("output").innerHTML = "sudėtis: " +  a + ", </br> " + "atimtis: " + b + ", </br> " + "dalyba: " + c + ", </br> " + "daugyba: " + d + "."
