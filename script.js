function setLang(lang){

document.querySelectorAll("[data-ua]").forEach(el=>{
el.innerText=el.dataset[lang]
})

}



let images=[]
let index=0

function openImage(img){

images=[...document.querySelectorAll(".gallery img")]

index=images.indexOf(img)

document.getElementById("viewer").style.display="flex"
document.getElementById("viewer-img").src=img.src

}

function closeImage(){

document.getElementById("viewer").style.display="none"

}

document.addEventListener("keydown",function(e){

if(e.key==="ArrowRight"){

index=(index+1)%images.length
document.getElementById("viewer-img").src=images[index].src

}

if(e.key==="ArrowLeft"){

index=(index-1+images.length)%images.length
document.getElementById("viewer-img").src=images[index].src

}

})
let startX=0

document.getElementById("viewer").addEventListener("touchstart",e=>{
startX=e.touches[0].clientX
})

document.getElementById("viewer").addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX

if(endX-startX>50){

index=(index-1+images.length)%images.length
viewerImg.src=images[index].src

}

if(startX-endX>50){

index=(index+1)%images.length
viewerImg.src=images[index].src

}

})
