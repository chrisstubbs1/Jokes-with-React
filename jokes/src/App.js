import React from "react"
import JokeCard from "./JokeCard"
import Header from "./Header"
import jokesList from "./jokesList"

function App() {
   const jokeComponets = jokesList.map(jokes => <JokeCard joke = {jokes.joke} punchline = {jokes.punchline}/>)

    return (
      <div className="container">
        <Header/>
        {jokeComponets}
      </div>
    )
}

export default App