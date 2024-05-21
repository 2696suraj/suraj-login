import {Component} from "react"
import {useEffect, useState} from "react"
import {Navigate, Link} from "react-router-dom"

import Logoutcomponent from "../Logoutcomponent"
import Aboutcomponent from "../Aboutcomponent"
const   Loginfunction  = () =>  {
   const [value, call] = useState(true)


   


    


        return (
            <div>
                <h1 onClick={() => {
                    call( !value 
                    )
                }}>LOGIN FUNCTIOON</h1>
                
            </div>
        )
    
   

   
}

export default Loginfunction