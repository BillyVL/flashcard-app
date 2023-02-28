import React, {useState, useEffect} from "react";
import {readDeck} from '../utils/api'
import DeckOverview from './DeckOverview'
import DeckNav from './DeckNav'
import {useParams} from "react-router-dom"

function Decks(){
    //renders deckpage
    const [deck, setDeck] = useState([]);
    const [error, setError] = useState(undefined)

    const {deckId} = useParams()

    const handleDeleteLocal = (indexToDelete) => //index of card
    {
        console.log(indexToDelete);
        console.log(deck);

        setDeck((deck) => deck.cards = deck.cards.filter((card, index) => index !== indexToDelete))
    }

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();
    }, [deckId, deck.cards?.length]);

    if (error){return (<div>Error</div>)}

    if(deck.length === 0){return <h1>Loading...</h1>}
    else{
        return(
        
            <div className = 'container'>
              <DeckNav deck = {deck} />
              <DeckOverview deck = {deck} deleteCardLocalParent = {handleDeleteLocal}/>

            </div>
        )
    }
          
    

}

export default Decks