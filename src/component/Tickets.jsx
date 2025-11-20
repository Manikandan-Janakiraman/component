import BahuImage from '../assets/card.jpeg'
import leoImage from '../assets/leo.jpeg'
import araImage from '../assets/ara.webp'

const Ticket = () => {

    const movieTicketDetails = [{ moviename: "Bahubali", img: BahuImage, time: "Morning", location: "PVR" },
    { moviename: "Leo", img: leoImage, time: "Afternoon", location: "Rohini" },
    { moviename: "Pathu Thala", img: araImage, time: "Evening", location: "Phoenix" },
    ]

    return (
        <>
            <div className="ticketmain">

                {movieTicketDetails.map((e, i) => (

                    <div className="ticket_details" key={i}>

                        <div className="tickimg">
                            <img src={e.img} alt="" />
                        </div>

                        <div className="tickmov">
                            <h1>{e.moviename}</h1>
                            <p>{e.time}</p>
                            <p>{e.location}</p>
                            <button>Book Now</button>
                        </div>
                    </div>

                ))}

            </div>
        </>
    )
}
export default Ticket