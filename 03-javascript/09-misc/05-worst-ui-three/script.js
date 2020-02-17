/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let vitesse = 100; // La vitesse dans laquelle les nombres vont défiler
    let partieUn;
    let partieDeux;
    let partieTrois;
    let partieQuatre;
    let bouttonUn = true;
    let bouttonDeux = true;
    let bouttonTrois = true;
    let bouttonQuatre = true;

    function defilementDesNombres() {
        partieUn = document.getElementById('part-one').getAttribute('value');
        if (bouttonUn) {
            if (partieUn == document.getElementById('part-one').getAttribute('data-max')) {
                partieUn = document.getElementById('part-one').getAttribute('data-min');
            } else {
                partieUn++;
            }
        }

        if (bouttonDeux) {
            partieDeux = document.getElementById('part-two').getAttribute('value');
            if (partieDeux == document.getElementById('part-two').getAttribute('data-max')) {
                partieDeux = document.getElementById('part-two').getAttribute('data-min');
            } else {
                partieDeux++;
            }
            if (partieDeux < 10 && partieDeux > 0) {
                partieDeux = "0" + partieDeux;
            }
        }

        if (bouttonTrois) {
            partieTrois = document.getElementById('part-three').getAttribute('value');
            if (partieTrois == document.getElementById('part-three').getAttribute('data-max')) {
                partieTrois = document.getElementById('part-three').getAttribute('data-min');
            } else {
                partieTrois++;
            }
            if (partieTrois < 10 && partieTrois > 0) {
                partieTrois = "0" + partieTrois;
            }
        }

        if (bouttonQuatre) {
            partieQuatre = document.getElementById('part-four').getAttribute('value');
            if (partieQuatre == document.getElementById('part-four').getAttribute('data-max')) {
                partieQuatre = document.getElementById('part-four').getAttribute('data-min');
            } else {
                partieQuatre++;
            }
            if (partieQuatre < 10 && partieQuatre > 0) {
                partieQuatre = "0" + partieQuatre;
            }
        }

        document.getElementById("target").innerHTML = "+" + partieUn + partieDeux + partieTrois + partieQuatre;
        document.getElementById('part-one').setAttribute('value', partieUn);
        document.getElementById('part-two').setAttribute('value', partieDeux);
        document.getElementById('part-three').setAttribute('value', partieTrois);
        document.getElementById('part-four').setAttribute('value', partieQuatre);
        setTimeout(defilementDesNombres, vitesse);
    }

    defilementDesNombres();

    document.getElementById("fix-part-one").addEventListener("click", () => {
        if (bouttonUn == true) {
            bouttonUn = false;
            document.getElementById('fix-part-one').innerHTML = "Start";
        } else {
            bouttonUn = true;
            document.getElementById('fix-part-one').innerHTML = "Stop";
        }
    });

    document.getElementById("fix-part-two").addEventListener("click", () => {
        if (bouttonDeux == true) {
            bouttonDeux = false;
            document.getElementById('fix-part-two').innerHTML = "Start";
        } else {
            bouttonDeux = true;
            document.getElementById('fix-part-two').innerHTML = "Stop";
        }
    });

    document.getElementById("fix-part-three").addEventListener("click", () => {
        if (bouttonTrois == true) {
            bouttonTrois = false;
            document.getElementById('fix-part-three').innerHTML = "Start";
        } else {
            bouttonTrois = true;
            document.getElementById('fix-part-three').innerHTML = "Stop";
        }
    });

    document.getElementById("fix-part-four").addEventListener("click", () => {
        if (bouttonQuatre == true) {
            bouttonQuatre = false;
            document.getElementById('fix-part-four').innerHTML = "Start";
        } else {
            bouttonQuatre = true;
            document.getElementById('fix-part-four').innerHTML = "Stop";
        }
    });
})();
