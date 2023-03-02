import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import StudyNav from './StudyNav'
import StudyView from './StudyView'
import { readDeck } from '../utils/api'



function Study(){

    const [deck, setDeck] = useState([])
    const [error, setError] = useState(undefined)
    const {deckId} = useParams()

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();
    }, [deckId]);

    if(error){return <h1>Error</h1>}

    if(deck.length === 0){return <h1>Loading...</h1>}
    else{
        return(
            <div className = 'container'>
                <h1>Study: {deck.name}</h1>
                <StudyNav deck={deck}/>
                <StudyView deck={deck}/>
            </div>
        )
    }


}

export default Study