/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async() => {
        const articles = await window.lib.getPosts();
        console.log(articles);

        // async function recupArticles() {
        //     let promesse = window.lib.getPosts().then((articles) => {
        //         articles.forEach(element => {
        //             console.log(element);
        //         });
        //     });
        //     let resultat =  await promesse;
        //     return resultat;
        // };
        // recupArticles();
    });
})();
