/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme", //pomme
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise", //cerise
    ];
    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        var last = fruits.pop(); //supprimer au début
        var first = fruits.shift(); //supprimer à la fin
        var newLength = fruits.unshift('banane'); //ajouter au début
        var newLength = fruits.push('kiwi'); //ajouter à la fin
        console.log(fruits);
    });
})();
