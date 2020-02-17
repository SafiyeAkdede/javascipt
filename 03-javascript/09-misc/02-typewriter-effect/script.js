/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let i = 0;
    let contenu = document.getElementById('target').innerText;
    document.getElementById('target').innerHTML = "";

    function apparitionLettre() {
        if(i < contenu.length){
            document.getElementById('target').innerHTML += contenu.charAt(i);
            i++;
            // setTimeout sert à appeler la fonction un certain nombre de fois (2ème paramètre)
        }
        setTimeout(apparitionLettre, Math.floor(Math.random() * 150));
    }

    apparitionLettre();
})();
