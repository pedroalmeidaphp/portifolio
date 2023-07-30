let header= document.getElementById('header')
window.addEventListener('scroll', ()=>{
    if(window.scrollY>=200){
        header.style.background = '#191919'
    }else{
        header.style.background= 'transparent'
    }
})

function redirectToLink() {
    // Obtenha o elemento "a" dentro da div com a classe "button"
    const linkElement = document.querySelector(".button a");

    // Obtenha o valor do atributo "href" do link
    const linkURL = linkElement.getAttribute("href");

    // Redirecione para a URL do link em uma nova guia
    window.open(linkURL, "_blank");
}

