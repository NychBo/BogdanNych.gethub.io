function setLang(lang){

document.querySelectorAll("[data-ua]").forEach(el=>{
el.innerText=el.dataset[lang]
})

}
