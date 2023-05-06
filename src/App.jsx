import { Routes, Route, } from "react-router-dom";

import './App.css';
import AboutuS from './Components/About';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Slider from './Components/Slider';
import Services from "./Components/Services";
import ProgectsPage from "./Components/ProjectsPage";
import Members from "./Components/Member";
import Tracks from "./Components/Tracks";
import ContactUS from "./Components/ContactUS";
import ContactMe from "./Components/ContactMe";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Routes>
        {/* <Route path="/" element={"/"} /> */}
        <Route path="about" element={<AboutuS />} />
        <Route path="services" element={<Services />} />
        <Route path="contactus" element={<ContactUS />} />
        <Route path="contact" element={<ContactMe />} />
      </Routes>
      <Slider />
      <AboutuS />

      <Routes>
        <Route path="member" element={<Members />} />
        <Route path="showProjects" element={<ProgectsPage />} />
        <Route path="tracks" element={<Tracks />} />
      </Routes>
    </div>
  );
}

export default App;
