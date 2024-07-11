import {
  Router,
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createContext, useContext, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import AboutHomeComponent from "./components/AboutComponent/AboutHomeComponent";
import HomeComponent from "./components/HomeBgComponent/HomeComponent";
import ProjectsHomecomponent from "./components/ProjectsComponent/ProjectsHomecomponent";
import ContactHomeComponent from "./components/ContactComponent/ContactHomeComponent";
import PagesHomeComponent from "./components/PagesComponent/PagesHomeComponent/";
import ServicesHomeComponent from "./components/ServicesComponent/ServicesHomeComponent";
import BlogsHomeComponent from "./components/BlogComponent/BlogsHomeComponent";
import NotFoundComponent from "./components/NotFoundComponent";
import LoginComponent from "./components/LoginComponent";
import CreateAcountComponent from "./components/CreateAcountComponent";
const useContextva = createContext();

function App() {
  const [valueOfPath, pathChangecall] = useState({ path: "HOME" });

  const inStatePathChangeFuntion = (props) => {
    pathChangecall({ path: props });
  };
  return (
    <div className="appjs-bg-co">
      <useContextva.Provider
        value={{
          inStatePathChangeFuntion: inStatePathChangeFuntion,
          ...valueOfPath,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/about" element={<AboutHomeComponent />} />
            <Route path="/contact" element={<ContactHomeComponent />} />
            <Route path="/project" element={<ProjectsHomecomponent />} />
            <Route path="/pages" element={<PagesHomeComponent />} />
            <Route path="/services" element={<ServicesHomeComponent />} />
            <Route path="/blog" element={<BlogsHomeComponent />} />
            <Route path="/notfound" element={<NotFoundComponent />} />
            <Route path="*" element={<Navigate to="NotFound" />}></Route>
          </Routes>
        </BrowserRouter>
      </useContextva.Provider>
    </div>
  );
}
export { useContextva };
export default App;
