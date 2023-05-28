import arrChallenges from "./challengesMaker.js";

//Agregar listado de retos al aside
const content = arrChallenges.map((item)=>{
    return `<a href="${item.url}">${item.title}</a><span>${item.level}</span>`
})

content.forEach((item)=>{
    const ul_list_challenges = document.querySelector(".challenges_list");
    const li = document.createElement("li");
          li.setAttribute("class", "list");
          li.innerHTML = item;
    
    ul_list_challenges.append(li)
})




const prueba = document.getElementsByClassName("levelPage");
console.log(prueba)