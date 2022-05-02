
//   import {navbar} from '../components/navbar.js';
// document.getElementById('navbar').innerHTML =navbar();

// let key = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

// let value=localStorage.getItem("news");


// //let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${key}`

// let url=`https://masai-mock-api.herokuapp.com/news?q=${value}`

// let res=  await getdata(url);
// console.log(res.results);

// let p =  document.getElementById("results");


// append_data=(res.results,p);


import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();




let searchNews = async (value) => 
{
    try 
    {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)

        let data = await res.json();
        console.log('data: ', data.articles);

        return data;
    }
    catch(err)
    {
        console.log('err:', err);
    }
}

let append = (data, container) => 
{
    data.forEach(({ description,title, urlToImage }) =>
    {
        let div = document.createElement('div');

        let image = document.createElement('img');
        image.setAttribute('class','img')
        image.src = urlToImage;

        let titl = document.createElement('h3');
        titl.innerText = title;

        let desc = document.createElement('p');
        desc.innerText = description;

        div.append(image, title, desc);
        container.append(div);

    })
    localStorage.setItem('news',JSON.stringify(data));
}
