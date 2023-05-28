import arrChallenges from "./challengesMaker.js";

const ul = document.querySelector(".levelPage")

arrChallenges.forEach((item)=>{
    let content_e, content_m, content_h;  
    if(item.level==="easy" && ul.getAttribute("id")==="easyPage"){
        content_e = `<li><a href="${item.url}">${item.title}</a></li>`;
        ul.innerHTML += content_e;
    }else if(item.level==="medium" && ul.getAttribute("id")==="mediumPage"){
        content_m += `<li><a href="${item.url}">${item.title}</a></li>`;
        ul.innerHTML += content_m;
    }else if(item.level==="hight" && ul.getAttribute("id")==="hightPage"){
        content_h += `<li><a href="${item.url}">${item.title}</a></li>`;
        ul.innerHTML += content_h;
    }
})


