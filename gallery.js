const images=document.querySelectorAll(".gallery-item img");

const lightbox=document.querySelector(".lightbox");

const preview=document.getElementById("preview");

const close=document.querySelector(".close");

const prev=document.querySelector(".prev");

const next=document.querySelector(".next");

let current=0;

function show(index){

current=index;

preview.src=images[index].src;

lightbox.classList.add("show");

}

images.forEach((img,index)=>{

img.onclick=()=>show(index);

});

close.onclick=()=>{

lightbox.classList.remove("show");

}

lightbox.onclick=e=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

}

next.onclick=()=>{

current++;

if(current>=images.length){

current=0;

}

preview.src=images[current].src;

}

prev.onclick=()=>{

current--;

if(current<0){

current=images.length-1;

}

preview.src=images[current].src;

}

document.addEventListener("keydown",e=>{

if(!lightbox.classList.contains("show")) return;

if(e.key==="Escape"){

lightbox.classList.remove("show");

}

if(e.key==="ArrowRight"){

next.click();

}

if(e.key==="ArrowLeft"){

prev.click();

}

});