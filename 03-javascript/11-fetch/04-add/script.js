/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let recupName = document.getElementById("hero-name").value;
        let recupAlterEgo = document.getElementById("hero-alter-ego").value;
        let recupPower = document.getElementById("hero-powers").value;
        if(recupName && recupAlterEgo && recupPower){
            (async () => {
                const response = await fetch("http://localhost:3000/heroes", {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name:recupName, alterEgo:recupAlterEgo, abilities:recupPower.split(",")})
                });
                const content = await response.json();
                console.log(content);
            })();
        }else{
            alert("Remplissez tous les champs !");
        }
    });
})();
