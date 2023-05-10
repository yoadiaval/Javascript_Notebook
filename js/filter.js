const all = document.getElementById("btn-all");
const easy = document.getElementById("btn-easy");
const medium = document.getElementById("btn-medium");
const high = document.getElementById("btn-high");
const lista = document.getElementById("challenges_list");

for(let i=1; i<lista.childNodes.length; i+=2){
    if(lista.childNodes[i].childNodes[1].textContent == "easy"){
    lista.childNodes[i].childNodes[1].style.color="#5cb85c";
    }else if(lista.childNodes[i].childNodes[1].textContent == "medium"){
        lista.childNodes[i].childNodes[1].style.color="#f0ad4e";
    }else {
        lista.childNodes[i].childNodes[1].style.color="#d9534f";
    }
}


all.addEventListener('click', ()=>{
    for(let i=1; i<lista.childNodes.length; i+=2){
       
            lista.childNodes[i].classList.remove('filtro')
        
    }
});

easy.addEventListener('click', ()=>{
    for(let i=1; i<lista.childNodes.length; i+=2){
        if(lista.childNodes[i].childNodes[1].textContent!=="easy"){
            lista.childNodes[i].classList.add('filtro')
        }else{
            lista.childNodes[i].classList.remove('filtro')
        }
     }
   
});


medium.addEventListener('click', ()=>{
    for(let i=1; i<lista.childNodes.length; i+=2){
        if(lista.childNodes[i].childNodes[1].textContent!=="medium"){
            lista.childNodes[i].classList.add('filtro')
        }else{
            lista.childNodes[i].classList.remove('filtro')
        }
     }
});

high.addEventListener('click', ()=>{
    for(let i=1; i<lista.childNodes.length; i+=2){
        if(lista.childNodes[i].childNodes[1].textContent!=="high"){
            console.log(`añadido ${lista.childNodes[i].childNodes[1].textContent}`)
            lista.childNodes[i].classList.add('filtro')
        }else{
            lista.childNodes[i].classList.remove('filtro')
            console.log(`removido ${lista.childNodes[i].childNodes[1].textContent}`)
        }
     }
});







