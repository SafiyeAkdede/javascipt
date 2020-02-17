/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de comments
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((_, articles) => { // underscore car on n'utilise pas la variable
            let count = articles.length;
            articles.forEach((article, i) => {
                window.lib.getComments(article.id, (__, comments) => {
                    articles[i].comments = comments;
                    count--;
                    if(count === 0){
                        console.log(articles);
                    }
                });
            });
            // if(erreur){
            //     console.log(erreur);
            // }else{
            //     articles.forEach(articles => {
            //         window.lib.getComments(articles.id, (error, comments) => {
            //             if(error){
            //                 console.log(error);
            //             }else{
            //                 articles.comments = comments;
            //                 console.log(articles);
            //             }
            //         });
            //     });
            // }
        });
    });
})();
