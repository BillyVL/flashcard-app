import React, {useState, useEffect} from "react";
import DeckView from './DeckView'
import {listDecks} from '../utils/api'
//create and set decks
//map function for decks
//delete will be passed to view

/*
There are several utility functions exported from src/utils/api/index.js that allow you to perform create, read, update, and delete operations with the API server. You will need to select and use the appropriate functions in your React components.

Note that the updateDeck(), readDeck(), and listDecks() functions call the API server using URLs that include a query string of _embed=cards. The results of the API calls for these functions will contain both the deck and the cards associated with the deck, so you won't have to make additional API calls to load the cards for each deck when you use these functions.

Please read the documentation in the file for more information.
*/


function DeckList(){

    const [decks, setDecks] = useState([]);
    const [error, setError] = useState(undefined)

    useEffect(() => {
      
      const abortController = new AbortController();
        listDecks(abortController.signal)
        .then(setDecks)
        .catch(setError);
        
        return () => abortController.abort();
    }, []); 

    if (error){return (<div>Error</div>)}


    const deleteDeck = (indexToDelete) =>
      setDecks((currentDeck) =>
      currentDeck.filter((deck, index) => index !== indexToDelete)
    );

    const list = decks.map((deck, index) =>
      <DeckView deck = {deck} 
      deleteDeckLocal = {() => deleteDeck(index)}
      key = {deck.id}
      />)
          
    return(
        
        <div className = 'container'>
          <a className = 'createDeck-btn' href='decks/new'>+ Create Deck</a>
          <div>{list}</div>
        </div>
    )


}

export default DeckList