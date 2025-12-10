
import { motion } from "framer-motion";
// import { categories } from "../data/tourData";
import Footer from "./Footer";

import SubpageNavbar from "./SubpageNavbar"; // Adjust the path as needed
import { useEffect } from 'react';
import AboutAdventure from "./AboutAdventure";
import AboutUsText from "./AboutUsText";



const AboutUsPage = () => {


   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, []);

  return (
    <section className="bg-blue-50">
      <SubpageNavbar />

      <div className="relative overflow-hidden h-[75vh]">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img
              src="./logos/fullcatbg.jpg"
              alt="Mountain view"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-32 relative z-10 flex flex-col justify-center items-center h-[75vh]">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-lg text-white opacity-90 mb-4 text-center tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              FROM HERE TO ANYWHERE...
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Relokate Gats You
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* End of Hero section */}

      <div className="py-16 container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-amber-500 text-sm font-medium mb-2">
            It's important to know
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div>
          <AboutUsText />
        </motion.div>
      </div>

      <div className="w-full bg-gray-50 my-6">
        <AboutAdventure />
      </div>
    
        <Footer />

         {/* Scroll to top button - fixed at bottom right */}
      <motion.button
        className="fixed bottom-8 right-8 bg-[#203864] text-white p-3 rounded-full shadow-lg z-40 hover:bg-[#203864]/80 transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </motion.button>
    </section>
  );
};

export default AboutUsPage;
