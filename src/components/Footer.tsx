import { Button } from "../components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Send, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 opacity-5">
        <svg width="350" height="350" viewBox="0 0 350 350" fill="none">
          <circle cx="175" cy="175" r="175" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="350" y2="350" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 opacity-5">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
          <circle cx="125" cy="125" r="125" fill="url(#paint1_linear)" />
          <defs>
            <linearGradient id="paint1_linear" x1="0" y1="0" x2="250" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
               <img
              className="w-10 md:w-12 lg:w-14"
              src="./logos/aresa-white-logo.png"
              alt=""
            />
              </motion.div>
              {/* <motion.span 
                className="ml-2 text-xl font-bold text-white"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Aresa Travels
              </motion.span> */}
            </div>
            <p className="text-gray-400 mb-6">
              Discover the world with our expertly crafted travel experiences designed to create memories that last a lifetime.
            </p>
            
            <div className="flex flex-col space-y-2 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">Suite 1, Ridwan House, Asa-Dam, Ilorin Nigeria</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">+234 816 421 4924</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">aresatravels@gmail.com</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              {/* <div className="w-2 h-5 bg-primary mr-2"></div> */}
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About Us", "Destinations", "Latest Blog", "Our Team", "Contact Us"].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300 flex items-center">
                    {/* <span className="h-1 w-2 bg-primary mr-2 opacity-0 group-hover:opacity-100"></span> */}
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              {/* <div className="w-2 h-5 bg-primary mr-2"></div> */}
              Support
            </h3>
            <ul className="space-y-3">
              {["Customer Support", "Privacy Policy", "Terms & Conditions", "FAQ", "Trip Guides"].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              {/* <div className="w-2 h-5 bg-primary mr-2"></div> */}
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
            <form>
              <div className="flex mb-4 overflow-hidden">
                <motion.input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-md w-full focus:outline-none border-l-2 border-primary"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="submit" 
                    className="bg-blue-400 hover:bg-blue-400/90 text-white px-4 py-3 rounded-r-md"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </form>
            <p className="text-gray-400 text-sm">By subscribing, you agree to our Privacy Policy.</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Aresa Travels & Tours. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
