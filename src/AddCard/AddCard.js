import React, {useEffect, useState} from 'react'
import { readDeck } from '../utils/api/index'
import { useParams } from 'react-router-dom'
import AddCardNav from './AddCardNav'
import AddCardForm from './AddCardForm'


function AddCard(){

    const [deck, setDeck] = useState({})
    const [error, setError] = useState(undefined)
    const {deckId} = useParams()

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();
    }, [deckId]);

    if (error) {
        return <h1>Error</h1>
    }

    if(!deck.id){return <h1>Loading...</h1>}
    else{
        return (
            <div>
                <AddCardNav deck={deck} />
                <AddCardForm deck={deck} />
            </div>
        )
    }


}


export default AddCard



