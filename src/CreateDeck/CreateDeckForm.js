import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {createDeck} from '../utils/api'


function CreateDeckForm(){
    const initialFormState = {name: "", description: ""}
    const [formData, setFormData] = useState({...initialFormState})
    const [error, setError] = useState()
    const history = useHistory()

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
        console.log('target ',target, 'formData ', formData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createDeck(formData)
        .then((response) => history.push(`/decks/${response.id}`))
        .catch(setError) 

    }

    if (error){return <h1>Error</h1>}

    return (
        <div className = 'container'>
            <h1>Deck Creation</h1>
            <form onSubmit = {handleSubmit}>

                <div className = 'form-container'>
                    <label htmlFor='card-front'>Front</label>
                    <input className = 'form-info'
                        name='name' placeholder = 'Name' value={formData.name} onChange={handleChange}>
                    </input>
                </div>

                <div className = 'form-container'>
                    <label htmlFor='card-back'>Back</label>
                    <textarea className = 'form-info'
                        name='description' placeholder = 'Description' value={formData.description} onChange={handleChange}>
                    </textarea>
                </div>

                <a href={`/`}>Cancel</a>
                <button className = 'submit-btn' type = 'submit'>Submit</button>
            </form>
        </div>

    )
    
    
}

export default CreateDeckForm