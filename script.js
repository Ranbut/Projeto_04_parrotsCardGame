let imgParrots = [
    "./assets/bobrossparrot.gif",
    "./assets/explodyparrot.gif",
    "./assets/fiestaparrot.gif",
    "./assets/metalparrot.gif",
    "./assets/revertitparrot.gif",
    "./assets/tripletsparrot.gif",
    "./assets/unicornparrot.gif"
];

let countPlay = 0;
let countCorrect = 0;
let cardsTurned = [];
let finish = 0;
let statusGame = 0;
let selected = [];

function createCards(count){
    sortCards(count);

    while(selected.length !== 0){
        let card = document.createElement("li");

        card.setAttribute("onclick","clickCard(this)");

        let imgCard = document.createElement("img");

        let randomIndex = Math.floor(selected.length * Math.random());
        
        let urlRandom = selected[randomIndex];
        imgCard.setAttribute("src", urlRandom);
        
        selected.splice(randomIndex,1);

        imgCard.style.display = "none";

        card.appendChild(imgCard);
        let ul = document.querySelector(".cards");
        ul.appendChild(card);
    };
}

function sortCards(count){
    for(let i = 0; i < count/2; i++){
        let randomIndex = Math.floor(imgParrots.length * Math.random());
        selected.push(imgParrots[randomIndex]);
        selected.push(imgParrots[randomIndex]);
        imgParrots.splice(randomIndex,1);
    }
}

function startBegin(){
    let inputCount = parseInt(prompt("Escolha quantas cartas você quer jogar? \n Escolha um nº entre 4 e 14"));

    while((inputCount % 2 !== 0) || (inputCount < 4) || (inputCount > 14)){
        inputCount = parseInt(prompt("Só pode um nº par entre 4 e 14. Com quantas cartas você deseja?"));
    }

    let widthGame = ((inputCount / 2) * 150);
    let ul = document.querySelector(".cards");
    ul.style.width = widthGame + "px";

    createCards(inputCount);
    statusGame = 0;
    finish = inputCount;
}
startBegin();

function endGame(){
    statusGame = 1;
    setTimeout(function(){
        alert("Você ganhou o jogo!");
        restartGame();
    }, 500);
}

function restartGame(){
    let input = prompt("Você deseja reiniciar o jogo?");

    while(input !== "sim"){
        input = prompt("Para reiniciar o jogo, digite (sim) em minúsculo");
    };
    
    resetVar();
    startBegin();
}

function clickCard(element){
    cardsTurned.push(element);

    if(cardsTurned.length < 3){
        turnAnimation(element,"rotateY(180deg)","none","initial");
        countPlay++;

        if(cardsTurned.length === 2){
            secondCard();
        };

        if(countCorrect === finish){
            endGame();
            statusGame = 1;
        };
    };
}

function secondCard(){
    let card1 = pickSrcImg(0);
    let card2 = pickSrcImg(1);
    
    let equal = isEqual(card1,card2);

    if(equal === true){
        cardsTurned = [];
        countCorrect +=2;
    }else if (equal === false){
        setTimeout(function () {
            turnAnimation(cardsTurned[0],"rotateY(0deg)","url(assets/back.png)","none");
            turnAnimation(cardsTurned[1],"rotateY(0deg)","url(assets/back.png)","none");
            cardsTurned = [];
        }, 1000);
    }
}

function resetVar(){
    let ul = document.querySelector(".cards");
    ul.innerHTML = "";
    
    imgParrots = [
        "assets/bobrossparrot.gif",
        "assets/explodyparrot.gif",
        "assets/fiestaparrot.gif",
        "assets/metalparrot.gif",
        "assets/revertitparrot.gif",
        "assets/tripletsparrot.gif",
        "assets/unicornparrot.gif"
    ];

    countPlay = 0;
    countCorrect = 0;
    cardsTurned = [];
    selected = [];
    statusGame = "";
}

function pickSrcImg(index){
    let card = cardsTurned[index].querySelector("img");
    let parrot = card.getAttribute("src");
    return parrot;
}

function isEqual(val1,val2){
    if(val1 === val2)
        return true;
    else
        return false;
}

function turnAnimation(element,rotation,backgroundImg,display){
    let img = element.querySelector("img");
    img.style.display = display;
    element.style.transform = rotation;
    element.style.backgroundImage = backgroundImg;
}