"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 600; // fallback
      if (window.scrollY > heroHeight - 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 items-center px-6 lg:px-12 py-4">
        {/* Left Nav */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium justify-start">
          <Link href="#services" className="hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="#pricing" className="hover:text-gray-300 transition">
            Pricing / Plans
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/logo/codingboltnew.png"
            alt="Codingbolt Logo"
            width={180}
            height={45}
            className="object-contain"
          />
        </div>

        {/* Right Nav */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium justify-end">
          <Link href="#about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="#more" className="hover:text-gray-300 transition">
            More
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden justify-end col-span-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 text-base font-medium border-t border-gray-800 animate-slideDown">
          <Link href="#services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="#pricing" className="hover:text-gray-300">
            Pricing / Plans
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#more" className="hover:text-gray-300">
            More
          </Link>
        </div>
      )}
    </nav>
  );
}
