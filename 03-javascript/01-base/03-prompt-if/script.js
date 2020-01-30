/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var reponse;
    reponse = prompt("Est-ce que tu veux du gâteau ?");
    if(reponse == "oui"){
        alert("Très bon choix");
    }else{
        alert("Du gâteau, ça ne se refuse pas !");
    }
})();
