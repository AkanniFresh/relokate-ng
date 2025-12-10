
import { motion } from "framer-motion";
// import { categories } from "../data/tourData";
import Footer from "./Footer";

import SubpageNavbar from "./SubpageNavbar"; // Adjust the path as needed
import HowItWorks from "./HowItWorks";
import { useEffect } from 'react';


const categories = [
  {
    id: 1,
    image:
      "./logos/study.jpg",
    title: "Study Abroad",
    description:
      "Explore programs in the UK, Europe, Canada & more. We guide you from application to visa.",
  },
  {
    id: 2,
    image:
      "./logos/work.jpg",
    title: "Work Abroad",
    description:
      "Discover job placements in Europe & more, legally and with full support.",
  },

  {
    id: 3,
    image:
      "./logos/scholarship.jpg",
    title: "Scholarships",
    description:
      "Browse curated scholarships that fit your goals. We help you apply successfully.",
  },

   {
    id: 4,
    image:
      "./logos/vacation.jpg",
    title: "Family Vacation",
    description:
      "Family-friendly vacations with stress-free fun, adventure, relaxation, and lasting memories.",
  },

  {
    id: 5,
    image:
      "./logos/practice.jpg",
    title: "Language Training",
    description:
      "Prepare for IELTS, TOEFL, or French tests with expert guidance. Boost your confidence.",
  },
];


const FullCategories = () => {


   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

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
              THE JOURNEY BEGIN WITH JUST A CLICK
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Explore Life-Changing Opportunities
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
            Wonderful plan for You
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Travel Categories</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p>{category.description}</p>
                <motion.div
                  className="h-0.5 w-0 bg-primary mx-auto mt-2 group-hover:w-1/2 transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "50%" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full bg-gray-50">
        <HowItWorks />
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

export default FullCategories;
