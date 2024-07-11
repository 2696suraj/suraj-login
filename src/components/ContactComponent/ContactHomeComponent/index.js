import React, {useContext} from "react"

import ContactFirstComponent from "../ContactFirstComponent"
import ContactSecondComponent from "../ContactSecondComponent"
import FooterComponent  from "../../HomeBgComponent/FooterComponent"
import { useContextva } from "../../../App"
import NavbarComponent from "../../NavbarComponent"
const ContactHomeComponent = () => {

    const {inStatePathChangeFuntion} = useContext(useContextva)
   
    return <div>
        <NavbarComponent path={"CONTACT"}/>
        <ContactFirstComponent />
        <ContactSecondComponent />
        <FooterComponent />
    </div>
}


export default ContactHomeComponent