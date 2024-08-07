import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Contact_Us from "./Pages/Contact_Us";
import Weedings from "./Pages/Weedings";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import RoomDetails from "./Pages/RoomDetails";
import NavBar from "./Components/NavBar";
import Activity from "./Pages/Activity";


function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/contact" element={<Contact_Us />} />
          <Route path="/weedings" element={<Weedings/>} />
          <Route path="/activity" element={<Activity/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/rooms/room-details" element={<RoomDetails />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
