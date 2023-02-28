import React from 'react'

function EditDeckNav({deck}){

    return (
        <div>
            <nav>
                <ul>
                    <li><a href = '/'>Home</a></li>
                    <li><a href={`/decks/${deck.id}`}>Deck: {deck.name}</a></li>
                </ul>
            </nav>
        </div>
     )




}

export default EditDeckNav