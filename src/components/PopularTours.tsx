import { popularTours } from "../data/tourData";
import { Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function PopularTours() {
  return (
    <section className="py-16 container mx-auto px-4 bg-white">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber-500 text-sm font-medium mb-2">Wonderful plan for You</div>
        <h2 className="text-3xl md:text-4xl font-bold">Most Popular Tour</h2>
        <div className="w-20 h-1 bg-[#203864] mx-auto mt-4 rounded-full"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularTours.map((tour, index) => (
          <motion.div 
            key={tour.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {/* Favorite button that animates on hover */}
            <motion.button 
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full z-10 hover:bg-white"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors" />
            </motion.button>
            
            <div className="h-60 overflow-hidden">
              <motion.img 
                src={tour.image} 
                alt={tour.title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              {/* Price badge */}
              {/* <div className="absolute top-4 left-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-bold">
                ${tour.price}
              </div> */}
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
              <p className="text-gray-600 mb-4">{tour.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm">{tour.rating}</span>
                </span>
                <Link href="/consultation">
                <motion.button 
                  className="text-primary border border-primary px-4 py-1 rounded-lg text-sm font-medium hover:bg-[#203864] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View all tours button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link href="fullpopulartours">
        
        <motion.button
          className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-[#203864] hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore All Tours
        </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
