import React from "react"

const TestComponent = (props) => {
    //const checkout = useRecoilValue(coutState)
    return (
    <div>
        <h5>Voici votre compte avec une variable let : {props.points}</h5>
        <button onClick={props.functionClick}>Appuyez ICI</button>
    </div>
    )
}
export default TestComponent