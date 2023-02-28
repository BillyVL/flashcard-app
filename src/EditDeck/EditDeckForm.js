import React, {useState, useEffect} from 'react'
import {readDeck, updateDeck} from '../utils/api'
import { useHistory } from 'react-router-dom'

function EditDeckForm({deck}){

    const history = useHistory()
    const [error, setError] = useState()
    const [current, setCurrent] = useState({...deck})
    const [formData, setFormData] = useState({...current})

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deck.id, abortController.signal).then(setCurrent).catch(setError);
        return () => abortController.abort();
    }, [deck.id]);

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
        console.log('target ',target, 'formData ', formData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateDeck(formData)
        .then(setCurrent)
        .then((response) => history.push(`/decks/${deck.id}`))
        .catch(setError) 

    }

    if (error){return <h1>Error</h1>}
    else{
    return (
        <div className = 'container'>
            <h1>Edit Deck</h1>
            <form onSubmit = {handleSubmit}>

                <div className = 'form-container'>
                    <label htmlFor='name'>Name</label>
                    <input className = 'form-info'
                        name='name' value={formData.name} onChange={handleChange}>
                    </input>
                </div>

                <div className = 'form-container'>
                    <label htmlFor='description'>Description</label>
                    <textarea className = 'form-info'
                        name='description' value={formData.description} onChange={handleChange}>
                    </textarea>
                </div>

                <a href={`/decks/${deck.id}`}>Cancel</a>
                <button className = 'submit-btn' type = 'submit'>Submit</button>
            </form>
        </div>

    )
    }
    
    
}

export default EditDeckForm