const all = document.getElementById("btn-all");
const easy = document.getElementById("btn-easy");
const medium = document.getElementById("btn-medium");
const high = document.getElementById("btn-high");

const arrBtn = [all, easy,medium, high];
const lista = document.getElementById("challenges_list");


lista.childNodes.forEach((item)=>{
     if(item.childNodes[1].innerText === "easy"){
        item.childNodes[1].style.color = "#5cb85c"
     }
     if(item.childNodes[1].innerText === "medium"){
        item.childNodes[1].style.color = "#f0ad4e"
     }
     if(item.childNodes[1].innerText === "high"){
        item.childNodes[1].style.color = "#d9534f"
     }
});

arrBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      lista.childNodes.forEach((item)=>{
            if(btn.getAttribute("id") === "btn-easy") {
               if( item.childNodes[1].innerText !== "easy"){
                item.classList.add("filtro")
               }else{
                item.classList.remove("filtro")
               }
                
            }else if(btn.getAttribute("id") === "btn-medium") {
                if( item.childNodes[1].innerText !== "medium"){
                    item.classList.add("filtro")
                   }else{
                    item.classList.remove("filtro")
                   }
                   
            }else if(btn.getAttribute("id") === "btn-high") {
                if( item.childNodes[1].innerText !== "high"){
                    item.classList.add("filtro")
                   }else{
                    item.classList.remove("filtro")
                   }
                   
            }else{ 
                item.classList.remove("filtro")
            }
                
      });
    });
    
})


