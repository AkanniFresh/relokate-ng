import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { setupSmoothScrolling } from "../lib/smoothScroll";
import SubpageMobileNav from "./SubpageMobileNav";


export default function SubpageNavbar() {
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
        scrolled ? "py-2 shadow-md" : "py-3"
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
              className="w-10 md:w-12 lg:w-16"
              src="./logos/aresa-amber-logo.png"
              alt=""
            />
            </a>
            </Link>
          </motion.div>

          <nav className="space-x-6 text-sm font-semibold text-slate-900 uppercase hidden lg:block">
            <Link href="/home">
            <a className="relative group px-2 py-1">
              HOME
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-blue-400 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
            <Link href="/fullcategories">
            <a className="relative group px-2 py-1">
              CATEGORIES
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-blue-400 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
            <Link href="/home">
            <a className="relative group px-2 py-1">
              ABOUT US
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-blue-400 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
            <Link href="/fullpopulartours">
            <a className="relative group px-2 py-1">
              TOURS
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-blue-400 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
             <Link href="/home">
            <a className="relative group px-2 py-1">
              TESTIMONIALS
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-blue-400 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
            <Link href="/home">
            <a className="relative group px-2 py-1">
              BLOG
              <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-blue-400 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            </Link>
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
                className="relative overflow-hidden px-4 py-2 rounded-sm bg-blue-400 text-white font-semibold transition-all duration-300 group hidden lg:block"
              >
                <span className="absolute inset-0 bg-gray-800 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  BOOK A CONSULTATION
                </span>
              </Button>
              </a>
              </Link>

            </motion.div>

            <button className="lg:hidden text-gray-900">
              <SubpageMobileNav />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
