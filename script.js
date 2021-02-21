let time = 5; //tempo em segundo
let currentImageIndex = 0; // imagem que esta acontecendo no momento
let images = document.querySelectorAll("#capa img"); // selecionando todas imagens presentes na div.
let max = images.length; // maximo de imagem

function loopImage(){

    images[currentImageIndex].classList.remove("selected") // removendo a class selected

    currentImageIndex++

    if(currentImageIndex >= max){
        currentImageIndex = 0; //resetando o array
    }

    images[currentImageIndex].classList.add("selected") // adicionando a class selected
    
}

function start(){
    
    setInterval(() => {
        //troca de imagem
        loopImage();
    }, time * 1000);

}

window.addEventListener("load", start()) // toda vez que a janela for carregada vai usar a função