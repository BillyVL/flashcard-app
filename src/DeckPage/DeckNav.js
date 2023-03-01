import React from "react";




function DecksNav({deck}){
    
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Deck: {deck.name}</li>
            </ol>
        </nav>
    )
    


}



export default DecksNav