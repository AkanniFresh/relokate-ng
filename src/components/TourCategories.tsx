import { categories } from "../data/tourData";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { FiArrowRight } from "react-icons/fi";

export default function TourCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <section className="py-16 container mx-auto px-4">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber-500 text-sm font-medium mb-2">Wonderful plan for You</div>
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
              transition: { duration: 0.3 }
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
              <h3 className="font-bold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              <motion.div
                className="h-0.5 w-0 bg-primary mx-auto mt-2 group-hover:w-1/2 transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "50%" }}
              />
              {/* <motion.p 
                className="text-sm text-gray-500 mt-2 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300"
                initial={{ height: 0, opacity: 0 }}
                whileHover={{ height: "auto", opacity: 1 }}
              >
                Explore amazing {category.title.toLowerCase()}
              </motion.p> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* View all categories button */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/fullcategories">
        <a className="flex flex-row justify-center">
        <motion.button
          className="text-[#203864] underline-offset-4 font-medium hover:underline group flex flex-row justify-center items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
        </a>
        </Link>
      </motion.div>
    </section>
  );
}
