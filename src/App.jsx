import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./sites/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./sites/Contact";
// import Home from "./sites/Home";
import Products from "./sites/Products";
import BookingForm from "./sites/BookingForm";
// import HeroSection from "./components/HeroSection";



function App() {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <Routes>
        <Route path="/bookingform" element={<BookingForm/>} />
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products/>} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
// vcvcvcv