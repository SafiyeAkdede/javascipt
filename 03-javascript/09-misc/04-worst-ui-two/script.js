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
    let partieUn = document.getElementById('part-one').innerHTML;
    let partieUnMax = document.getElementById('part-one').getAttribute('data-max');
    let partieDeux = document.getElementById('part-two').innerHTML;
    let partieDeuxMax = document.getElementById('part-two').getAttribute('data-max');
    let partieTrois = document.getElementById('part-three').innerHTML;
    let partieTroisMax = document.getElementById('part-three').getAttribute('data-max');
    let partieQuatre = document.getElementById('part-four').innerHTML;
    let partieQuatreMax = document.getElementById('part-four').getAttribute('data-max');

    document.getElementById("part-one").addEventListener("click", () => {
        partieUn = document.getElementById('part-one').innerHTML;
        if (partieUn < partieUnMax) {
            partieUn++;
            document.getElementById('part-one').innerHTML = partieUn;
        }else {
            partieUn = document.getElementById('part-one').getAttribute('data-min');
            document.getElementById('part-one').innerHTML = document.getElementById('part-one').getAttribute('data-min');
        }
        document.getElementById('target').innerHTML = "+"+partieUn+partieDeux+partieTrois+partieQuatre;
    });

    document.getElementById("part-two").addEventListener("click", () => {
        partieDeux = document.getElementById('part-two').innerHTML;
        if (partieDeux < partieDeuxMax) {
            partieDeux++;
            if (partieDeux < 10) {
                partieDeux = "0"+partieDeux;
                document.getElementById('part-two').innerHTML = partieDeux;
            }else {
                document.getElementById('part-two').innerHTML = partieDeux;
            }
        }else {
            partieDeux = document.getElementById('part-two').getAttribute('data-min');
            document.getElementById('part-two').innerHTML = document.getElementById('part-two').getAttribute('data-min');
        }
        document.getElementById('target').innerHTML = "+"+partieUn+partieDeux+partieTrois+partieQuatre;
    });

    document.getElementById("part-three").addEventListener("click", () => {
        partieTrois = document.getElementById('part-three').innerHTML;
        if (partieTrois < partieTroisMax) {
            partieTrois++;
            if (partieTrois < 10) {
                partieTrois = "0"+partieTrois;
                document.getElementById('part-three').innerHTML = partieTrois;
            }else{
            document.getElementById('part-three').innerHTML = partieTrois;
            }
        }else{
            partieTrois = document.getElementById('part-three').getAttribute('data-min');
            document.getElementById('part-three').innerHTML = document.getElementById('part-three').getAttribute('data-min');
        }
        document.getElementById('target').innerHTML = "+"+partieUn+partieDeux+partieTrois+partieQuatre;
    });

    document.getElementById("part-four").addEventListener("click", () => {
        partieQuatre = document.getElementById('part-four').innerHTML;
        if (partieQuatre < partieQuatreMax) {
            partieQuatre++;
            if (partieQuatre < 10) {
                partieQuatre = "0"+partieQuatre;
                document.getElementById('part-four').innerHTML = partieQuatre;
            } else {
            document.getElementById('part-four').innerHTML = partieQuatre;
            }
        } else {
        partieQuatre = document.getElementById('part-four').getAttribute('data-min');
        document.getElementById('part-four').innerHTML = document.getElementById('part-four').getAttribute('data-min');
        }
        document.getElementById('target').innerHTML = "+"+partieUn+partieDeux+partieTrois+partieQuatre;
    });
})();
