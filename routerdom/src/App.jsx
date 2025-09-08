import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./component/LogIn";   // ✅ LogIn component
import Navbar from "./component/Navbar"; // ✅ Navbar component (file banani hogi)
import Footer from "./component/Footer"; // ✅ Footer component (file banani hogi)
import SignUp from "./component/SignUp"; // ✅ Footer component (file banani hogi)
import Home from "./component/Home"; // ✅ Footer component (file banani hogi)

 
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar /><hr />
        <Routes>
          <Route path="/" element={<LogIn />} /> 
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes><hr />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
