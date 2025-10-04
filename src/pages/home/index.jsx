import React from "react";
import { motion } from "framer-motion";
import Hero from "./sections/Hero";
import AboutProduct from "./sections/AboutProduct";
import AboutInnovator from "./sections/AboutInnovator";
import Showcase from "./sections/Showcase";
import Contact from "./sections/Contact";
import Testimonial from "./sections/Testimonial";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutProduct />
      <Showcase />
      <AboutInnovator />
      <Testimonial />
      <Contact />
    </motion.div>
  );
};

export default Home;


