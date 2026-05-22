"use client";

import { useState } from "react";
import PricingCards from "@/components/PricingCards";
import { Check, HelpCircle, Calculator, Sparkles } from "lucide-react";

export default function PackagesPage() {
  // Calculator state
  const [functions, setFunctions] = useState(1);
  const [candidPhoto, setCandidPhoto] = useState(false);
  const [cinematicVideo, setCinematicVideo] = useState(false);
  const [drone, setDrone] = useState(false);
  const [ledWall, setLedWall] = useState(false);
  const [albumSheets, setAlbumSheets] = useState(25);

  // Constants for pricing calculation
  const BASE_PRICE = 15000;
  const FUNCTION_COST = 8000;
  const CANDID_PHOTO_COST = 12000;
  const CINEMATIC_VIDEO_COST = 15000;
  const DRONE_COST = 10000;
  const LED_WALL_COST = 8000;
  const ALBUM_SHEET_STEP_COST = 3000; // per 10 sheets above 25

  // Calculate estimated price
  const calculateEstimate = () => {
    let price = BASE_PRICE;
    price += (functions - 1) * FUNCTION_COST;
    if (candidPhoto) price += CANDID_PHOTO_COST;
    if (cinematicVideo) price += CINEMATIC_VIDEO_COST;
    if (drone) price += DRONE_COST;
    if (ledWall) price += LED_WALL_COST;
    if (albumSheets > 25) {
      price += Math.ceil((albumSheets - 25) / 10) * ALBUM_SHEET_STEP_COST;
    }
    return price;
  };

  const handleCustomInquiry = () => {
    const additions = [];
    if (candidPhoto) additions.push("Candid Photography");
    if (cinematicVideo) additions.push("Cinematic Videography");
    if (drone) additions.push("Drone Coverage");
    if (ledWall) additions.push("LED Wall Integration");

    const message = `Hello Aman Digital Studio,\n\nI used your Custom Package Calculator and would like to inquire about this setup:\n\n*Short Functions:* ${functions}\n*Album Sheets:* ${albumSheets} sheets\n*Add-ons:* ${additions.length > 0 ? additions.join(", ") : "None"}\n*Estimated Quote:* ₹${calculateEstimate().toLocaleString()}/-\n\nPlease confirm availability for booking.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919305898644?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-studio-black min-h-screen pb-20">
      
      {/* Banner */}
      <div className="relative py-20 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] border-b border-gold-accent/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
            Pricing Plans & Options
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-studio-offwhite font-bold tracking-tight">
            Cinematic Packages
          </h1>
          <p className="text-studio-gray text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Transparent packages for every wedding style. Compare our pre-built plans or estimate your customized photography packages using the calculator below.
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <PricingCards />

      {/* Detailed Package Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-studio-offwhite font-bold">Package Comparisons</h2>
          <p className="text-xs text-studio-gray mt-1">Review the core differences in detail</p>
        </div>

        <div className="overflow-x-auto border border-gold-accent/10 rounded-xl bg-studio-darkgray/35">
          <table className="w-full border-collapse text-left text-sm text-studio-offwhite">
            <thead>
              <tr className="border-b border-gold-accent/15 bg-studio-darkgray/80 text-xs uppercase tracking-widest text-gold-accent font-bold">
                <th className="p-4 md:p-6">Features</th>
                <th className="p-4 md:p-6 text-center">Silver</th>
                <th className="p-4 md:p-6 text-center">Gold</th>
                <th className="p-4 md:p-6 text-center">Diamond</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-accent/10">
              <tr className="hover:bg-studio-darkgray/30 transition-colors">
                <td className="p-4 md:p-6 font-semibold">Functions Covered</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">1 short function + wedding</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">2 short functions + wedding</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Engagement + 2 short functions + wedding</td>
              </tr>
              <tr className="hover:bg-studio-darkgray/30 transition-colors">
                <td className="p-4 md:p-6 font-semibold">Photography Style</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Traditional Photography</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Traditional + Candid Photography (Wedding)</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Traditional + Candid (Engagement & Wedding)</td>
              </tr>
              <tr className="hover:bg-studio-darkgray/30 transition-colors">
                <td className="p-4 md:p-6 font-semibold">Videography Style</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Traditional Videography</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Traditional + Cinematic Videography (Wedding)</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Traditional + Cinematic (Engagement & Wedding)</td>
              </tr>
              <tr className="hover:bg-studio-darkgray/30 transition-colors">
                <td className="p-4 md:p-6 font-semibold">Album Sheets</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">25 sheets</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">50 sheets with Special Cover</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">60 sheets with Special Custom Cover</td>
              </tr>
              <tr className="hover:bg-studio-darkgray/30 transition-colors">
                <td className="p-4 md:p-6 font-semibold">Deliverables</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Full video on Pendrive, 1 Highlight video, 12x18 Frame, 1 Mug</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Full video, Highlight, Teaser, 2 Reels, 16x24 Frame, 2 Mugs</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">Full video, Highlight, Teaser, 2 Reels, 20x30 Frame, 2 Mugs</td>
              </tr>
              <tr className="hover:bg-studio-darkgray/30 transition-colors">
                <td className="p-4 md:p-6 font-semibold">Aerial & Tech Add-ons</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">-</td>
                <td className="p-4 md:p-6 text-center text-studio-gray text-xs">-</td>
                <td className="p-4 md:p-6 text-center text-gold-accent text-xs font-semibold">Drone Coverage + LED Wall</td>
              </tr>
              <tr className="hover:bg-studio-darkgray/30 transition-colors">
                <td className="p-4 md:p-6 font-semibold">Pricing</td>
                <td className="p-4 md:p-6 text-center text-gold-accent font-bold font-serif">₹29,000</td>
                <td className="p-4 md:p-6 text-center text-gold-accent font-bold font-serif">₹51,000</td>
                <td className="p-4 md:p-6 text-center text-gold-accent font-bold font-serif">₹99,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Custom Quote Calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border border-gold-accent/15 rounded-2xl bg-studio-darkgray/40 border-gold-glow">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-6 h-6 text-gold-accent" />
          <h2 className="font-serif text-2xl text-studio-offwhite font-bold">Custom Package Calculator</h2>
        </div>
        <p className="text-xs text-studio-gray mb-8">
          Not finding exactly what you need? Adjust the settings below to compute a customizable estimate.
        </p>

        <div className="space-y-6">
          {/* Number of Short Functions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-xs uppercase tracking-widest text-studio-offwhite font-bold mb-1">
                Number of Short Functions
              </label>
              <span className="text-[11px] text-studio-gray">Haldi, Mehendi, Cocktail nights (₹8,000 each)</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFunctions(Math.max(1, functions - 1))}
                className="w-10 h-10 rounded-full border border-gold-accent/20 bg-studio-black text-gold-accent text-lg flex items-center justify-center cursor-pointer hover:border-gold-accent transition-colors"
              >
                -
              </button>
              <span className="text-lg font-bold text-studio-offwhite w-8 text-center">{functions}</span>
              <button
                onClick={() => setFunctions(functions + 1)}
                className="w-10 h-10 rounded-full border border-gold-accent/20 bg-studio-black text-gold-accent text-lg flex items-center justify-center cursor-pointer hover:border-gold-accent transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Album Sheets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-xs uppercase tracking-widest text-studio-offwhite font-bold mb-1">
                Album Photo Sheets
              </label>
              <span className="text-[11px] text-studio-gray">Base: 25 sheets (₹3,000 per 10 additional sheets)</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="25"
                max="100"
                step="5"
                value={albumSheets}
                onChange={(e) => setAlbumSheets(parseInt(e.target.value))}
                className="w-full accent-gold-accent bg-studio-black rounded-lg h-1.5 cursor-pointer"
              />
              <span className="text-sm font-bold text-studio-offwhite w-20 text-right">{albumSheets} Sheets</span>
            </div>
          </div>

          {/* Checklist additions */}
          <div className="border-t border-gold-accent/10 pt-6 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gold-accent font-bold mb-3">Add-on Coverages</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-3 rounded-lg border border-gold-accent/10 bg-studio-black/45 cursor-pointer hover:border-gold-accent/30 transition-colors">
                <input
                  type="checkbox"
                  checked={candidPhoto}
                  onChange={(e) => setCandidPhoto(e.target.checked)}
                  className="rounded text-gold-accent focus:ring-gold-accent accent-gold-accent w-4 h-4"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-studio-offwhite">Candid Photography (+₹12,000)</span>
                  <span className="text-[10px] text-studio-gray">High-end candid captures on wedding day</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg border border-gold-accent/10 bg-studio-black/45 cursor-pointer hover:border-gold-accent/30 transition-colors">
                <input
                  type="checkbox"
                  checked={cinematicVideo}
                  onChange={(e) => setCinematicVideo(e.target.checked)}
                  className="rounded text-gold-accent focus:ring-gold-accent accent-gold-accent w-4 h-4"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-studio-offwhite">Cinematic Videography (+₹15,000)</span>
                  <span className="text-[10px] text-studio-gray">Movie-style trailers and professional teaser</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg border border-gold-accent/10 bg-studio-black/45 cursor-pointer hover:border-gold-accent/30 transition-colors">
                <input
                  type="checkbox"
                  checked={drone}
                  onChange={(e) => setDrone(e.target.checked)}
                  className="rounded text-gold-accent focus:ring-gold-accent accent-gold-accent w-4 h-4"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-studio-offwhite">Drone Aerial Coverage (+₹10,000)</span>
                  <span className="text-[10px] text-studio-gray">Cinematic 4K drone videography of venue and rituals</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg border border-gold-accent/10 bg-studio-black/45 cursor-pointer hover:border-gold-accent/30 transition-colors">
                <input
                  type="checkbox"
                  checked={ledWall}
                  onChange={(e) => setLedWall(e.target.checked)}
                  className="rounded text-gold-accent focus:ring-gold-accent accent-gold-accent w-4 h-4"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-studio-offwhite">LED Wall Venue Feed (+₹8,000)</span>
                  <span className="text-[10px] text-studio-gray">Live broadcast stream on physical LED displays</span>
                </div>
              </label>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="border-t border-gold-accent/10 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-studio-black/60 p-6 rounded-xl border border-dashed border-gold-accent/25">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-studio-gray">Estimated Price Quote</p>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-sm font-semibold text-gold-accent">₹</span>
                <span className="text-3xl font-serif font-bold text-gold-gradient tracking-tight">
                  {calculateEstimate().toLocaleString()}
                </span>
                <span className="text-xs text-studio-gray">/- Net Price*</span>
              </div>
            </div>

            <button
              onClick={handleCustomInquiry}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-accent to-gold-muted text-studio-black font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-lg shadow-gold-accent/10"
            >
              <Sparkles className="w-4 h-4" />
              Inquire Custom Quote via WhatsApp
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
