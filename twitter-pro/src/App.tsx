import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Acountbar from "./components/Acountbar";
import Sidecpar from "./components/Sidepar";
import Intro from './pages/intro'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Intro/>}></Route>

        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route path="/Acountbar" element={<Acountbar />}></Route>
        <Route path="/Sidecpar" element={<Sidecpar />}></Route>

        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
