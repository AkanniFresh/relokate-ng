import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { setupSmoothScrolling } from "../lib/smoothScroll";
// import FormFill from "./FormFill";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [showForm, setShowForm] = useState(false);

  // Add scroll event listener to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const closeMenu = () => {
  //   if (isMenuOpen) setIsMenuOpen(false);
  // };

  // const handleToggle = () => {
  //   setShowForm((prev) => !prev);
  // };

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white shadow-sm transition-all duration-300 ${
        scrolled ? "py-3 shadow-md" : "py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/home">
            <a>
            <img
              className="max-w-[150px]"
              src="/logos/relokate-logo.png"
              // alt="w-20 md:w-20 lg:w-28"
            />
            </a>
            </Link>
          </motion.div>

          <nav className="space-x-6 text-sm font-semibold text-slate-900 hidden lg:block">
            <a href="#hero" className="relative group px-2 py-1">
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-[#203864] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            <Link href="/fullcategories">
            <a className="relative group px-2 py-1">
              Categories
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-[#203864] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
            <Link href="/aboutuspage">
            <a className="relative group px-2 py-1">
              About Us
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-[#203864] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
            <Link href="fullpopulartours">
            <a className="relative group px-2 py-1">
              Tours
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-[#203864] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
            <Link href="fullgallerypage">
            <a className="relative group px-2 py-1">
              Testimonials
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-[#203864] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
            <a href="#blog" className="relative group px-2 py-1">
              Blog
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-[#203864] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/consultation">
              <a>
              <Button
                // onClick={handleToggle}
                className="relative overflow-hidden px-4 py-2 rounded-sm bg-[#203864] text-white font-semibold transition-all duration-300 group hidden lg:block"
              >
                <span className="absolute inset-0 bg-gray-800 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  BOOK A CONSULTATION
                </span>
              </Button>
              </a>
              </Link>

              {/* {showForm && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute z-10 top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black/50 px-2"
                  id="form-fill"
                >
                  <div
                    onClick={() => {
                      const form = document.getElementById("form-fill");
                      if (form) {
                        form.classList.toggle("hidden");
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="white"
                      className="bi bi-x-circle-fill cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                  </div>
                  <FormFill />
                </motion.div>
              )} */}
            </motion.div>

            <button className="lg:hidden text-gray-900">
              <MobileNavbar />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
