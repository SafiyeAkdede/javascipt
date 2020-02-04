/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const contenu = document.getElementById('target').innerHTML = "Woo-hoo ! Je fais des vagues ! Wééééé ! Oh... je crois que je vais avoir le mal de mer...";
    const lettres = contenu.split('');
    for(i = 0; i < lettres.length; i++){
        contenu.style.fontSize = Math.floor((Math.random() * 30) + 10)+"px";
    }
})();
