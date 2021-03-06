/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let recupId = document.getElementById("hero-id").value;
        fetch("http://localhost:3000/heroes")
            .then((response) => {
                return response.json();
            })
            .then((xMen) => {
                xMen.forEach(hero => {
                    if(hero.id == recupId){
                        let template = document.querySelector("#tpl-hero");
                        let target = document.querySelector("#target");
                        let clone = document.importNode(template.content, true);
                        let name = clone.querySelector(".name");
                        name.textContent = hero.name;
                        let alterEgo = clone.querySelector(".alter-ego");
                        alterEgo.textContent = hero.alterEgo;
                        let powers = clone.querySelector(".powers");
                        hero.abilities.forEach(power => {
                            let div = document.createElement("div");
                            div.textContent = power;
                            powers.appendChild(div);
                        });
                        target.appendChild(clone);
                    }
                });
            });
    });
})();
