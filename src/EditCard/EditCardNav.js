import React from 'react'

function EditCardNav({card, deck, deckId}){

     return (
        <div>
            <nav>
                <ul>
                    <li><a href = '/'>Home</a></li>
                    <li><a href={`/decks/${deckId}`}>Deck: {deck.name}</a></li>
                    <li>Currently Editing Card ID: {card.id}</li>
                </ul>
            </nav>
        </div>
     )


}

export default EditCardNav