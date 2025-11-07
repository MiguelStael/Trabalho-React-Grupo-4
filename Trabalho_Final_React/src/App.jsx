import { useState } from 'react'
import Navbar from './components/NavBar/index'
import AppRoutes from './routes/index.js'
import PokemonCard from './components/Card/PokemonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
      <Navbar />
      <main>
        <h1>Pokemon</h1>
        <p>clique aqui para comprar cards de Pokemon</p>
      </main>
      <div>
        <a href="https://vite.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
