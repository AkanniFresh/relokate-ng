import { Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import SubpageNavbar from "./SubpageNavbar";
import Footer from "./Footer";
import { Link } from "wouter";
import { useEffect } from "react";

export const fullpopularTours = [
  {
    id: 1,
    title: "Romantic Getaway to Paris",
    description:
      "Experience timeless romance and elegance in the enchanting city of Paris, the city of love.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    price: 1250,
    href: "https://www.raphael-hotel.com/en/page/romantic-weekend-in-paris.10354.html",
  },
  {
    id: 2,
    title: "Santorini Escape",
    description:
      "Discover the pristine white buildings and blue waters of this iconic Greek island paradise.",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    price: 1680,
    href: "https://www.plumguide.com/homes/75072/santorini-escape",
  },
  {
    id: 3,
    title: "Tokyo Cultural Immersion",
    description:
      "Experience ancient temples and neon-lit skyscrapers in the vibrant city of Tokyo.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    price: 1890,
    href: "https://deeperjapan.com/tokyo",
  },
  {
    id: 4,
    title: "2026 FIFA World Cup",
    description:
      "Experience the thrill of the 2026 FIFA World Cup across North America.",
    image: "./logos/fifa.jpg",
    rating: 4.9,
    price: 1890,
    href: "https://deeperjapan.com/tokyo",
  },
  {
    id: 5,
    title: "Skilled Migration Exploration",
    description:
      "Visit top countries welcoming skilled professionals with great migration opportunities abroad.",
    image: "./logos/skill-worker.jpg",
    rating: 4.2,
    price: 1890,
    href: "https://deeperjapan.com/tokyo",
  },
  {
    id: 6,
    title: "Nature & Wildlife Expeditions ",
    description:
      "Explore breathtaking safaris, majestic mountains, and eco-tours for nature lovers worldwide.",
    image: "./logos/wildlife.jpg",
    rating: 4.5,
    price: 1890,
    href: "https://deeperjapan.com/tokyo",
  },
];

export default function FullPopularTours() {

   useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to top on route change
    }, []);

  return (
    <section>
      <div className="bg-blue-50 text-center">
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
                src="./logos/explore.jpg"
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
                FLY WITHOUT A WING
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Explore the World
                <br />
                Catch the Breeze of Discovery
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* End of Hero section */}

      <div className="py-16 container mx-auto px-4 bg-white">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-amber-500 text-sm font-medium mb-2">
            Wonderful plan for You
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Most Popular Tour</h2>
          <div className="w-20 h-1 bg-[#203864] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fullpopularTours.map((tour, index) => (
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
                {/* <div className="absolute top-4 left-4 bg-[#203864] text-white py-1 px-3 rounded-full text-sm font-bold">
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
}
