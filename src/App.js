import React, { useEffect } from "react";
import { Home } from "./pages";
import AOS from "aos";
// import "aos/dist/aos.css";

import "./styles/app.scss";

const App = () => {
  
  useEffect(() => {
    // AOS.init();
  }, []);

  return <Home />;
};

export default App;
