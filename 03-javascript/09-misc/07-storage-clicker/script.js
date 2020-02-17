/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let compteur = localStorage.getItem("compter");

    if (compteur === "") {
        compteur = 0;
    }else{
        document.getElementById("target").innerHTML = localStorage.getItem("compter");
    }

    document.getElementById("increment").addEventListener("click", () => {
        compteur++;
        localStorage.setItem("compter", compteur);
        document.getElementById("target").innerHTML = localStorage.getItem("compter");
    });
})();
