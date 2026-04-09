import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./ContactUs.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import "./App.css";
import PetEssential from "./PetEssential.jsx";
import MyRequests from "./MyRequests.jsx";
import Pets from "./Pets.jsx";
import ReviewOrder from "./ReviewOrder.jsx";
import Payment from "./Payment.jsx";
import OrderPlaced from "./OrderPlaced.jsx";
import Orders from "./Orders";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
        <Route path="/pet-essentials" element={<PetEssential />} />
        <Route path="/my-orders" element={<MyRequests />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/review" element={<ReviewOrder />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<OrderPlaced />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
