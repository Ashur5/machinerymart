import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../assets/Logo2.png";
import ULlogo from "../assets/ULOGO.png";
import Atandralogo from "../assets/Atandralogo.png";
import Jacklogo001 from "../assets/Jacklogo001.png";
import Elprologo from "../assets/Elprologo.png";

export default function HeroSection() {
  const [gradientPos, setGradientPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPos((prev) => (prev + 1) % 360);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  const floating = {
    y: [0, -8, 0],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
  };

  const flipVariant = {
    hidden: { rotateY: -90, opacity: 0 },
    visible: (delay = 0) => ({
      rotateY: 0,
      opacity: 1,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    }),
  };

  const brandLogos = [ULlogo, Atandralogo, Jacklogo001, Elprologo];

  return (
    <section
      className="relative overflow-hidden text-white flex flex-col items-center justify-center w-full"
      style={{
        background: `linear-gradient(${gradientPos}deg, #4a39c4, #6350c7, #4f3fa1)`,
        transition: "background 1s linear",
        paddingTop: "2rem",
        paddingBottom: "2.5rem",
        minHeight: "32vh", // compact height
      }}
    >
      {/* Edge Fills */}
      <div className="absolute left-0 top-0 h-full w-[15%] bg-gradient-to-r from-indigo-500/30 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-[15%] bg-gradient-to-l from-purple-500/30 to-transparent pointer-events-none" />

      {/* Glow Orbs */}
      <motion.div
        className="absolute left-[5%] top-[45%] w-44 h-44 bg-indigo-400/25 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] top-[35%] w-52 h-52 bg-purple-500/25 rounded-full blur-3xl"
        animate={{ y: [-15, 10, -15], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        className="mb-2"
      >
        <motion.div
          animate={floating}
          className="bg-white rounded-full p-4 md:p-5 shadow-2xl flex items-center justify-center"
          style={{
            width: "150px",
            height: "150px",
            boxShadow: "0 0 35px rgba(255,255,255,0.15)",
          }}
        >
          <img
            src={Logo}
            alt="Namo Machinery Mart Logo"
            className="object-contain h-[120px] w-[120px]"
          />
        </motion.div>
      </motion.div>

      {/* Company Name */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-center font-extrabold tracking-tight mb-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg text-5xl sm:text-6xl md:text-7xl"
      >
        Namo Machinery Mart
      </motion.h1>

      {/* Tagline */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.3}
        className="text-lg sm:text-xl md:text-2xl text-orange-300 font-semibold italic text-center"
      >
        Committed to Quality
      </motion.p>

      {/* Brand Logos */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 mt-6 w-full px-8 md:px-20">
        {brandLogos.map((brand, index) => (
          <motion.div
            key={index}
            variants={flipVariant}
            initial="hidden"
            animate="visible"
            custom={1.7 + index * 0.2}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-3 md:p-4 w-28 md:w-36 h-16 md:h-20 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="object-contain h-full w-full"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
