import React from "react";
import  ReactDOM  from "react-dom";

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (possition) => console.log(possition),
        (error) => console.log(error)
    );
    return (
        <div>
            Hello World
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)