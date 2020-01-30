/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        const moi = {
            lastname : "Akdede",
            firstname : "Safiye",
            age : "21",
            city : "Liège",
            country : "Belgique"
        }
        console.log('My name is ' + moi.firstname + " " + moi.lastname + ". I am " + moi.age + ". I live in " + moi.city + ", " + moi.country + ".");
    });
})();
