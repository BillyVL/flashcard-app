//renders deck
//buttons: edit, study, add, delete

//will display deck with description, buttons: view, study, delete (link)
import React from "react";
import { deleteDeck } from "../utils/api";
import {useRouteMatch} from 'react-router-dom'
import CardView from './CardView'

//make buttons

function DeckOverview({deck = {cards: []}, deleteCardLocalParent}){
    
    const {url} = useRouteMatch();
  //handle delete
  const handleDelete = async () =>
  {
    if(window.confirm("Delete this deck?\nYou will not be able to recover it.")) {
      await deleteDeck(deck.id)   
    }
  }

  function handleDeleteLocal(cardId) {
    deleteCardLocalParent(cardId)
  }

  const cardList = (deck.cards)?.map((card, index)=> 
  <CardView card={card}
            key={index}
            url={url}
            deleteCardLocal = {() => handleDeleteLocal(index)}
            />)

    return (
    <div className = 'container'>
        <div className='card'>
            <div className = 'card-body'>
            <h1 className = 'card-title'>{deck.name}</h1>
                <p className = 'card-desc'>{deck.description}</p>
                <a className="add-btn btn-primary" href={`${url}/cards/new`}>+ Add Cards</a>
                <a className="view-btn"  href={`/decks/${deck.id}/edit`}>Edit</a> 
                <a className="study-btn btn-secondary" href={`/decks/${deck.id}/study`}>Study</a>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
        </div>
        <h2>Cards</h2>
        {cardList}
    </div>

    );


}

export default DeckOverview