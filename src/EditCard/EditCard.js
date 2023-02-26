import React, {useState, useEffect} from 'react'
import EditCardForm from './EditCardForm'
import {readDeck, readCard} from '../utils/api'
import {useParams} from 'react-router-dom'

function EditCard(){

    const [deck, setDeck] = useState([])
    const [card, setCard] = useState([])
    const [error, setError] = useState(undefined)

    const {deckId, cardId} = useParams()

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        readCard(cardId, abortController.signal).then(setCard).catch(setError);
        return () => abortController.abort();
    },[])

    if(error){return <div>Error</div>}
    if(deck.length === 0 || card.length === 0){return <h1>Loading...</h1>}
    else{
        return (
            <div className = 'container'>
                <EditCardForm deckId = {deckId} card = {card} setCard = {setCard}/>
            </div>
        )
    }
}

export default EditCard