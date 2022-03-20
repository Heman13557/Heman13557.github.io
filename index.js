
let toggle = document.querySelector(".switch");

let bod = document.querySelector("body");
let sww = document.querySelector(".switch input");
const toggleA  = document.querySelector(".bars");
const navA = document.querySelector(".nav-links");

toggleA.addEventListener('click',()=>{
    console.log("F");
    navA.classList.toggle("active");
    
})
toggle.addEventListener("click", function(){
   
 
 if(sww.checked==true){
        bod.style.background = "white";
        bod.style.color = "black";
        
        document.documentElement.style.setProperty('--coll', 'black');
        document.documentElement.style.setProperty('--bla', 'white');
        document.documentElement.style.setProperty('--pri', 'rgb(47, 47, 255)');
      




 }
 else{
    bod.style.background = "black";
    bod.style.color = "white";
    document.documentElement.style.setProperty('--coll', 'white');
    document.documentElement.style.setProperty('--bla', 'black');
    document.documentElement.style.setProperty('--pri', '#FF7B00');
    


 }


})

const text = document.querySelector(".header");
const strText = text.textContent;
const splitText = strText.split("")
text.textContent = ""

for(let i=0; i<splitText.length; i++)
{
   text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char=0;
let timer = setInterval(onTick,50);

function onTick(){
   const span = text.querySelectorAll('span')[char];
   span.classList.add('fade');
   char++;
   if(char === splitText.length){
      complete();
      return
   }
}

function complete(){
   clearInterval(timer);
   timer = null;
}
