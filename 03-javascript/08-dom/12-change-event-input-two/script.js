/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('pass-one').addEventListener('input', () => {
        let leMot = document.getElementById('pass-one').value;
        let validation = document.getElementById('validity');
        let numbers = /[0-9]/g;
        if(leMot.length >= 8 && (leMot.match(numbers)).length >= 2){
            validation.innerHTML = "Ok";
        }else{
            validation.innerHTML = "Pas ok";
        }
    });
})();
