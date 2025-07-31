'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-10 md:p-16 max-w-3xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-6">
          Unleash the Power of{' '}
          <span className="text-indigo-400">AI-Driven Marketing 🚀</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          ADmyBRAND AI Suite helps brands scale faster with smarter, automated campaigns
          tailored by real-time intelligence.
        </p>
        <button className="inline-flex items-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-lg text-lg">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
