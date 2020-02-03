/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let recupBalise = document.getElementsByTagName('img').item(0);
    let recupAttribut = recupBalise.getAttribute('data-hover');
    let recupSource = recupBalise.getAttribute('src');
    recupBalise.addEventListener("mouseenter", () => {
        recupBalise.setAttribute('src', recupAttribut);
    });
    recupBalise.addEventListener("mouseleave", () => {
        recupBalise.setAttribute('src', recupSource);
    });
})();
