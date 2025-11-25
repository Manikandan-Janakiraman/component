// const StateProcess = () => {

  
 
// return(
//     <>
    

//     <div>
//         <h3 className="head">
//             string state process
           

//         </h3>
//         <p> 
//          <div> 
//             <ul>
//           <li>const [string, setString] =useState("Tharun")</li>
//     <li>const [name, setName] = useState("Mani");</li>
//    <li>const [age, setAge] = useState("20");</li> 
//    <li>const [city, setCity] = useState("Chennai");
//     const [degree, setDegree] = useState("B.Tech");
//     const [sports, setSports] = useState("Football");
//     const [player, setPlayer] = useState("Goalkey");</li> 
//     </ul>
//     </div>
// <div>
//     <ul>
//     <li>const [date, setDate] = useState(20/11/2025)</li>
//     <li>const [num1, setNum1] = useState(27)</li>
//    <li>const [num2, setNum2] = useState(07)</li> 
//     <li>const [num3, setNum3] = useState(05)</li>
//     </ul>
//     </div>
// <div>
//     const [value, setValue] = useState(null);
//     </div>
// <div>
//     const [Goal, setGoal] = useState(true);
//     const [negative, setNegative] = useState(false);
//     </div>

    

//     const [things, setThings] = useState(["Lap", "Mouse"]);
// </p>
     
// <div>

//     const [course,setCourse,] = useState 

//          courseName : "AI",
//         duration: "3 months",
//         fees: 85000;

     
//     const [profile, setProfile] = useState
//     {/* ({ */}
//         employee:"Mani J",
//         iD:"WERT3",
//         salary:30000
// {/* }); */}
 
     
//     {/* const [music, setMusic] = useState({
//          { names: "violin" },
//         { names: "guitar"   },
//         { names: "paino"  }

        

//     })
//     {/* ([ */}  
       

//     {/* ]); */}

//       {/* const [sport, setSport] = useState({ 
     
//         {setUsers([{ fav: "Cricket"},
//         { fav: "Football"   },
//         { fav: "Badminton" }
//           */}
//      {/* })
//  */}
//  {/* */}

// {/* )


// }
//     */}




//          </div>
          
          
//     </div>
    
    
//     </>
// )
// }

// export default StateProcess

import React, { useState } from 'react'
import onimg from "../assets/on.png"
import offimg from "../assets/off.png"

const StateProcess = () => {

  const [light, setLight] = useState(true)

  const [update,setUpdate]=useState("0%")

  const lightswitch = () => {


    setLight(!light)
  }
const updating =()=>{

  

}




  return (
    <>

      <div className=" bg-blue-100  flex flex-col  justify-center items-center gap-2"  >
        {light ? <div>
          <img className=" p-10 w-150 flex flex-col  justify-center items-center " src={offimg} alt="" />
        </div> : <div>
          <img className=" p-10 w-150 flex flex-col  justify-center items-center " src={onimg} alt="" />
        </div>}

        <div>
          <div className='flex flex-col  justify-center items-center'>
            {light ? <button className="bg-amber-500  rounded-2xl text-black w-60 h-15  " onClick={lightswitch}>ON</button> : <button className="bg-amber-300  rounded-2xl text-black w-60 h-15  " onClick={lightswitch}>OFF</button>}

          </div>
        </div>
      </div>
   

    </>
  )
}

export default StateProcess