/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        const nombreAlea = [];
        let somme = 0;
        for(i=0; i<10; i++){
            nombreAlea[i] = Math.round(Math.random() * 100);
            document.getElementsByTagName('td')[i].innerHTML = nombreAlea[i];
            somme = somme + nombreAlea[i];
        }
        document.getElementById('min').innerHTML = Math.min(...nombreAlea);
        document.getElementById('max').innerHTML = Math.max(...nombreAlea);
        document.getElementById('sum').innerHTML = somme;
        document.getElementById('average').innerHTML = somme/10;
    });
})();
