import React from "react";




function DecksNav({deck}){

    return (
        <div>
            <nav>
                <ul>
                    <li><a href = '/'>Home</a></li>
                    <li>Deck: {deck.name}</li>
                </ul>
            </nav>
        </div>
     )


}



export default DecksNav