"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PackageType } from "@/components/PricingCards";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Where is Aman Digital Studio located?",
    answer: "We are located at Daya Market, near B.R. Gop School, Baldev Vihar, Telibagh, Lucknow, Uttar Pradesh 226002. You can easily find us on Google Maps using the map on our website.",
  },
  {
    question: "Do you cover outstation weddings outside Lucknow?",
    answer: "Yes, we travel all over India for destination and outstation weddings. Outstation packages include the base packages plus actual travel, boarding, and lodging expenses for our crew.",
  },
  {
    question: "What is your turnaround time for photos and videos?",
    answer: "We deliver full-size digital raw selection photos within 7 days. Highlight cinematic teasers and reels are completed within 3-4 weeks. The final customized printed sheets, luxury covers, and finalized pen drives are handed over within 8-12 weeks.",
  },
  {
    question: "How do we confirm our booking dates?",
    answer: "We require a 25% non-refundable advance booking payment to secure your dates in our calendar. 50% is payable on the event days, and the remaining 25% is due upon final album/deliverables handover.",
  },
  {
    question: "Can we customize the album styles and covers?",
    answer: "Absolutely! Our Gold and Diamond packages include premium/special covers (acrylic, leatherette, or wooden boxes). We showcase a variety of samples at our studio so you can select the texture and paper finish you prefer.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12 space-y-3">
        <HelpCircle className="w-8 h-8 text-gold-accent mx-auto" />
        <h2 className="font-serif text-3xl text-studio-offwhite font-bold">Frequently Asked Questions</h2>
        <div className="w-12 h-0.5 bg-gold-accent mx-auto"></div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl border border-gold-accent/10 bg-studio-darkgray/30 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left text-sm md:text-base font-semibold text-studio-offwhite hover:text-gold-accent transition-colors duration-300 focus:outline-none"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gold-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold-accent flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 border-t border-gold-accent/5 text-xs md:text-sm text-studio-gray leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const pkg = (searchParams.get("package") || "") as PackageType | "custom" | "";

  return (
    <div className="bg-studio-black min-h-screen">
      {/* Banner */}
      <div className="relative py-20 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] border-b border-gold-accent/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
            Let&apos;s Connect
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-studio-offwhite font-bold tracking-tight">
            Contact & Location
          </h1>
          <p className="text-studio-gray text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Ready to frame your special occasion? Write to us, call us, or schedule an in-person consultation at our studio in Telibagh.
          </p>
        </div>
      </div>

      {/* Render the contact form component */}
      <ContactForm initialPackage={pkg} />

      {/* FAQ Section */}
      <FAQAccordion />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-studio-black text-gold-accent">
        <span className="animate-pulse tracking-widest uppercase text-xs">Loading Details...</span>
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}
