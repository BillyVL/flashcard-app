import React from 'react'

function EditCardNav({card, deck, deckId}){


     return (
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href={`/decks/${deckId}`}>Deck: {deck.name}</a></li>
            <li class="breadcrumb-item active" aria-current="page">Editing Card: {card.id}</li>
        </ol>
    </nav>
     )


}

export default EditCardNav