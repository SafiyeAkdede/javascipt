/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let jourNaiss = document.getElementById("dob-day").value;
        let moisNaiss = document.getElementById("dob-month").value;
        let anneeNaiss = document.getElementById("dob-year").value;

        function ageActuelle(moisNaiss, jourNaiss, anneeNaiss){
            dateActuelle = new Date();
            anneeActuelle = dateActuelle.getFullYear();
            moisActuelle = dateActuelle.getMonth();
            jourActuelle = dateActuelle.getDate();
            age = anneeActuelle - anneeNaiss;

            if (moisActuelle < (moisNaiss - 1) || ((moisNaiss - 1) == moisActuelle) && (jourActuelle < jourNaiss)){
                age--;
            }
            return age;
        }

        alert(ageActuelle(moisNaiss, jourNaiss, anneeNaiss));
    });
})();
