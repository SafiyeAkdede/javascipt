/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let idTarget = document.getElementById('target');
    let tableau = document.createElement('table'); // tableau = <table>
    let monTableau = idTarget.appendChild(tableau);
    for(let i = 1; i < 11; i++){
        let ligne = document.createElement('tr'); // ligne = <tr>
        for(let j = 1; j < 11; j++){
            let colonne = document.createElement('td'); // colonne = <td>
            let remplissage = document.createTextNode(i +"x"+ j +"="+ i*j);
            colonne.appendChild(remplissage);
            ligne.appendChild(colonne);
        }
        monTableau.appendChild(ligne);
    }
})();
