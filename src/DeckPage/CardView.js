//renders one card
//where you can see the front/back of a card
//edit and delete card
import React from 'react'
import { deleteCard } from "../utils/api"

function CardView({card, url, deleteCardLocal}){

    const handleDelete = async () => 
    {
        await deleteCard(card.id)
        deleteCardLocal()
    }

    return (<div className = 'card'>
        <div className = 'card-body'>
           <p>{card.front}</p>
           <p>{card.back}</p>
        </div>
        <div className = 'card-footer'>
            <a href = {`${url}/cards/${card.id}/edit`}>Edit</a>
            <button className = 'delete-btn' onClick={handleDelete}>Delete</button>
        </div>
    </div>)
}

export default CardView