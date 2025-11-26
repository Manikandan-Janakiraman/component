import { Link } from "react-router-dom"
const NavBar = ()=>{
    return(
        <div className="navbar">
          
            <div className="link">
            <Link className="text" to="/">Home</Link>
            <Link className="text" to="/Crew">Crew</Link>
            <Link className="text" to="/Tickets">Ticket</Link>
            <Link className="text" to="/StateProcess">State Process</Link>
            <Link className="text" to="/Props">Props</Link>
            
            </div>
        </div>
    )
}
export default NavBar