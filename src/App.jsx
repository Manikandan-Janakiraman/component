import './App.css'
import Banner from './component/Banner'
import Crew from './component/Crew'
import Tickets from './component/Ticket'
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
        <Banner />
      </section>

      <section>
        <Crew />
      </section>

      <section>
        <Tickets />
      </section>

    </>
  )
}
export default App