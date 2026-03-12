let currentIndex = 0
let images = []

function setLang(lang){

document.querySelectorAll("[data-ua]").forEach(el=>{
el.innerText = el.dataset[lang]
})

}

function openViewer(img){

images = Array.from(document.querySelectorAll(".gallery img"))

currentIndex = images.indexOf(img)

document.getElementById("viewer").style.display="flex"

document.getElementById("viewer-img").src = img.src

}

function closeViewer(){

document.getElementById("viewer").style.display="none"

}

function nextImg(){

currentIndex++

if(currentIndex >= images.length){
currentIndex = 0
}

document.getElementById("viewer-img").src = images[currentIndex].src

}

function prevImg(){

currentIndex--

if(currentIndex < 0){
currentIndex = images.length-1
}

document.getElementById("viewer-img").src = images[currentIndex].src

}
