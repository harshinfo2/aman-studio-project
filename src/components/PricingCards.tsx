"use client";

import { Check, Info, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export type PackageType = "silver" | "gold" | "diamond";

interface PricingCardsProps {
  onSelectPackage?: (pkg: PackageType) => void;
}

const packages = [
  {
    id: "silver" as PackageType,
    name: "Silver Package",
    tagline: "Perfect for intimate celebrations",
    price: "29,000",
    coverage: "1 Short Function + Wedding",
    features: [
      "Traditional Photography & Videography",
      "25 Sheet Luxury Album",
      "Full video delivered on USB Pendrive",
      "One Cinematic Highlight Video",
      "One Portrait Photoframe (12x18)",
      "1 Customized Studio Mug",
    ],
    accent: false,
  },
  {
    id: "gold" as PackageType,
    name: "Gold Package",
    tagline: "Lucknow's favorite choice for complete coverage",
    price: "51,000",
    coverage: "2 Short Functions + Wedding",
    features: [
      "Traditional Photography + Videography",
      "Cinematic Videography + Candid Photography (FOR WEDDING)",
      "50 Sheet Premium Album with Special Cover",
      "One Highlight Video + Cinematic Teaser + 2 Reels",
      "One Portrait Photoframe (16x24)",
      "2 Customized Studio Mugs",
    ],
    accent: true,
  },
  {
    id: "diamond" as PackageType,
    name: "Diamond Package",
    tagline: "The ultimate luxury multi-day coverage",
    price: "99,000",
    coverage: "Engagement + 2 Short Functions + Wedding",
    features: [
      "ENGAGEMENT: Cinematic Videography, Traditional Photography & Videography, Highlight & Teaser",
      "WEDDING: Traditional Photography & Videography, Cinematic Videography + Candid Photography",
      "Drone Coverage & LED Wall Integration",
      "60 Sheet Luxury Album with Custom Special Cover",
      "One Full Highlight Video + Cinematic Teaser + 2 Social Media Reels",
      "One Premium Portrait Photoframe (20x30)",
      "2 Customized Studio Mugs",
    ],
    accent: false,
  },
];

export default function PricingCards({ onSelectPackage }: PricingCardsProps) {
  const handleBook = (pkgId: PackageType) => {
    if (onSelectPackage) {
      onSelectPackage(pkgId);
      // Smooth scroll to contact
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/contact?package=${pkgId}`;
    }
  };

  return (
    <section id="pricing-section" className="bg-studio-black py-20 border-b border-gold-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
            Pricing Plans
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-studio-offwhite font-bold">
            Cinematic Wedding Packages
          </h2>
          <div className="w-16 h-0.5 bg-gold-accent mx-auto mt-2"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden border ${
                pkg.accent
                  ? "bg-studio-darkgray border-gold-accent/70 border-gold-glow scale-100 lg:scale-[1.03] z-10"
                  : "bg-studio-darkgray/55 border-gold-accent/15"
              }`}
            >
              {/* Highlight ribbon for Gold */}
              {pkg.accent && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-gold-accent to-gold-muted text-studio-black text-[10px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-bl-xl">
                  Most Popular
                </div>
              )}

              <div>
                {/* Header */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
                    {pkg.coverage}
                  </span>
                  <h3 className="font-serif text-2xl text-studio-offwhite font-bold">{pkg.name}</h3>
                  <p className="text-xs text-studio-gray">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 py-4 border-y border-gold-accent/10 mb-6">
                  <span className="text-sm font-semibold text-gold-accent">₹</span>
                  <span className="text-4xl font-serif font-bold text-gold-gradient tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-studio-gray">/- Net Price</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs md:text-sm text-studio-offwhite/90">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center flex-shrink-0 text-gold-accent">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => handleBook(pkg.id)}
                  className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    pkg.accent
                      ? "bg-gradient-to-r from-gold-accent to-gold-muted text-studio-black hover:scale-[1.02] border-gold-glow"
                      : "bg-transparent text-gold-accent border border-gold-accent/40 hover:border-gold-accent hover:bg-gold-accent/5"
                  }`}
                >
                  Select & Inquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer / Note */}
        <div className="mt-12 flex items-center justify-center gap-2 text-studio-gray text-xs">
          <Info className="w-4 h-4 text-gold-accent" />
          <p className="italic">*Terms and Conditions Applied. Outstation travels, stay, and food packages are charged separately.</p>
        </div>

      </div>
    </section>
  );
}
