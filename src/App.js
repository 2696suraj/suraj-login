import { createContext } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loginfunction from "./components/Logincomponent";
import Logoutfunction from "./components/Logoutcomponent";
import Aboutcomponent from "./components/Aboutcomponent";
import Protectroutercomponent from "./components/Protectroutercomponent";
import {useState} from "react"
export const SurajContext = createContext();

function App() {
  const [appjs, appcall] = useState({name : "suraj", count : 20})

  const update = () => {
       appcall((cc) => ({count : cc.count + 1}))
  }


  return (
    <SurajContext.Provider value={{
      v: appjs,
      thefunction : update
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginfunction />} />
          <Route
            path="/logout/:id"
            element={
              <Protectroutercomponent>
                {" "}
                <Logoutfunction />
              </Protectroutercomponent>
            }
          />
          <Route
            path="/notfound"
            element={
              <Protectroutercomponent>
                <Aboutcomponent />{" "}
              </Protectroutercomponent>
            }
          />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </BrowserRouter>
    </SurajContext.Provider>
  );
}

export default App;
