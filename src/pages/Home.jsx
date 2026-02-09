import { motion }  from "framer-motion";

import Hero from "../components/home/Hero";
import { Features } from "../components/home/Features";
import { Stats } from "../components/home/Stats";
import { CTA } from "../components/home/CTA";
import Navbar from "../components/Navbar";
import Testi from "../components/home/Testi";

// Common animation variant
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Navbar Animation */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Hero */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <Hero />
      </motion.section>

      {/* Features */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Features />
      </motion.section>

      {/* Stats */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Stats />
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CTA />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Testi />
      </motion.section>
    </>
  );
}
