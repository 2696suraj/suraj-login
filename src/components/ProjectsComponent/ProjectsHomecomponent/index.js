import ProjectsInFirstComponent from "../ProjectsInFirstComponent";
import ProjectsSecondComponent from "../ProjectsSecondComponent";
import FooterComponent from "../../HomeBgComponent/FooterComponent";
import NavbarComponent from "../../NavbarComponent";
const ProjectsHomecomponent = () => {
  return (
    <div>
      <NavbarComponent path="PROJECT" />
      <ProjectsInFirstComponent />
      <ProjectsSecondComponent />
      <FooterComponent />
    </div>
  );
};

export default ProjectsHomecomponent;
