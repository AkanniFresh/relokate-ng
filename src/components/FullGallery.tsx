import { completeGallery } from "../data/tourData";
import { ZoomIn } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function FullGallery() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Recent Gallery</h2>
          <div className="w-20 h-1 bg-[#203864] mx-auto mt-4 rounded-full"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {completeGallery.map((item) =>
            item.type === "image" ? (
              <motion.div
                key={item.id}
                className="relative group overflow-hidden rounded-lg cursor-pointer shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={item.url}
                  alt={item.alt || "Gallery Item"}
                  className="w-full h-96 object-cover transition duration-500 group-hover:scale-110"
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
                  <p className="text-white font-medium">{item.alt}</p>
                  <p className="text-white/80 text-sm">
                    Explore our beautiful destinations
                  </p>
                </div>
              </motion.div>
            ) : (
              <video
                key={item.id}
                src={item.url}
                controls
                className="w-full h-96 object-cover rounded-lg"
              />
            )
          )}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="consultation">
            <motion.button
              className="bg-[#203864] text-white px-6 py-3 rounded-lg hover:bg-[#203864]/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
