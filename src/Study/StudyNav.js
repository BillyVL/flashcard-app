import React from 'react'

function StudyNav({deck}){

    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                <li class="breadcrumb-item active" aria-current="page">Study Page</li>
            </ol>
        </nav>      
     )

}

export default StudyNav