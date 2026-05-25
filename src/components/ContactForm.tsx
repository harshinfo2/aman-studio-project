"use client";

import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageSquare, Send, Calendar, CheckSquare } from "lucide-react";
import { PackageType } from "./PricingCards";

const YoutubeIcon = ({ className = "w-4 h-4 text-gold-accent" }: { className?: string }) => (
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

const InstagramIcon = ({ className = "w-4 h-4 text-gold-accent" }: { className?: string }) => (
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

interface ContactFormProps {
  initialPackage?: PackageType | "custom" | "";
}

export default function ContactForm({ initialPackage = "" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<string>("");
  const [requests, setRequests] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // Update selected package when initialPackage changes from parent component (e.g. click from pricing cards)
  useEffect(() => {
    if (initialPackage) {
      setSelectedPkg(initialPackage);
    }
  }, [initialPackage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !date || !selectedPkg) {
      setStatusMessage("Please fill out all required fields.");
      return;
    }

    setStatusMessage("");

    // Create formatted WhatsApp message
    const message = `Hello Aman Digital Studio,\n\nI would like to inquire about booking a shoot with you!\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Event Date:* ${date}\n*Selected Package:* ${selectedPkg.toUpperCase()}\n*Special Requests:* ${requests || "None"}\n\nThank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919305898644?text=${encodedMessage}`;
    
    // Redirect user to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact-section" className="bg-studio-charcoal py-20 border-b border-gold-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-studio-offwhite font-bold">
            Book Your Shoot
          </h2>
          <div className="w-16 h-0.5 bg-gold-accent mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-gold-accent font-semibold">Contact Information</h3>
              <p className="text-sm text-studio-gray leading-relaxed">
                Have questions about custom packages, pricing, or availability? Drop us a message or visit our studio in Lucknow.
              </p>
            </div>

            {/* Contact Badges */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-studio-darkgray/40 border border-gold-accent/10">
                <div className="w-10 h-10 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-studio-gray">Phone & WhatsApp</p>
                  <a href="tel:+919305898644" className="text-sm font-semibold hover:text-gold-accent transition-colors">
                    +91 9305898644
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-studio-darkgray/40 border border-gold-accent/10">
                <div className="w-10 h-10 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-studio-gray">Studio Address</p>
                  <p className="text-sm font-semibold leading-relaxed">
                    Daya Market, near B.R. Gop School, Baldev Vihar, Telibagh, Lucknow, Uttar Pradesh 226002
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://youtube.com/@amanstudio2002?si=BRdYwNQFRmleODMC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gold-accent/20 bg-studio-darkgray/50 hover:bg-gold-accent/10 hover:border-gold-accent transition-all duration-300 text-xs tracking-wider uppercase font-semibold text-studio-gray hover:text-studio-offwhite"
                >
                  <YoutubeIcon className="w-4 h-4 text-gold-accent" />
                  YouTube
                </a>
                <a
                  href="https://www.instagram.com/amandigitalstudio2002?igsh=ZmZsbWVxcm54bm1v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gold-accent/20 bg-studio-darkgray/50 hover:bg-gold-accent/10 hover:border-gold-accent transition-all duration-300 text-xs tracking-wider uppercase font-semibold text-studio-gray hover:text-studio-offwhite"
                >
                  <InstagramIcon className="w-4 h-4 text-gold-accent" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gold-accent/15 border-gold-glow relative">
              <iframe
                src="https://maps.google.com/maps?q=AMAN%20DIGITAL%20STUDIO%20,%20Telibagh%20,%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: React Hook Form */}
          <div className="lg:col-span-7 bg-studio-darkgray/50 border border-gold-accent/15 rounded-2xl p-8 md:p-10">
            <div className="space-y-2 mb-8">
              <h3 className="font-serif text-2xl text-studio-offwhite font-bold">Booking Inquiry Form</h3>
              <p className="text-xs text-studio-gray">We will customize our setups to matches your wedding scale perfectly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-xs uppercase tracking-widest text-studio-gray font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 bg-studio-black/60 border border-gold-accent/15 focus:border-gold-accent rounded-lg text-sm text-studio-offwhite placeholder:text-studio-gray/50 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Phone & Date grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-studio-gray font-semibold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-4 py-3 bg-studio-black/60 border border-gold-accent/15 focus:border-gold-accent rounded-lg text-sm text-studio-offwhite placeholder:text-studio-gray/50 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-xs uppercase tracking-widest text-studio-gray font-semibold">
                    Event Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 bg-studio-black/60 border border-gold-accent/15 focus:border-gold-accent rounded-lg text-sm text-studio-offwhite focus:outline-none transition-colors duration-300 [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* Selected Package dropdown */}
              <div className="space-y-2">
                <label htmlFor="package" className="block text-xs uppercase tracking-widest text-studio-gray font-semibold">
                  Select Package *
                </label>
                <select
                  id="package"
                  required
                  value={selectedPkg}
                  onChange={(e) => setSelectedPkg(e.target.value)}
                  className="w-full px-4 py-3 bg-studio-black/60 border border-gold-accent/15 focus:border-gold-accent rounded-lg text-sm text-studio-offwhite focus:outline-none transition-colors duration-300"
                >
                  <option value="" disabled className="bg-studio-darkgray text-studio-gray">
                    Choose a Package
                  </option>
                  <option value="silver" className="bg-studio-darkgray text-studio-offwhite">
                    Silver Package (₹29,000)
                  </option>
                  <option value="gold" className="bg-studio-darkgray text-studio-offwhite">
                    Gold Package (₹51,000)
                  </option>
                  <option value="diamond" className="bg-studio-darkgray text-studio-offwhite">
                    Diamond Package (₹99,000)
                  </option>
                  <option value="custom" className="bg-studio-darkgray text-studio-offwhite">
                    Custom Shoot (Pre-Wed / Portrait / Outstation)
                  </option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label htmlFor="requests" className="block text-xs uppercase tracking-widest text-studio-gray font-semibold">
                  Special Requests / Details
                </label>
                <textarea
                  id="requests"
                  rows={4}
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  placeholder="Tell us about your event theme, locations, outstation details or special requests..."
                  className="w-full px-4 py-3 bg-studio-black/60 border border-gold-accent/15 focus:border-gold-accent rounded-lg text-sm text-studio-offwhite placeholder:text-studio-gray/50 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className="text-xs text-gold-accent font-semibold transition-opacity duration-300">
                  {statusMessage}
                </div>
              )}

              {/* Action Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-gold-accent to-gold-muted hover:border-gold-glow hover:scale-[1.01] text-studio-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
