/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let dateActuelle = new Date();
        let annee = Number(document.getElementById("year").value);

        for (month = 0; month < 12; month++){ 
            dateActuelle.setFullYear(annee,month,13);
            if(dateActuelle.getDay()===5){
                console.log("voila un vendredi 13 -->  " + dateActuelle);
            }
        }
    });
})();
