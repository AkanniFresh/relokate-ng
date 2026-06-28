import { useState, useEffect } from "react";
import { testimonials } from "../data/tourData";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import QuoteLeft from "./ui/QuoteLeft";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide]);
  
  // Window resize listener for responsive slider
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute -top-24 -right-24 w-48 h-48 bg-[#203864]/10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-16 -left-16 w-32 h-32 bg-amber-400/10 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">What they are talking about</h2>
          <div className="w-24 h-1 bg-[#203864] mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <motion.button 
              className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <motion.button 
              className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </motion.button>
          </div>
          
          <div className="overflow-hidden rounded-xl py-3.5">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (width >= 768 ? 33.333 : 100)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <motion.div 
                    className="bg-white rounded-lg shadow-md p-6 h-full relative border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    {/* Quote icon */}
                    <div className="absolute -top-3 -left-3 bg-[#203864] text-white rounded-full p-2 shadow-md">
                      <div className="h-5 w-5">
                      <QuoteLeft />
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 shadow-sm shadow-blue-800">
                        <motion.img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.15 }}
                        />
                      </div>
                      <div>
                        <div className="flex text-yellow-400 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(testimonial.rating) ? 'fill-yellow-400' : ''}`}
                            />
                          ))}
                        </div>
                        <p className="font-medium">{testimonial.name}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{testimonial.comment}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <motion.button 
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#203864]' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                animate={currentSlide === index ? { scale: [1, 1.2, 1] } : {}}
                transition={currentSlide === index ? { duration: 0.5, repeat: Infinity, repeatType: "reverse" } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
