import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { useEffect } from "react";

export default function BookingHeroSection() {
  const COLORS_TOP = ["#13FFAA", "#579DF7", "#FC9F38", "#DD335C"];
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  function handleScrollDown() {
    window.scrollBy({
        top: 500,
        behavior: "smooth",
    }) 
  }

  // const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  // const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <section className="relative bg-gray-100 overflow-hidden h-[75vh]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img 
            src="./logos/bookingpix.jpg" 
            alt="Mountain view" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10 flex flex-col justify-center items-center h-[65vh]">
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
           YES! YOU'VE TAKEN THE RIGHT STEP
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Now Take Action
          </motion.h1>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.button 
             style={{
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            onClick={handleScrollDown}
              className="flex w-fit items-center gap-1.5 rounded-sm bg-[#203864] px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 uppercase font-semibold group text-sm"
              
            >
              SCROLL DOWN TO BOOK
              <FiArrowDown className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
