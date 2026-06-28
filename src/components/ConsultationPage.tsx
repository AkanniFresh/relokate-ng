import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { motion } from "framer-motion";
import FormFill from "./FormFill";
import BookingHeroSection from "./BookingHeroSection";
import MotivationSection from "./MotivationSection";
import SubpageNavbar from "./SubpageNavbar";
// import { Form } from "react-hook-form";

export default function ConsultationPage() {
   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, []);
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
    <div className="font-sans text-gray-900 staticBg">
      <SubpageNavbar />

      <section className="relative">
        <BookingHeroSection />

        <svg
            className="absolute bottom-0 left-0 h-24 md:h-24 lg:h-28 xl:h-40 2xl:h-48 w-full"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 283.5 27.8"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              className="elementor-shape-fill"
              fill="white"
              d="M282.7 3.4c-2 3.8-2.2 6.6-1.8 10.8.3 3.3 2 8.5.4 11.6-1.4 2.6-4 2.5-5-.2-1.2-3.4.3-7.6.5-11.1.3-4.3-2.9-6.9-7.4-5.8-3.1.7-4.1 3.3-4.3 6.2-.2 2 1.2 8-.1 9.6-3.1 4.3-2.5-4.5-2.5-5.2.1-4-.1-9.6-4.1-11.6-4.5-2.3-6.1 1-5.5 5 .2 1.4 1.5 10.2-2.7 6.9-2.5-1.9.4-7.5-.9-10.3-.8-1.8-2.6-4.2-4.8-4.1-2.4.1-2.7 2.2-4 3.7-3.3 3.8-2.2-1.2-4.8-2.7-5.5-3.1-2 5.6-2.9 7.3-1.4 2.4-3.1.6-3.3-1.3-.1-1.5.5-3.1.4-4.6-.3-4.3-2.9-5.3-5.2-1.2-3.7 6.7-2.8-1.9-6.5-.4-3 1.1-.9 9.2-.6 11.1.7 4.1-2.2 5.2-2.7.8-.4-3.6 2.8-10.2.8-13.4-2.1-3.3-6.7-.1-7.9 2.4-2.1 4.2-.4 8.7 0 13.1.2 2-.8 8.9-3.8 4.8-3.1-4.3 2.5-11.6.2-16.3-1.1-2.2-5.8-3.5-7.2-1-.8 1.4 1 3.4.3 4.8s-2.2 1.2-2.8-.3c-.8-2.1 2.2-4.8-.1-6.5-1.3-.9-3.5.3-4.9.5-2.4-.1-3.3 0-4.5 2-.7 1.2-.4 3-2.3 2.1-1.9-.8-1.7-4.3-4.1-4.9-2.1-.6-4 1.3-5.1 2.9-.9 1.4-1.3 3-1.3 4.6 0 1.9 1.4 4.2.3 6-2.4 4.2-4.2-2.2-3.8-4.4.5-2.9 2-7.7-2.7-7.5-5.2.3-6.1 5.8-6.4 9.8-.1 1.3 1.5 10.4-2 8.4-1.8-1-.5-7.5-.6-9.1-.1-3.5-1.6-8.3-6.3-7.1-7.6 1.9 2.1 18.2-4.8 18.7-3.7.3-2.3-6.2-2-8.1.5-3.1.5-11.4-5.5-8.5-2.2 1.1-1 2.3-1.3 4.3-.2 1.8-1.3 3.2-2.3.8-1.1-2.5.8-6.7-3.9-6.6-8 .1-.7 16.4-4.8 15.8-2.8-.4-1-9.3-1.3-11.3-.6-3.5-3.5-7.8-7.8-6.9-4.4.9-1.4 6.5-1.4 9.1 0 3.1-3.4 5.9-4.4 1.7-.5-2.2.9-4.4.6-6.6-.3-1.9-1.5-4.1-3.2-5.2-5.3-3.4-4.9 5.2-8.1 4.5-1.4-.3-3-8.1-6.1-4.1-.7.9 2 10.3-2.2 8-2-1.1-.1-6.7-.7-8.9-1.8-6.2-4.7 2.3-6.1 3.1-2.9 1.7-4.6-6.2-6.3-.6-.5 1.7-.4 3.7-.2 5.4.2 1.6 1.5 4.6 1 6.1-.6 1.8-1.7 1.7-2.6.3-1-1.6-.4-4.5-.2-6.2.3-2.5 2.4-8.4-.2-10.3-3.1-2.1-6.8 2.1-7.7 4.5-1.5 4.3.3 8.7.5 13 .1 3.2-3 7.5-4.3 2.4-.6-2.4.2-5.1.6-7.4.4-2.3 1.2-6-.1-8.1-1.2-1.9-5.8-2.7-7-.5-.9 1.6 1.2 5.2-.6 5.6-2.4.6-2-2.3-1.8-3.4.3-1.5 1.1-3.2-.4-4.3-1.2-.9-4.7.3-5.9.5-2.4.5-2.5 1.4-3.6 3.3-1.2 2.1-1.4 1.7-3-.1-1.3-1.5-1.7-3.6-4-3.7-1.8-.1-3.4 1.7-4.2 3-1.4 2.2-1.3 4.1-1 6.5.2 1.4 1 3.8-.5 4.9-3.9 2.9-3.2-4.6-2.9-6.3.8-3.9-.4-8.1-5.4-5.6-3.8 1.9-4.1 6.7-4.1 10.5 0 1.6 1.2 5.8-.1 6.9-.8.7-1.8.3-2.4-.5-1.1-1.5.1-6.7 0-8.5-.1-3.5-.9-6.9-4.9-7.4-3.6-.6-6.7 1.2-6.8 4.9-.1 3.9 2 8.2.6 12-.9 2.4-2.9 2.9-4.6.9-2.4-2.8-.4-9 0-12.3.4-4.2.2-7-1.8-10.8C1.1 2.8.6 2.1 0 1.4v26.4h283.5V2.2c-.3.4-.6.8-.8 1.2z"
            ></path>
          </svg>
      </section>

      <section
      className="bg-gray-200 px-4 py-10">
        <AnimateOnScroll animation="fadeIn">
          <FormFill />
        </AnimateOnScroll>
      </section>

      <section>
        <AnimateOnScroll animation="fadeIn">
          <MotivationSection />
        </AnimateOnScroll>
      </section>

      {/* <section id="gallery">
        <AnimateOnScroll animation="staggered" staggerChildren={0.1}>
          <Gallery />
        </AnimateOnScroll>
      </section> */}

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
    </div>
  );
}
