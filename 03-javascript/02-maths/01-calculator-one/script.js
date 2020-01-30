/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        // ajout de Number pour que les valeurs soit additioné et pas mit un à coté de l'autre 
        let solution = Number(document.getElementById("op-one").value) + Number(document.getElementById("op-two").value);
        alert(solution);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let solution = Number(document.getElementById("op-one").value) - Number(document.getElementById("op-two").value);
        alert(solution);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let solution = Number(document.getElementById("op-one").value) * Number(document.getElementById("op-two").value);
        alert(solution);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let solution = Number(document.getElementById("op-one").value) / Number(document.getElementById("op-two").value);
        alert(solution);
    });
})();
