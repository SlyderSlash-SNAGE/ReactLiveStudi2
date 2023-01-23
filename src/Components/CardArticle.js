import React from 'react'

//sonarlint
function CardArticle (props) {
    let remise = 200
    return (
        <div>
            <h1>Pizza {props.name}</h1>
            <h2>Prix : {props.price ?props.price :25}€</h2>
        </div>
    )
}

export {CardArticle}