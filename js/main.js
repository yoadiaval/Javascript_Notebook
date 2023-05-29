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


document.querySelectorAll("aside li").forEach((item)=>{
  item.addEventListener('click', ()=>{
   item.classList.add("active")
  })
})

const btnCopy = document.querySelectorAll(".btn_copy")
btnCopy.forEach((item)=>{
    item.addEventListener('click', function(){
       let contentToCopy = item.previousElementSibling.innerText;
       //se cra un input auxiliar con el atributo value configurado con "contentToCopy"
       var aux = document.createElement("input");
       aux.setAttribute("value", contentToCopy);
       document.body.appendChild(aux);
       aux.select();
       document.execCommand("copy");
       document.body.removeChild(aux);

       this.innerText  = "Copiado";
       this.style.backgroundColor = "green";
       
       //alert("codigo copiado...")

    })
})