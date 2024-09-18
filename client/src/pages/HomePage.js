import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="home-banner">
        <h1>Nayan Punamiya</h1>
        <h2>Full Stack Web Developer</h2>
      </section>
      {/* Add sections for About, Skills, and Projects */}
    </motion.div>
  );
};

export default HomePage;
