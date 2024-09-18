import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,
Route,
BrowserRouter} from "react-router-dom"
import Home from './Views/Home/Home'
// import Proyectos from './Views/Proyectos/IntroProyectos'
import NavBar from './components/nav/NavBar'
import About from './Views/About/About'
import Skills from './Views/About/Skills'
import Data from './Views/About/Data'
import PosterProjects from './Views/Proyectos/IntroProyectos'
import Detail from './Views/Detail/Detail'
import DetailInc from './Views/Detail/DetailInc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
      </p> */}
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/projects' element={<PosterProjects/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/skills' element={<Skills/>}/>
          <Route exact path='/data' element={<Data/>}/>
          <Route exact path='/detail/:id' element={<Detail/>}/>
          <Route exact path='/detailInc' element={<DetailInc/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
