import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Leadform from "./Components/Leadform";
import FooterTop from "./Components/FooterTop";
import Header from "./Components/Header";
import Background from "./Components/Background";
import FooterMid from "./Components/FooterMid";
import FooterBottom from "./Components/FooterBottom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Background />
      <Leadform />
      <FooterTop />
      <FooterMid />
      <FooterBottom />
    </div>
  );
}

export default App;
