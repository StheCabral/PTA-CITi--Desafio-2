//Atribuindo um elemento do DOM (imagem do personagem) à variável character através de um seletor, pela classe
const character = document.getElementsByClassName("character")[0];
//Atribuindo um elemento do DOM (div da imagem) à variável character através de um seletor, pela classe
const containerCharacter = document.getElementsByClassName("container-character")[0];

//Declarando a velocidade com que o personagem irá se mover a cada tecla
const VELOCITY = 10;

//Variável que representa o espaço horizontal disponível para movimentação do personagem
const WINDOW_WIDTH = window.innerWidth - 100;
//Variável que representa o espaço vertical disponível para movimentação do personagem
const WINDOW_HEIGHT = window.innerHeight - 100;
//Em ambas acima substitui do objeto screen por window e subtrai do tramanho character para aumentar a precisão da medida

//Variáveis mutáveis que representam a posição do character na página, analogamente ao plano cartesiano:
//Esse seria o X do par ordenado
let xPosition = 500;
//Esse seria o Y do par ordenado
let yPosition = 300;

//Array contendo os possíveis eventos a serem recebidos através das setas do teclado
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
//Array contendo as classes que podem ser ativadas no documento CSS a depender do evento recebido
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp"){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown"){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft"){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight"){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    if(yPosition > 0 && yPosition < WINDOW_HEIGHT){
        containerCharacter.style.top = `${yPosition}px`;
    }
    
    if(xPosition > 0 && xPosition < WINDOW_WIDTH){
        containerCharacter.style.left = `${xPosition}px`
    }
    
});
