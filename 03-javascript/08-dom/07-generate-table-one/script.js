/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // créer d'abord les balises ensuite les placer
    let idTarget = document.getElementById('target');
    let tableau = document.createElement('table'); // tableau = <table>
    let monTableau = idTarget.appendChild(tableau);
    for(let i = 0; i < 10; i++){
        let ligne = document.createElement('tr'); // ligne = <tr>
        for(let j = 0; j < 1; j++){
            let colonne = document.createElement('td'); // colonne = <td>
            ligne.appendChild(colonne);
        }
        monTableau.appendChild(ligne);
    }
})();
