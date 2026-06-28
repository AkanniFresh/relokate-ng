import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TourCategories from "../components/TourCategories";
import PopularTours from "../components/PopularTours";
import AboutAdventure from "../components/AboutAdventure";
import OffersSection from "../components/OffersSection";
import Testimonials from "../components/Testimonials";
import RecentArticles from "../components/RecentArticles";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { motion } from "framer-motion";
// import { Form } from "react-hook-form";

export default function Home() {
  // Add a scroll-to-top button that appears when scrolling down
  useEffect(() => {
    // Initialize a scroll observer for animations
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll-visible");
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Get all elements with the animation class
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      scrollObserver.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        scrollObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="categories">
        <AnimateOnScroll animation="slideUp">
          <TourCategories />
        </AnimateOnScroll>
      </section>
      
      <section id="tours">
        <AnimateOnScroll animation="fadeIn">
          <PopularTours />
        </AnimateOnScroll>
      </section>
      
      <section id="about">
        <AnimateOnScroll animation="slideRight">
          <AboutAdventure />
        </AnimateOnScroll>
      </section>
      
      <section id="offers">
        <AnimateOnScroll animation="zoomIn">
          <OffersSection />
        </AnimateOnScroll>
      </section>
      
      <section id="testimonials">
        <AnimateOnScroll animation="fadeIn">
          <Testimonials />
        </AnimateOnScroll>
      </section>
      
      <section id="blog">
        <AnimateOnScroll animation="slideUp">
          <RecentArticles />
        </AnimateOnScroll>
      </section>
      
      <section id="gallery">
        <AnimateOnScroll animation="staggered" staggerChildren={0.1}>
          <Gallery />
        </AnimateOnScroll>
      </section>
      
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
    </div>
  );
}
