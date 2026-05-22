"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const YoutubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [showLogoPopup, setShowLogoPopup] = useState(false);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Wedding Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <footer className="bg-studio-black border-t border-gold-accent/15 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Brand details */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                {/* Logo — opens popup on click */}
                <button
                  onClick={() => setShowLogoPopup(true)}
                  className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-accent/30 flex-shrink-0 cursor-pointer hover:border-gold-accent hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-110"
                  aria-label="View Aman Studio Logo"
                >
                  <Image
                    src="/logo.png"
                    alt="Aman Studio Logo"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </button>
                {/* Brand text — links to home */}
                <Link href="/" className="flex flex-col group">
                  <span className="font-serif text-2xl tracking-wider text-gold-gradient font-bold group-hover:opacity-80 transition-opacity duration-300">
                    Aman Digital Studio
                  </span>
                  <span className="text-xs uppercase tracking-widest text-studio-gray">
                    Capturing Your Eternal Moments Since 2002
                  </span>
                </Link>
              </div>
              <p className="text-sm text-studio-gray max-w-sm">
                Lucknow&apos;s premier cinematic photography and videography studio, providing high-end memory crafting services across generations.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://youtube.com/@amanstudio2002?si=BRdYwNQFRmleODMC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-accent/30 flex items-center justify-center text-studio-offwhite hover:text-gold-accent hover:border-gold-accent transition-all duration-300 hover:scale-105"
                  aria-label="YouTube Channel"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/amandigitalstudio2002?igsh=ZmZsbWVxcm54bm1v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-accent/30 flex items-center justify-center text-studio-offwhite hover:text-gold-accent hover:border-gold-accent transition-all duration-300 hover:scale-105"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-gold-accent tracking-wider font-semibold">
                Explore
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-studio-gray hover:text-gold-accent transition-colors duration-300 tracking-wide block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-gold-accent tracking-wider font-semibold">
                Studio Location
              </h3>
              <div className="space-y-3 text-sm text-studio-gray">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Daya Market, near B.R. Gop School, Baldev Vihar, Telibagh, Lucknow, UP - 226002
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-accent flex-shrink-0" />
                  <a href="tel:+919305898644" className="hover:text-gold-accent transition-colors duration-300">
                    +91 9305898644
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gold-accent/10 my-8"></div>

          {/* Copyright Area */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-studio-gray text-center">
            <p>
              &copy; {new Date().getFullYear()} Aman Digital Studio. All rights reserved.
            </p>
            <p className="flex items-center gap-1 justify-center">
              Crafted with <Heart className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" /> in Lucknow
            </p>
          </div>
        </div>
      </footer>

      {/* Logo Popup / Lightbox Modal */}
      <AnimatePresence>
        {showLogoPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-studio-black/90 backdrop-blur-md p-6"
            onClick={() => setShowLogoPopup(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setShowLogoPopup(false)}
              className="absolute top-6 right-6 text-studio-offwhite hover:text-gold-accent transition-colors z-50 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-studio-darkgray/80 border border-gold-accent/20 hover:border-gold-accent"
              aria-label="Close Logo Preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Logo Image */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gold-accent/50 shadow-[0_0_60px_rgba(212,175,55,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/logo.png"
                alt="Aman Studio Logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                priority
              />
            </motion.div>

            {/* Brand text below logo */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="absolute bottom-16 text-center space-y-2"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-gold-accent font-bold tracking-wider">
                Aman Digital Studio
              </h3>
              <p className="text-xs uppercase tracking-widest text-studio-gray">
                Telibagh, Lucknow &bull; Since 2002
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
