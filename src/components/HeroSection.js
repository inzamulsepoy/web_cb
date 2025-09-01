"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("Websites That Don’t Just Look Good—They Perform.");
  const [handsMeet, setHandsMeet] = useState(false);

  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
  const clapSoundRef = useRef(null);

  const defaultText = "Websites That Don’t Just Look Good—They Perform.";
  const seoText = "🎯 Get a Free SEO Audit";

  // ✅ Stable typing effect
  const typeText = (text) => {
    setTypedText("");
    [...text].forEach((char, i) => {
      setTimeout(() => {
        setTypedText((prev) => prev + char);
      }, i * 50);
    });
  };

  // Confetti at clicked hand
  const launchConfetti = (ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { x, y },
    });
  };

  // Right Hand → Easter Egg
  const triggerEasterEgg = () => {
    typeText(seoText);
    launchConfetti(rightHandRef);

    setTimeout(() => {
      typeText(defaultText);
    }, 3000);
  };

  // Left Hand → Clap Animation
  const triggerHandsMeet = () => {
    setHandsMeet(true);

    // Play clap sound
    if (clapSoundRef.current) {
      clapSoundRef.current.currentTime = 0;
      clapSoundRef.current.play();
    }

    // Confetti from both hands
    launchConfetti(leftHandRef);
    launchConfetti(rightHandRef);

    // Reset after 1.5s
    setTimeout(() => {
      setHandsMeet(false);
    }, 1500);
  };

  // ✅ Variants for smooth switching
  const leftHandVariants = {
    idle: {
      y: [0, -15, 0],
      rotate: [0, -5, 0, 5, 0],
      transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
    },
    meet: {
      x: "150%", // move relative to own position
      y: "-30%",
      scale: [1, 1.2, 0.9, 1], // bounce
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const rightHandVariants = {
    idle: {
      y: [0, 15, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 },
    },
    meet: {
      x: "-150%",
      y: "30%",
      scale: [1, 1.2, 0.9, 1], // bounce
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="hero" className="w-full flex justify-center px-2 sm:px-4,py-2 lg:px-6, py-4">
      {/* Navbar stays on top but doesn’t overlap hero */}
      <div className="fixed top-0 left-0 w-full z-20 bg-transparent">
        <Navbar />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[1600px] min-h-[600px] lg:min-h-[750px] 
        bg-[#0A0A0A] rounded-[25px] shadow-xl flex flex-col justify-center items-center 
        px-6 sm:px-10 lg:px-20 overflow-hidden pt-24 sm:pt-28 lg:pt-32" // 👈 pushes content below navbar
      >
        {/* Left Hand */}
        <motion.div
          ref={leftHandRef}
          variants={leftHandVariants}
          animate={handsMeet ? "meet" : "idle"}
          className="absolute bottom-6 left-4 sm:left-10 w-[100px] sm:w-[160px] lg:w-[200px] cursor-pointer z-10"
          onClick={triggerHandsMeet}
        >
          <Image src="/images/hero_section/left_hand.png" alt="Left Hand" width={200} height={160} />
        </motion.div>

        {/* Right Hand */}
        <motion.div
          ref={rightHandRef}
          variants={rightHandVariants}
          animate={handsMeet ? "meet" : "idle"}
          className="absolute top-6 right-4 sm:right-10 w-[100px] sm:w-[160px] lg:w-[200px] cursor-pointer z-10"
          onClick={triggerEasterEgg}
        >
          <Image src="/images/hero_section/right_hand.png" alt="Right Hand" width={200} height={160} />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          animate={handsMeet ? { opacity: 0.4, scale: 0.95 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative z-0 flex flex-col items-center text-center justify-center flex-1 px-4 max-w-[800px] mx-auto"
        >
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 leading-snug">
            {typedText}
          </h1>

          <h2 className="text-gray-300 text-base sm:text-lg lg:text-xl font-normal mb-6">
            From startups to enterprises — we build websites that scale and convert
          </h2>

          <div className="flex flex-row gap-4 justify-center flex-wrap">
            <Link
              href="#build"
              className="px-6 py-2 bg-[#FF0046] text-white rounded-md hover:bg-pink-700 text-sm sm:text-base font-medium"
            >
              Let’s Build Your Website
            </Link>
            <Link
              href="#quote"
              className="px-6 py-2 bg-[#0046FF] text-white rounded-md hover:bg-blue-700 text-sm sm:text-base font-medium"
            >
              Get a Free Quote
            </Link>
          </div>
        </motion.div>

        {/* Clap Sound */}
        <audio ref={clapSoundRef} src="/sounds/clap.mp3" preload="auto" />
      </motion.div>
    </section>
  );
}
