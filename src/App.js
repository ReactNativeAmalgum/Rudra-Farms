import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Contact_Us from "./Pages/Contact_Us";
import Services from "./Pages/Services";
import Weedings from "./Pages/Weedings";
import Experience from "./Pages/Experience";
import Faq from "./Pages/Faq";
import Blogs from "./Pages/Blogs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";


function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/contact" element={<Contact_Us />} />
          <Route path="/service" element={<Services/>} />
          <Route path="/weedings" element={<Weedings/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/blogs" element={<Blogs/>} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
