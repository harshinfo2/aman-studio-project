"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    alt: "Luxury wedding ceremony ceremony setting in Lucknow",
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    alt: "Beautiful Indian bride and groom sharing a cinematic moment",
  },
  {
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    alt: "Aman Digital Studio professional camera setup filming a wedding",
  },
  {
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    alt: "Elegant detail shot of couple hands holding during wedding rituals",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-studio-black overflow-hidden pt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-accent/30 bg-gold-accent/5 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse"></span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-gold-accent font-semibold">
                Est. 2002 • Lucknow
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-studio-offwhite leading-tight"
            >
              Capturing Your <br />
              <span className="text-gold-gradient font-bold">Eternal Moments</span> <br />
              Since 2002
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-studio-gray text-base md:text-lg leading-relaxed max-w-xl"
            >
              Lucknow&apos;s premier cinematic photography & videography studio. Trusted by generations near B.R. Gop School, Telibagh to preserve precious wedding vows and portraits.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/contact">
                <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-accent to-gold-muted text-studio-black font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:scale-105 hover:border-gold-glow transition-all duration-300 shadow-lg shadow-gold-accent/15">
                  Book A Shoot
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-3.5 rounded-full border border-studio-offwhite/20 hover:border-gold-accent hover:text-gold-accent bg-transparent text-studio-offwhite font-bold uppercase tracking-wider text-xs transition-all duration-300">
                  View Portfolio
                </button>
              </Link>
            </motion.div>

            {/* Microstats banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-studio-darkgray"
            >
              <div>
                <p className="font-serif text-2xl md:text-3xl text-gold-accent font-bold">20+</p>
                <p className="text-[10px] uppercase tracking-widest text-studio-gray">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl text-gold-accent font-bold">1500+</p>
                <p className="text-[10px] uppercase tracking-widest text-studio-gray">Weddings Shot</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl text-gold-accent font-bold">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-studio-gray">Happy Clients</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Rotating cinematic image frame */}
          <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden border border-gold-accent/20 border-gold-glow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={slides[currentSlide].url}
                  alt={slides[currentSlide].alt}
                  fill
                  priority
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Vignette and overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-studio-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-studio-black/25 via-transparent to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Indicators */}
            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-6 bg-gold-accent" : "w-1.5 bg-studio-offwhite/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Subtle camera frame elements for luxury details */}
            <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-gold-accent/60 tracking-wider">
              REC ● [RAW 4K 60FPS]
            </div>
            <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-gold-accent/60 tracking-wider">
              ISO 400
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 md:mt-16">
          <motion.button
            onClick={() => {
              const portfolioSection = document.getElementById("portfolio-showcase");
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-studio-gray hover:text-gold-accent transition-colors duration-300"
          >
            <span className="text-[9px] uppercase tracking-widest">Scroll Down</span>
            <ChevronDown className="w-5 h-5 text-gold-accent" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
