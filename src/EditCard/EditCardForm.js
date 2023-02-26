import React, {useState} from 'react'
import {updateCard} from '../utils/api'


function EditCardForm({deckId, card, setCard}){

    const [formData, setFormData] = useState({...card})
    const [error, setError] = useState()
    //const history = useHistory()

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
        console.log('target ',target, 'formData ', formData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateCard(formData)
        .then(setCard)
        .catch(setError)
    }

    if (error){return <h1>Error</h1>}

    return (
        <div className = 'container'>
            <h1>Edit Card</h1>
            <form onSubmit = {handleSubmit}>

                <div className = 'form-container'>
                    <label htmlFor='card-front'>Front</label>
                    <input className = 'form-info'
                        name='card-front' value={formData.front} onChange={handleChange}>
                    </input>
                </div>

                <div className = 'form-container'>
                    <label htmlFor='card-back'>Back</label>
                    <textarea className = 'form-info'
                        name='card-back' value={formData.back} onChange={handleChange}>
                    </textarea>
                </div>

                <a href={`/decks/${deckId}`}>Cancel</a>
                <button className = 'submit-btn' type = 'submit'>Submit</button>
            </form>
        </div>

    )
    
    
}

export default EditCardForm