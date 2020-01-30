/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // boucle + questions
    do{
        let age = prompt("Entre ton âge : ");
        let sexe = prompt("Entre ton sexe : ");
        let ville = prompt("Entre ta ville : ");
        let confirmation = confirm(age + sexe + ville);
    }while(confirmation == false);
})();
