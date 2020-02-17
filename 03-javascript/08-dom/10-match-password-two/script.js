/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let mdpUn = document.getElementById('pass-one').value;
        let mdpDeux = document.getElementById('pass-two').value;
        // classList.add("") et classList.remove("")
        if(mdpUn == mdpDeux){
            alert('Les deux mots de passe sont identiques');
        }else{
            document.getElementById("pass-one").setAttribute('class', 'error');
            document.getElementById("pass-two").setAttribute('class', 'error');
        }
    });
})();
