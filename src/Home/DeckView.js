//will display deck with description, buttons: view, study, delete (link)
import React from "react";

import {useHistory} from "react-router-dom";
import { deleteDeck } from "../utils/api";

//make buttons

function DeckView({deck = { cards: [] }, deleteDeckLocal}){

  const history = useHistory()

  //handle delete
  const handleDelete = async () =>
  {
    await deleteDeck(deck.id)
    deleteDeckLocal()
    history.push('/')

  }

    return (

      <div className='card'>
        <div className = 'card-body'>
        <h6 className="card-subtitle text-muted">{deck.cards.length} cards</h6>
          <p className = 'card-title'>{deck.name}</p>
            <p className = 'card-desc'>{deck.description}</p>
            <a className="view-btn" href={`/decks/${deck.id}`}>View</a> 
            <a className="study-btn" href={`/decks/${deck.id}/study`}>Study</a>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>

    );


}

export default DeckView