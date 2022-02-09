import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Restaurants from "./pages/Restaurants";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import HomePage from "./pages/HomePage";
import EditRestaurant from "./pages/EditRestaurant";
import RestaurantProfile from "./pages/RestaurantProfile";
import Review from "./pages/Review";
import MyReview from "./pages/MyReview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import "react-multi-carousel/lib/styles.css";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantProfile />} />
        <Route path="/restaurants/edit/:id" element={<EditRestaurant />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/review/:id" element={<Review />} />
        <Route path="/myReview" element={<MyReview />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
