import { Routes, Route } from 'react-router-dom'
import './App.css'
import Banner from './component/Banner'
import Crew from './component/Crew'
import Tickets from './component/Tickets'
import NavBar from './component/NavBar'
import StateProcess from './component/StateProcess'
import Props from './component/Props'


const App = () => {
  const movie = "Bahubali - The Epic Movie of India"
  const releaseYear = 2019
  return (
    <>
      <header>
        <div className="header">
          <div className="headertitle">
            <h2 className="headertext">{movie} {releaseYear}</h2>
          </div>
        </div>
      </header>

  <section>
    <NavBar/>
  </section>
  
      <main>
        <div>
          <Routes>
            <Route path = "/" element={<Banner />} />
            <Route path = "/Crew" element={<Crew />} />
            <Route path = "/Tickets" element={<Tickets />} />
            <Route path = "/StateProcess" element={<StateProcess />} />
            <Route path = "/Props" element={<Props />} />
          </Routes>
        </div>
      </main>


      {/* <section>
        <Banner />
      </section>

      <section>
        <Crew />
      </section>

      <section>
        <Tickets />
      </section> */}

    </>
  )
}
export default App 