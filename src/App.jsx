
import './App.css'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import { Routes, Route  } from 'react-router-dom'


function App() {

  return (
    <>
    <main>
      <Routes>
        <Route path='/AllPlayers' element={<AllPlayers />}/>
        <Route path='/SinglePlayer' element={<SinglePlayer />}/>
      </Routes>

    {/* <AllPlayers />
    <SinglePlayer /> */}
    </main>
    
    </>
  )
}

export default App
