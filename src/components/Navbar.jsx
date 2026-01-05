import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo2.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f3edfb] text-[#6a65ba] px-6 py-3 md:h-21.5 md:py-4 shadow-sm">
      <div className="flex justify-between items-center">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center hover:underline relative">
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 shrink-0"
          >
            <motion.img
              src={Logo}
              alt="Logo"
              className="object-contain hover:overflow-visible w-full h-full scale-150"
              // whileHover={{ scale: 1.15, rotate: 5 }}
              // transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Animated Brand Text */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-bold text-2xl md:text-3xl leading-none whitespace-nowrap ml-2 md:ml-2"
          >
            Namo Machinery Mart
          </motion.h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:underline text-lg md:text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:underline text-lg md:text-xl">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline text-lg md:text-xl">
            Contact Us
          </Link>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/bookingform"
              className="text-lg md:text-xl text-white bg-orange-400 px-3 py-1.5 rounded-2xl hover:bg-orange-500 transition"
            >
              Order Booking Form
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden focus:outline-none"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-3 flex flex-col space-y-3 bg-[#f3edfb] p-4 rounded-lg shadow-md"
        >
          <Link
            to="/"
            className="hover:underline text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline text-lg"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:underline text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/bookingform"
              className="bg-orange-400 text-white rounded-xl px-3 py-1.5 text-lg text-center hover:bg-orange-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Order Booking Form
            </Link>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
