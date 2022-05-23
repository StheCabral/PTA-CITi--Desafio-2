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

//Adiciona um eventListener no DOM Object "Window" que recebe como parametros o evento "keydown" 
//para identificar quando uma tecla for pressionada no teclado e também recebe uma arrow function
//que está sendo declarada, a qual, por sua vez, recebe o parametro "event" que representa o keyboardEvent 
window.addEventListener("keydown", (event) => {
    //Variável que guarda o atributo "key" que retorna o valor da tecla pressionada no keyboardEvent
    const key  = event.key;

    //Verifica se a tecla pressionada no keyboardevent corresponde a alguma daquelas declaradas no array keysAvaible. 
    //obtem-se essa verificação através do método some que varre o array executando uma arrow function que
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        //compara cada valor do array ao valor da variável key e guarda a conclusão em boolean na variável keyPressedAvaiable
        return currentKey === key;
    })

    //Estrutura condicional, caso a tecla pressionada pelo usuário não seja nenhuma das esperadas a função retornará vazia,
    //o que acontecerá caso keyPressedAvailble retorne false
    if(!keyPressedAvaiable) return;

    //Usa o método forEach para executar a arrow function em cada elemento do array "directions"
    directions.forEach((direction) => {
        //Estrutura condiiconal, caso o HTML Element de class "character" tenha também outra classe listada que corresponda 
        //a uma daquelas declaradas em "directions", essa será removida de sua classlist
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    //Estrutura condicional, caso a tecla pressionada seja a seta para cima
    if(key === "ArrowUp"){
        //Será adicionada a class ".turnUp" ao HTML Element "character" no index.html
        character.classList.add("turnUp");
        //E será diminuído 10 pixeis da posição vertical do elemento na página
        yPosition -= VELOCITY;
    }
    //Estrutura condicional, caso a tecla pressionada seja a seta para baixo
    if(key === "ArrowDown"){
        //Será adicionada a class ".turnDown" ao HTML Element "character" no index.html
        character.classList.add("turnDown");
        //E será adicionado 10 pixeis na posição vertical do elemento na página
        yPosition += VELOCITY;
    }
    //Estrutura condicional, caso a tecla pressionada seja a seta para esquerda
    if(key === "ArrowLeft"){
        //Será adicionada a class ".turnLeft" ao HTML Element "character no index.html
        character.classList.add("turnLeft");
        //E será diminuído 10 pixeis da posição horizontal do elemento na página
        xPosition -= VELOCITY;
    }
    //Estrutura condicional, caso a tecla pressionada seja a seta para direita
    if(key === "ArrowRight"){
        //Será adicionada a class ".turnRight" ao HTML Element "character no index.html
        character.classList.add("turnRight");
         //E será adicionado 10 pixeis da posição horizontal do elemento na página
        xPosition += VELOCITY;
    }

    //Estrutura condicional, caso o valor obtido para posição vertical do elemento esteja entre 0 e a altura máxima da janela
    if(yPosition > 0 && yPosition < WINDOW_HEIGHT){
        //então a posição do limite superior do elemento é aleterada pela variável yPosition
        containerCharacter.style.top = `${yPosition}px`;
    }
    //Estrutura condicional, caso o valor obtido para posição horizontal do elemento esteja entre 0 e a largura máxima da janela
    if(xPosition > 0 && xPosition < WINDOW_WIDTH){
        //então a posição do limite esquerdo do elemento é aleterada pela variável xPosition
        containerCharacter.style.left = `${xPosition}px`
    }
    
});
