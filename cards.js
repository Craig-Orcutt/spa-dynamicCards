let createBtn = document.getElementById('create');
let textArea = document.getElementById('text');
let cardDiv = document.getElementById('card_div');

createBtn.addEventListener("click", function(){
    let input = textArea.value;
    let card = document.createElement('div');
    let cardText = document.createTextNode(input);
    let cardCreate = card.appendChild(cardText).split();
    
    cardDiv.innerHTML += cardCreate;

})