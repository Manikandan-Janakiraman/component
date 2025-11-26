import React from 'react'
import Firstchild from './Firstchild';

const Props = () => {

    const dnum=49;
    const name="Mani"
    const person = { name3: "Mani", age: 20 }
    const nums = [10, 20, 30];
    const users = [
  { id: 1, name1: "A" },
  { id: 2, name2: "B" }
];




  return (
 
    <div>
      <h1>the data is{dnum}</h1>
      <Firstchild sendto={dnum}/>
    <Firstchild sendtoname={name}/>
        {/* <Firstchild sendtoperson={person}/>
        <Firstchild sendtonums={nums}/>
                <Firstchild sendtousers={users}/> */}



    </div>

    
    
  )
}

export default Props