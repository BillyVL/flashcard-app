import React, {useState, useEffect} from 'react'
import { readDeck, createCard } from '../utils/api'

function AddCardForm({deck}){

    const [currentDeck, setCurrentDeck] = useState({...deck})
    const initialFormState = { front: "", back: "", deckId: deck.id}
    const [formData, setFormData] = useState({...initialFormState})
    const [error, setError] = useState(undefined)

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deck.id, abortController.signal).then(setCurrentDeck).catch(setError);
        return () => abortController.abort();
    }, [deck.id]);

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
             [target.name]: target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createCard(deck.id, formData)
        .then(setFormData({...initialFormState}))
        .catch(setError);
    }

    if (error) {return <h1>Error</h1>}
    if (deck.length === 0){return <h1>Loading...</h1>}
    else{

    return(
    <div className = 'container'>
        <h1>Adding Card to {deck.name}</h1>
        <form onSubmit={handleSubmit}>

            <div className = 'form-container'>
                <label htmlFor='front'>Front</label>
                <textarea className = 'form-info'
                    name='front' placeholder = 'Front side of card' value={formData.front} onChange={handleChange}>
                </textarea>
            </div>

            <div className = 'form-container'>
                <label htmlFor='back'>Back</label>
                <textarea className = 'form-info'
                    name='back' placeholder = 'Back side of card' value={formData.back} onChange={handleChange}>
                </textarea>
            </div>
            <a href={`/decks/${deck.id}`} className="btn btn-secondary">Done</a>
            <button className = 'btn btn-primary' type='submit'>Save</button>

        </form>

    </div>
    )
    }
}



export default AddCardForm