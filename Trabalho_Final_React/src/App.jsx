import { useState } from 'react'
import { Navbar } from './components/NavBar/index'
import PokemonCard from './components/Card/PokemonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <h1>Pokemon</h1>
      <p className="home">
        Clique aqui para comprar cards de Pokemon
      </p>
    </>
  )
}

export default App
