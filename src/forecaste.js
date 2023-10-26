import React, { useEffect, useState } from 'react'
import { API_Key , BASE_URL } from './api_key'
import axios from "axios";

export default function Forecaste() {
 

   

  return (
    <div >
      <form>
        <input className='outline-none'
       type="text"
        name="" 
        id="city" 
        
      
        />
        <button onClick={(e)=>{
           
        }}>submit</button>
      </form>
     
     

    </div>
  )
}
