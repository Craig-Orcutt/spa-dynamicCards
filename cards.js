let createBtn = document.getElementById('create');
let textArea = document.getElementById('text');
let cardDiv = document.getElementById('card_div');

createBtn.addEventListener("click", function(){
    // create an element for the card to go into
    let card = document.createElement('div');
    // input text assigned
    let input = textArea.value;
    // create text node with value of the input
    let cardText = document.createTextNode(input);
    // add the text node to the new card div itself
    card.appendChild(cardText);
    // add the new "div" into the area on the DOM where the cards are
    let cardCreate = cardDiv.appendChild(card);
    // add the class to define the cards
    let borderCreate = card.classList.add('card-border');
    // create delete button
    let deleteBtn = document.createElement('button');
    // add text to delete button
    deleteBtn.innerHTML = 'delete';
    // add the delete button to the card
    card.appendChild(deleteBtn);
    // add EL that removes the card completely
    deleteBtn.addEventListener('click', function(){
        // removes the child which is the card div that was just created, from the Div that was written in the html
        cardDiv.removeChild(card);
    })
});
