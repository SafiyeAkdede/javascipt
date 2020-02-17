/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let nombreEssai = 0;
    let nombreAleatoire = Math.floor(Math.random() * 100) + 1; // sélection aléatoire du nombre entre 1 et 100
    let nombreDonnee;
    let message = "Le nombre à deviner est entre 1 et 100."
    
    do{
        nombreDonnee = prompt(message);
        nombreEssai++;
        if(nombreDonnee > nombreAleatoire)
            message = "C'est moins";
        else
            message = "C'est plus";
    }while(nombreDonnee != nombreAleatoire);
    alert("Bravo, tu as gagne en " + nombreEssai + " coups ! La nombre était le " + nombreDonnee);
})();
