import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../components/ui/button";

interface Step {
  title: string;
  content: string;
}

const steps: Step[] = [
  {
    title: "Submit your interest",
    content:
      "Tell us where you want to study or work, and what your goals are. We’ll assess your options and start building your personalized roadmap.",
  },
  {
    title: "Get personalized guidance",
    content:
      "Our experts will recommend the best institutions or job programs tailored to your background, preferences, and long-term goals.",
  },
  {
    title: "Prepare documents",
    content:
      "We’ll guide you step-by-step on preparing your application documents including your CV, statement of purpose, transcripts, and reference letters",
  },
  {
    title: "Apply to programs or jobs",
    content:
      "Once your documents are ready, we’ll assist you in submitting strong applications to institutions or employers in the UK, Europe, Canada, and more.",
  },
  {
    title: "Get support until arrival",
    content:
      "From visa processing to travel tips and settling in, our team will support you through every stage right up to your arrival abroad.",
  },
];

const HowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
       <div className="w-20 h-1 bg-[#203864] mx-auto mt-4 rounded-full mb-8"></div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium focus:outline-none"
            >
              <span>{step.title}</span>
              <motion.span
                initial={false}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="px-4 pb-4 text-md text-gray-600 bg-white"
                >
                  {step.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center my-8 space-x-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/consultation">
            <a>
              <Button
                // onClick={handleToggle}
                className="relative overflow-hidden px-4 py-2 rounded-sm bg-[#203864] text-white font-semibold transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-gray-800 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Get in touch
                </span>
              </Button>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
