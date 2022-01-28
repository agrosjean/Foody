import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Restaurants from "./pages/Restaurants";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import EditRestaurant from "./pages/EditRestaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/edit/:id" element={<EditRestaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
