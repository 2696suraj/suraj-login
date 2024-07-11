import {useState} from "react"

import "./index.css"


let createAcountList = JSON.parse(localStorage.getItem("CreateAcountList"))

const CreateAcountComponent = () => {
    const [createStateValue, CreateStateCall] = useState({nameinput : "" , emailinput : "", passwordinput : "", nameinputclassName : "Createacount-card-co-form-co-name-para-se",emailinputclassName : "Createacount-card-co-form-co-email-para-se",passwordinputclassName : "Createacount-card-co-form-co-password-para-se", successheding : "create-success-heding"})

    const createNameFuntion = (event) => {
        CreateStateCall({...createStateValue, nameinput : event.target.value})

    }
    const createEmailFuntion = (event) => {
        CreateStateCall({...createStateValue, emailinput : event.target.value})

    }
    const createPasswordFuntion = (event) => {
        CreateStateCall({...createStateValue, passwordinput : event.target.value})

    }

    const createSubmiteFuntion = (event) => {
             event.preventDefault()
             if (createStateValue.nameinput.length > 0 && createStateValue.emailinput.length > 0 && createStateValue.passwordinput.length > 0 ) {
                    const createAcountObject = {
                        name : createStateValue.nameinput,
                        email : createStateValue.emailinput,
                        password : createStateValue.passwordinput
                    }
                    createAcountList.push(createAcountObject)
                    const createAcountListString = JSON.stringify(createAcountList)
                
                    localStorage.setItem("CreateAcountList", createAcountListString)
                    CreateStateCall({...createStateValue,  successheding : 'create-success-heding-se'})
             }
             else {
                createErrorFuntion()
             }
    }



    const createErrorFuntion = () => {
        CreateStateCall((cc) => ({...createStateValue, nameinputclassName : cc.nameinput.length < 1 ? "Createacount-card-co-form-co-name-para" : "Createacount-card-co-form-co-name-para-se", emailinputclassName : cc.emailinput.length < 1 ? "Createacount-card-co-form-co-email-para" : "Createacount-card-co-form-co-email-para-se",  passwordinputclassName : cc.passwordinput.length < 1 ? "Createacount-card-co-form-co-password-para" : "Createacount-card-co-form-co-password-para-se" }))
    }
    return <div className="Createacount-bg-co"> 
    <div className="Createacount-card-co">
       <form className="Createacount-card-co-form-co" onSubmit={createSubmiteFuntion}>
        <label>NAME</label>
        <input onBlur={createErrorFuntion}value={createStateValue.nameinput} onChange={createNameFuntion} />
        <p className={createStateValue.nameinputclassName}>INTER NAME</p>
        <label>EMAIL</label>
        <input  onBlur={createErrorFuntion} value={createStateValue.emailinput} onChange={createEmailFuntion}/>
        <p className={createStateValue.emailinputclassName}>INTER EMAIL</p>

        <label>EMAIL</label>
        <input   onBlur={createErrorFuntion} value={createStateValue.passwordinput} onChange={createPasswordFuntion}/>
        <p className={createStateValue.passwordinputclassName}>INTER PASSWORD</p>

        <button type="submit">SUBMITE</button>
        <h1 className={createStateValue.successheding}>your acount is created</h1>
       </form>
    </div>
    </div>
}


export default CreateAcountComponent