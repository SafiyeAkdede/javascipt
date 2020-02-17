/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('pass-one').addEventListener('input', () => { //"keydown" et event.preventDefault()
        let leMot = document.getElementById('pass-one').value;
        document.getElementById('pass-one').value = leMot.substring(0, 9);
        document.getElementById('counter').innerHTML = leMot.length+"/10";
        
        // let nombre = document.getElementById('counter');
        // if(leMot.length > 9){
        //     alert("Stop ! Tu as entré beaucoup trop de lettres !");
        //     nombre.innerHTML = leMot.length + "/10";
        // }else{
        //     nombre.innerHTML = leMot.length + "/10";
        // }
    });
})();
