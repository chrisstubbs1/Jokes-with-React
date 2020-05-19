import React from "react"

function JokeCard(props) {
    return (
        <div className="card">
            <header>
                <h1>{props.joke}</h1>
            </header>
            <hr/>
            <main>
                <p>{props.punchline}</p>
            </main>
        </div>
    )
}

export default JokeCard