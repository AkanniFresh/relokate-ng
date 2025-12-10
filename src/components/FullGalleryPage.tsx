import { motion } from "framer-motion";
// import { categories } from "../data/tourData";
import Footer from "./Footer";

import SubpageNavbar from "./SubpageNavbar"; // Adjust the path as needed
import { useEffect } from "react";
import FullGallery from "./FullGallery";
import QuoteLeft from "./ui/QuoteLeft";

const FullGalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, []);

  return (
    <section>
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
              REAL PEOPLE. REAL RESULTS.
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Success Stories
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* End of Hero section */}

      <div className="py-6 container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <FullGallery />
          </div>
        </motion.div>
      </div>

      <section className="w-full bg-gray-50 p-6 m-auto">

      <div className="max-w-4xl mx-auto mt-6 mb-16 px-6">
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 h-full relative border border-gray-100"
        >
          {/* Quote icon */}
          <div className="absolute -top-3 -left-3 bg-[#203864] text-white rounded-full p-2 shadow-md">
            <div className="h-5 w-5">
              <QuoteLeft />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Disclaimer
          </h3>

          <p className="text-gray-600 italic">
            All visa approvals, testimonials, and success stories displayed on
            this website are shared for informational and transparency purposes
            only. Individual results may vary based on personal qualifications,
            documentation, country requirements, and embassy or immigration
            authority decisions. <strong>Relokate.ng</strong> does not influence
            or guarantee the outcome of any visa or immigration application.
          </p>
        </motion.div>
      </div>
      </section>

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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </motion.button>
    </section>
  );
};

export default FullGalleryPage;
