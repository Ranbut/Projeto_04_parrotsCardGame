let imgParrots = [
    "./assets/bobrossparrot.gif",
    "./assets/explodyparrot.gif",
    "./assets/fiestaparrot.gif",
    "./assets/metalparrot.gif",
    "./assets/revertitparrot.gif",
    "./assets/tripletsparrot.gif",
    "./assets/unicornparrot.gif"
];


var countCorrect = 0;
var finish = 0;
var statusGame = -1; //-1 = Não iniciado, 0 = Jogando, 1 = Ganhou
var cardsTurned = [];
let selectedCards = [];
var selected = [];

function createCards(count){
    sortCards(count);

    while(selectedCards.length !== 0){
        let card = document.createElement("li");

        card.setAttribute('onclick','clickCard(this)');

        var imgCard = document.createElement('img');

        var randomIndex = Math.floor(selectedCards.length * Math.random());
        
        var urlRandom = selectedCards[randomIndex];
        imgCard.setAttribute('src', urlRandom);
        imgCard.setAttribute('draggable', "false");
        
        selectedCards.splice(randomIndex,1);

        imgCard.style.display = "none";

        card.appendChild(imgCard);

        var ul = document.querySelector(".cards");
        ul.appendChild(card);
    };
}

function sortCards(count){
    for(var i = 0; i < count/2; i++){
        var randomIndex = Math.floor(imgParrots.length * Math.random());
        selectedCards.push(imgParrots[randomIndex]);
        selectedCards.push(imgParrots[randomIndex]);
        imgParrots.splice(randomIndex,1);
    }
}

function clickCard(element){
    cardsTurned.push(element);

    if(cardsTurned.length < 3){
        //Virar carta

        if(cardsTurned.length === 2){
            //Virar outra
        };

        if(countCorrect === finish){
            //Se tiver todos terminar jogo
            statusGame = 1;
        };
    };
}