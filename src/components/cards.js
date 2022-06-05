import React from 'react'
import '../App.css'

function cards(props) {
  return (
     

    <div className='card'>
     
 
       <img src={props.image} alt='' height="200px" width="200px" ></img>
   
    

    </div>
  )
}

export default cards