import { useContext} from "react"
import Cookies from "js-cookie";
import { SurajContext} from "../../App";

import { Link } from "react-router-dom";
let count = 0; 

const Logoutfunction = () => {

  const value = useContext(SurajContext)
  const {thefunction} = value
  const resu = value.v.count
  const result = value.v.count  + 1
  console.log(resu, result )

  return (
    <div>     
      <h1 >logout function success</h1>
      <button>clear interval </button>
      <button onClick={() => thefunction()}>Increase value</button>
    </div>
  );
};

export default Logoutfunction;
