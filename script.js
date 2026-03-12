function setLang(lang){

document.querySelectorAll("[data-ua]").forEach(el=>{

el.innerText=el.dataset[lang]

})

}

function openImage(img){

document.getElementById("viewer").style.display="flex"

document.getElementById("viewer-img").src=img.src

}

function closeImage(){

document.getElementById("viewer").style.display="none"

}
