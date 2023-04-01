import React, { useEffect, useState } from 'react'
import Empheader from './Empheader'
import axios from 'axios'

const Empdashboard = () => {
    const apiurl = 'https://jsonplaceholder.typicode.com/users'
    const[data, changedata]=useState([])
   useEffect(()=>{
    axios.get(apiurl).then(
        (Response)=>{
            console.log(Response.data);
            changedata(Response.data)
        }
    )
       
    
   },[]
   )
     
  return (
    <div>
        <Empheader/>
        <div className="container"><h3 className='heading'>Employee Details</h3>
        <table  className="table table-bordered">
  <thead>
    <tr>
      
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (item)=>{
            return <tr>
      
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        }
    )}
   
  </tbody>
</table></div>

        
        </div>
  )
}

export default Empdashboard