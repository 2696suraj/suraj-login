import {useState} from "react"
import {Navigate} from "react-router-dom"
import "./index.css";

const LoginComponent = () => {
   const [loginStateValue, LoginStateCall] = useState({emailvalue : "", passwordValue : "", emailerrorclassName : "email-error-para-se", passworderrorclassName : "password-error-para-se", successheding : "login-succes-heding"})
    const loginNameFunction  = (event) => {
        LoginStateCall({...loginStateValue, emailvalue : event.target.value})  
    }
    const loginpasswordFunction  = (event) => {
        LoginStateCall({...loginStateValue, passwordValue : event.target.value})  
    }

    const loginerrorFuntion = () => {
        LoginStateCall((cc) => ({...loginStateValue, emailerrorclassName : cc.emailvalue.length < 1 ? "email-error-para" : "email-error-para-se", passworderrorclassName : cc.passwordValue.length < 1 ? "password-error-para" : "password-error-para-se"}))
    }

const loginSubMiteFuntion = (event) => {
    event.preventDefault()
    if (loginStateValue.emailvalue.length > 0 && loginStateValue.passwordValue.length > 0) {
        const getItemsForLogin  = JSON.parse(localStorage.getItem("CreateAcountList"))
          for (let i of getItemsForLogin) {
            if (i.email === loginStateValue.emailvalue && i.password === loginStateValue.passwordValue) {
                <Navigate to="/HOME" />
                LoginStateCall({...loginStateValue, successheding : "login-succes-heding-se"})


            }else {
                console.log("no")
            }
          }
    }

}
  return (
    <div className="login-bg-co">
      <div className="login-card-co">
        <form className="login-form-co" onSubmit={loginSubMiteFuntion}>
             <label>EMAIL</label>
             <input onBlur={loginerrorFuntion}value={loginStateValue.emailvalue}onChange={loginNameFunction}/>
             <p className={loginStateValue.emailerrorclassName}>INTER EMAIL</p>
             <label>PASSWORD</label>
             <input onBlur={loginerrorFuntion} value={loginStateValue.passwordValue} onChange={loginpasswordFunction} />
             <p className={loginStateValue.passworderrorclassName}>INTER EMAIL</p>

             <button type="submit">LOGIN</button>
             <h1 className={loginStateValue.successheding}>LOGIN SUCCESSFULL</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
