"use client"; // Ye zaroori hai, framer-motion ke liye

import { motion } from "framer-motion";

export default function FloatingMotif() {
  return (
    <motion.img
      src="/patterns/bg1.png"
      alt="Floating Mehndi Motif"
      className="fixed top-0 left-0 w-64 h-64 opacity-40 pointer-events-none"
    />
  );
}
