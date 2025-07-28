import { galleryImages } from "../data/tourData";
import { ZoomIn } from "lucide-react";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Recent Gallery</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                >
                  <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                    <ZoomIn className="h-5 w-5" />
                  </button>
                </motion.div>
              </div>
              
              {/* Image caption that slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{image.alt}</p>
                <p className="text-white/80 text-sm">Explore our beautiful destinations</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

          <video className="mt-3.5 rounded-md" width="490" height="240" controls>
              <source src="./gallery/aresa-promotion.mp4" type="video/mp4">
              </source>

            </video>
        
        {/* View all button */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button 
            className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-400/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
