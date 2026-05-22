"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Wedding Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-accent/40 group-hover:border-gold-accent transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  <Image
                    src="/logo.png"
                    alt="Aman Studio Logo"
                    fill
                    className="object-cover"
                    sizes="48px"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-wider text-gold-gradient font-bold leading-tight">
                    Aman Studio
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-studio-gray">
                    Telibagh, Lucknow
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm tracking-widest uppercase transition-colors duration-300 font-medium ${
                      isActive ? "text-gold-accent" : "text-studio-offwhite/80 hover:text-gold-accent"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-accent to-gold-muted"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Book a Shoot CTA */}
            <div className="hidden md:block">
              <Link href="/contact">
                <button className="relative px-6 py-2 rounded-full border border-gold-accent bg-transparent text-xs uppercase tracking-widest text-gold-accent font-semibold overflow-hidden group transition-all duration-300 hover:text-studio-black hover:border-gold-accent hover:border-gold-glow">
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold-accent to-gold-muted transition-all duration-300 ease-out group-hover:w-full -z-10"></span>
                  Book a Shoot
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-studio-offwhite hover:text-gold-accent transition-colors duration-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-studio-black/95 border-b border-gold-accent/20 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-base tracking-widest uppercase border-b border-studio-darkgray transition-colors duration-300 ${
                        isActive ? "text-gold-accent pl-2 font-semibold" : "text-studio-offwhite/70 hover:text-gold-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-2">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-3 rounded-md bg-gradient-to-r from-gold-accent to-gold-muted text-studio-black font-bold uppercase tracking-wider text-xs">
                      Book a Shoot
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to prevent header from covering elements (except home pages which may have full-bleed hero) */}
      <div className={`${pathname === "/" ? "h-0" : "h-20"}`}></div>
    </>
  );
}
