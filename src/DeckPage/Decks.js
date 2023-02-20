import React, {useState, useEffect} from "react";
import {readDeck} from '../utils/api'
import DeckOverview from './DeckOverview'
import {useParams} from "react-router-dom"

function Decks(){
    //renders deckpage
    const [deck, setDeck] = useState([]);
    const [error, setError] = useState(undefined)

    const {deckId} = useParams()

    const handleDeleteLocal = (indexToDelete) => //index of card
    {
        console.log(indexToDelete, deck)
        //let currentDeckIndex = deck.findIndex((deck) => deck.id === deckId) //index of deck
        deck.cards = deck.cards.filter((deck, index) => index !== indexToDelete)
        setDeck((decks) =>
            decks = deck
    )
    }

    useEffect(() => {
        const abortController = new AbortController();
        console.log('hey',deckId)
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        console.log(deck)
        return () => abortController.abort();
    }, [deckId]);

    if (error){return (<div>Error</div>)}

    if(deck.length === 0){return <h1>Loading...</h1>}
    else{
        return(
        
            <div className = 'container'>
              <DeckOverview deck = {deck} deleteCardLocal = {() => handleDeleteLocal()}/>
            </div>
        )
    }
          
    

}

export default Decks