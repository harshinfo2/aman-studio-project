"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import PricingCards, { PackageType } from "@/components/PricingCards";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType | "custom" | "">("");

  return (
    <div className="relative">
      <Hero />
      <PortfolioShowcase limit={9} />
      <PricingCards onSelectPackage={setSelectedPackage} />
      <ContactForm initialPackage={selectedPackage} />
    </div>
  );
}

