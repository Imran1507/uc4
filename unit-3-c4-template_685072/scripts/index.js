// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from '../components/navbar.js';


document.getElementById('navbar').innerHTML =navbar();

const url ="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";

let results_div = document.getElementById("results");


fetch(url)

.then(function(res){
    return res.json();
})
.then(function(res){
    append(res.articles);
    console.log(res);
}) 
.catch(function(err){
console.log(err);
});
function append(data)

{
    console.log(data);
    results_div.innerHTML=null;
    data.forEach(function(elem){


        let div=document.createElement("div");

        let image=document.createElement("img");
       
        image.style.width="60%";
        image.src=elem.urlToImage;

        image.setAttribute="image";
        
        let p = document.createElement("p");
        p.innerText=elem.title;
      
      
        div.append(image,p);
        results_div.append(div);
        console.log(result)
    });
}




