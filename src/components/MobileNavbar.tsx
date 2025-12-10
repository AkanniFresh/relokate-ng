// MobileNavbar.tsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { Link } from "wouter";

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button onClick={toggleMenu} className="p-4 z-50">
        <span className="text-xl font-bold bg-black text-white px-3 py-1 rounded-sm">
          ☰
        </span>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 w-full h-full flex flex-col p-6"
          >
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={closeMenu}
                className="w-10 h-10 border rounded-full flex items-center justify-center text-2xl"
              >
                <FiX />
              </button>
            </div>

            {/* Menu content */}
            <nav className="mt-10 space-y-6">
              <a href="#home" className="text-gray-600 block border-b border-gray-300 py-3">
                HOME
              </a>
              <Link href="fullcategories"  className="text-gray-600 block border-b border-gray-300 py-3">
              <a
                onClick={toggleMenu}
              >
                CATEGORIES
              </a>
              </Link>
              <Link href="aboutuspage" className="text-gray-600 block border-b border-gray-300 py-3">
              <a
                onClick={toggleMenu}
              >
                ABOUT US
              </a>
              </Link>
              <Link href="fullpopulartours" className="text-gray-600 block border-b border-gray-300 py-3">
              <a
                onClick={toggleMenu}
              >
                TOURS
              </a>
              </Link>
              <a
                href="#testimonials"
                className="text-gray-600 block border-b border-gray-300 py-3"
                onClick={toggleMenu}
              >
                TESTIMONIALS
              </a>
              <a
                href="#blog"
                className="text-gray-600 block border-b border-gray-300 py-3"
                onClick={toggleMenu}
              >
                BLOG
              </a>
              <Link href="/consultation">
                <a>
                  <button
                    onClick={toggleMenu}
                    className="mt-8 bg-[#203864] text-white font-bold py-3 px-6 rounded-md w-fit"
                  >
                    BOOK A CONSULTATION
                  </button>
                </a>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
