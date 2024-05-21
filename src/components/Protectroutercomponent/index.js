import { Navigate } from "react-router-dom";

const Protectroutercomponent = (props) => {
  if ("true" === "true") {
    return props.children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default Protectroutercomponent;
