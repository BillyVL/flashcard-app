import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'


function StudyView({deck}){

    const [cardID, setCardID] = useState(1)
    const [flip, setFlip] = useState(false)
    const [card, setCard] = useState({})
    const history = useHistory()


    const cards = deck.cards
    useEffect(() => {
        const abortController = new AbortController();
        setCard({...cards[cardID-1]});
        return () => abortController.abort();
    }, [cardID])

    const handleFlip = () => {
        if(flip === true){setFlip(false)}
        if(flip === false){setFlip(true)}
    }

    const handleNext = () => {
        setCardID(cardID + 1)
        setFlip(false)
    }

    if (flip === true && cardID === cards.length){
        if(window.confirm("Restart cards? \n Click 'cancel' to return to the home page.")){
            setCardID(1)
            setFlip(false)
        }
        else{
            history.push('/')
        }
    }

    if(cards.length===0){return <h1>Loading...</h1>}

    if (cards.length < 3){
        return(
            <div>
                <h1>Not enough cards.</h1>
                <p>You need at least 3 cards to study. There are {cards.length} in this deck.</p>
                <a href={`/decks/${deck.id}/cards/new`} className="btn btn-primary">+ Add Cards</a>
            </div>
        )
    }
    else{
        return (
            <div>
                <h2>Card {cardID} of {cards.length}</h2>
                {flip ? (<p>{card.back}</p>) : (<p>{card.front}</p>)}

                <button onClick={handleFlip}>Flip</button>
                    { (<button onClick={handleNext}>Next</button>)}
            </div>
            
        )
    }

}

export default StudyView