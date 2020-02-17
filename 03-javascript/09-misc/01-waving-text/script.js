/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // function effetVague(separer) {
    //     let i = 1;
    //     let j = 20;
    //     for(let partie = 1; partie < separer; partie+=2){
    //         if(i < separer*partie){
    //             document.getElementsByTagName('span').item(i).style.fontSize = j + "px";
    //             i++;
    //             j++;
    //         }
    //     }
    //     console.log(separer);
    //     console.log(partie);        
    // }

    const contenu = document.getElementById('target').innerText;
    document.getElementById('target').innerText = "";
    const lettres = contenu.split('');

    for(let i = 0; i < lettres.length; i++){
        let creaSpan = document.createElement('span');
        creaSpan.innerHTML = lettres[i];
        document.getElementById('target').appendChild(creaSpan);
        // PREMIER TEST
        // if(i%1 == 0){
        //     creaSpan.style.fontSize = "50%";
        //     creaSpan.style.padding-top = "5px";
        // }
        // if(i%2 == 0){
        //     creaSpan.style.fontSize = "70%";
        // }
        // if(i%3 == 0){
        //     creaSpan.style.fontSize = "100%";
        // }
        // if(i%4 == 0){
        //     creaSpan.style.fontSize = "70%";
        // }
        // if(i%5 == 0){
        //     creaSpan.style.fontSize = "50%";
        // }
    }

    // effetVague(parseInt(lettres.length/6));
    // DEUXIÈME TEST
    i = 1;
    while(i < lettres.length/2){
        document.getElementsByTagName('span').item(i).style.fontSize = i + "px";
        i++;
    }
    let j = i;
    while(i < lettres.length+1 && i > lettres.length/2){
        document.getElementsByTagName('span').item(i).style.fontSize = j + "px";
        j--;
        i++;
    }
    // TROISIÈME TEST
    // let partie = lettres.length/6;
    // i = 1;
    // while(i < partie){
    //     document.getElementsByTagName('span').item(i).style.fontSize = i + "px";
    //     i++;
    // }
    // let j = i;
    // while(i < partie*2){
    //     document.getElementsByTagName('span').item(i).style.fontSize = j + "px";
    //     j--;
    //     i++;
    // }
    // j = 1;
    // while(i < partie*3){
    //     document.getElementsByTagName('span').item(i).style.fontSize = j + "px";
    //     j++;
    //     i++;
    // }
    // while(i < partie*4){
    //     document.getElementsByTagName('span').item(i).style.fontSize = j + "px";
    //     j--;
    //     i++;
    // }
    // j = 1;
    // while(i < partie*5){
    //     document.getElementsByTagName('span').item(i).style.fontSize = l + "px";
    //     l++;
    //     i++;
    // }
    // while(i < partie*5){
    //     document.getElementsByTagName('span').item(i).style.fontSize = l + "px";
    //     l--;
    //     i++;
    // }
})();
