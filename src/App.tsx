import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/About";
import Program from "./Pages/Programs/Program";
import Training from "./Pages/Training/Training";
import Pricing from "./Pages/Pricing/Pricing";
import Subscription from "./Pages/Subscription/Subscription";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="aboutUs" element={<About/>}/>
        <Route path="program" element={<Program/>}/>
        <Route path="training" element={<Training/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="subscription" element={<Subscription/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
      </Routes>
    </>
  );
}

export default App;
