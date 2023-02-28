import React, {useState, useEffect} from 'react'
import EditCardForm from './EditCardForm'
import EditCardNav from './EditCardNav'
import {readDeck, readCard} from '../utils/api'
import {useParams} from 'react-router-dom'

function EditCard(){

    const [deck, setDeck] = useState(null)
    const [card, setCard] = useState(null)
    const [error, setError] = useState(undefined)

    const {deckId, cardId} = useParams()

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        readCard(cardId, abortController.signal).then(setCard).catch(setError);
        return () => abortController.abort();
    },[])

    if(error){return <div>Error</div>}
    if(!deck || !card){return <h1>Loading...</h1>}
    else{
        return (
            <div className = 'container'>
                <EditCardNav card = {card} deck = {deck} deckId = {deckId}/>
                <EditCardForm deckId = {deckId} card = {card} setCard = {setCard}/>
            </div>
        )
    }
}

export default EditCard