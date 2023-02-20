//renders deck
//buttons: edit, study, add, delete

//will display deck with description, buttons: view, study, delete (link)
import React from "react";
//import DeleteDeck from './DeckList'
import { deleteDeck } from "../utils/api";
import {useRouteMatch, useParams} from 'react-router-dom'
import CardView from './CardView'

//make buttons

function DeckOverview({deck, deleteCardLocal}){
    const {deckId} = useParams(); // TODO: This ID will need to be pulled from parameters.
    const {url, path} = useRouteMatch();
    console.log(deck)
  //handle delete
  const handleDelete = async () =>
  {
    await deleteDeck(deck.id)   
  }

  const handleDeleteLocal =  (index) =>
  {
    console.log('yoo', index)
  

  }


  const cardList = (deck.cards).map((card, index)=> 
  <CardView card={card}
            key={index}
            url={url}
            deleteCardLocal = {() => deleteCardLocal(index)}
            />)

    return (
    <div className = 'container'>
        <div className='card'>
            <div className = 'card-body'>
            <h1 className = 'card-title'>{deck.title}</h1>
                <p className = 'card-desc'>{deck.description}</p>
                <a className="view-btn" href={`/decks/${deck.id}/edit`}>Edit</a> 
                <a className="study-btn" href={`/decks/${deck.id}/study`}>Study</a>
                {/* <button className="delete-btn" onClick={handleDelete}>Delete</button> */}
            </div>
        </div>
        <h2>Cards</h2>
        {cardList}
    </div>

    );


}

export default DeckOverview