/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function placerElement(part1="460", part2="00", part3="00", part4="00") {
        return "+" + part1 + part2 + part3 + part4;
    }
    let number = document.getElementById('target');
    let cpt1 = document.getElementById('part-one').value;
    document.getElementById("part-one").addEventListener("click", () => {
        let minimum = parseInt(document.getElementById('part-one').getAttribute('data-min'));
        let maximum = parseInt(document.getElementById('part-one').getAttribute('data-max'));
        cpt1++;
        if((minimum + cpt1) > maximum){
            cpt1 = 0;
        }
        let resultat1 = minimum + cpt1;
        if(resultat1 < 10){
            resultat1 = "0" + resultat1;
        }
        document.getElementById('part-one').innerHTML = resultat1;
        number.innerHTML = placerElement(resultat1);
    });
    let cpt2 = document.getElementById("part-two").value;
    document.getElementById("part-two").addEventListener("click", () => {
        let minimum = parseInt(document.getElementById('part-two').getAttribute('data-min'));
        let maximum = parseInt(document.getElementById('part-two').getAttribute('data-max'));
        cpt2++;
        if((minimum + cpt2) > maximum){
            cpt2 = 0;
        }
        let resultat2 = minimum + cpt2;
        if(resultat2< 10){
            resultat2 = "0" + resultat2;
        }
        document.getElementById('part-two').innerHTML = resultat2;
        number.innerHTML = placerElement(resultat1, resultat2);
    });
    let cpt3 = document.getElementById("part-three").value;
    document.getElementById("part-three").addEventListener("click", () => {
        let minimum = parseInt(document.getElementById('part-three').getAttribute('data-min'));
        let maximum = parseInt(document.getElementById('part-three').getAttribute('data-max'));
        cpt3++;
        if((minimum + cpt3) > maximum){
            cpt3 = 0;
        }
        let resultat3 = minimum + cpt3;
        if(resultat3< 10){
            resultat3 = "0" + resultat3;
        }
        document.getElementById('part-three').innerHTML = resultat3;
        number.innerHTML = placerElement(resultat1, resultat2, resultat3);
    });
    let cpt4 = document.getElementById("part-four").value;
    document.getElementById("part-four").addEventListener("click", () => {
        let minimum = parseInt(document.getElementById('part-four').getAttribute('data-min'));
        let maximum = parseInt(document.getElementById('part-four').getAttribute('data-max'));
        cpt4++;
        if((minimum + cpt4) > maximum){
            cpt4 = 0;
        }
        let resultat4 = minimum + cpt4;
        if(resultat4< 10){
            resultat4 = "0" + resultat4;
        }
        document.getElementById('part-four').innerHTML = resultat4;
        number.innerHTML = placerElement(resultat1, resultat2, resultat3, resultat4);
    });
})();
