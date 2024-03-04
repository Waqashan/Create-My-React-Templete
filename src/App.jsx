import { Route, Routes, Router } from "react-router-dom";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import NavBar from "./components/NavBar/NavBar";
import Service from "./components/services/Service";
import MainHomeCom from "./Pages/MainHomeCom";
import AboutMain from "./Pages/AboutMain";
import MainTestimonalPage from "./Pages/MainTestimonalPage";
import ContactUsPage from "./Pages/ContactUsPage";
import QuickLinks from "./components/quickLinks/QuickLinks";
import LogIn from "./components/SignUp/LogIn";
import LayOut from "./Layout/LayOut";
function App() {
  return (
    <>
  
      <Routes>
        <Route element={<LayOut/>}>
          <Route  path="/service" element={<Service />} />
          <Route index path="/" element={<MainHomeCom />} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/testimonals" element={<MainTestimonalPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
