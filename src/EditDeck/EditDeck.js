import React, {useState, useEffect} from 'react'
import EditDeckForm from './EditDeckForm'
//import EditCardCrumb from './EditCardCrumb'
import {readDeck} from '../utils/api'
import {useParams} from 'react-router-dom'

function EditDeck(){

    const [deck, setDeck] = useState(null)
    const [error, setError] = useState(undefined)

    const {deckId} = useParams()

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();
    },[deckId])

    if(error){return <div>Error</div>}
    if(!deck){return <h1>Loading...</h1>}
    else{
        return (
            <div className = 'container'>
                <EditDeckForm deck = {deck}/>
            </div>
        )
    }
    
}

export default EditDeck