
// import { Button } from "../components/ui/button";
// import { Search, MapPin, Plane, Filter, Play } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

export default function MotivationSection() {
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

  // const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <section className="relative overflow-hidden h-[50vh]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img 
            src="./logos/passbg.jpg" 
            alt="Mountain view" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-start h-[55vh]">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p 
            className="text-lg text-white opacity-90 mb-4 text-center tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
           Get the right coaching today!
          </motion.p>
          
          <motion.h1 
            className="text-2xl md:text-3xl lg:text-3xl font-bold text-white leading-tight mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          > <i>
           The world is full of places that change us. Travel not just to see new things but to become someone new.
           </i>
          </motion.h1>

        </motion.div>
      </div>
    </section>
  );
}
