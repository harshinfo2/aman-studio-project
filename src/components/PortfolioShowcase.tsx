"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, X, ZoomIn, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export type PortfolioItem = {
  id: string;
  category: "weddings" | "prewed" | "photoshoots" | "films";
  title: string;
  type: "image" | "video";
  url: string;
  youtubeId?: string;
  description: string;
};

const staticItems: PortfolioItem[] = [];

const categories = [
  { id: "all", label: "All Works" },
  { id: "weddings", label: "Weddings" },
  { id: "prewed", label: "Pre-Wed" },
  { id: "photoshoots", label: "Photoshoots" },
  { id: "films", label: "Cinematic Films" },
];

interface PortfolioProps {
  limit?: number;
  showSearch?: boolean;
}

export default function PortfolioShowcase({ limit, showSearch = false }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState<PortfolioItem[]>(staticItems);

  // Fetch dynamic YouTube videos
  useEffect(() => {
    async function fetchYouTube() {
      try {
        const res = await fetch("/api/youtube");
        if (res.ok) {
          const ytVideos = await res.json();
          if (Array.isArray(ytVideos) && ytVideos.length > 0) {
            // Prepend new youtube videos, then append static fallback items (avoiding duplicate IDs if any)
            setItems((prev) => {
              const staticFiltered = prev.filter(p => !ytVideos.some((yt: any) => yt.id === p.id));
              return [...ytVideos, ...staticFiltered];
            });
          }
        }
      } catch (error) {
        console.error("Failed to load dynamic portfolio:", error);
      }
    }
    fetchYouTube();
  }, []);

  // Filter logic
  let filteredItems = items;
  if (activeTab !== "all") {
    filteredItems = filteredItems.filter((item) => item.category === activeTab);
  }
  if (searchTerm.trim() !== "") {
    const q = searchTerm.toLowerCase();
    filteredItems = filteredItems.filter(
      (item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
    );
  }

  // Apply limit for home page
  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section id="portfolio-showcase" className="bg-studio-charcoal py-20 border-b border-gold-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
            Visual Storytelling
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-studio-offwhite font-bold">
            Interactive Portfolio
          </h2>
          <div className="w-16 h-0.5 bg-gold-accent mx-auto mt-2"></div>
        </div>

        {/* Search Bar (Only shown if requested) */}
        {showSearch && (
          <div className="max-w-md mx-auto mb-10 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-studio-gray" />
            </div>
            <input
              type="text"
              placeholder="Search shoots, locations, or videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-studio-darkgray/60 border border-gold-accent/20 focus:border-gold-accent rounded-full text-sm text-studio-offwhite placeholder:text-studio-gray/50 focus:outline-none transition-colors duration-300"
            />
          </div>
        )}

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                activeTab === category.id
                  ? "bg-gradient-to-r from-gold-accent to-gold-muted text-studio-black shadow-md shadow-gold-accent/15"
                  : "bg-studio-darkgray/60 text-studio-gray hover:text-gold-accent border border-gold-accent/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {displayedItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center bg-studio-darkgray/30 rounded-2xl border border-gold-accent/10"
          >
            <h3 className="font-serif text-2xl text-studio-offwhite font-bold mb-3">Coming Soon</h3>
            <p className="text-studio-gray text-sm max-w-md mx-auto">
              We are currently curating our best work for this category. Check back shortly to see our latest updates!
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer aspect-[4/3] rounded-xl overflow-hidden border border-gold-accent/10 bg-studio-darkgray"
                onClick={() => setSelectedItem(item)}
              >
                {/* Thumbnail image */}
                {item.url && (
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300"></div>

                {/* Content details overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] text-gold-accent uppercase tracking-widest font-semibold">
                    {item.category === "weddings" ? "Wedding" : item.category === "prewed" ? "Pre-Wedding" : item.category === "films" ? "Cinematic Film" : "Photoshoot"}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-studio-offwhite font-bold group-hover:text-gold-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-studio-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 max-w-xs line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Indicator icon */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-studio-black/75 border border-gold-accent/30 flex items-center justify-center text-gold-accent scale-75 group-hover:scale-100 transition-transform duration-300">
                  {item.type === "video" ? (
                    <Play className="w-3.5 h-3.5 fill-gold-accent" />
                  ) : (
                    <ZoomIn className="w-4 h-4" />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        )}

        {/* View All Button for Home Page */}
        {limit && displayedItems.length >= limit && (
          <div className="mt-16 text-center">
            <Link href="/portfolio">
              <button className="relative px-8 py-3 rounded-full border border-gold-accent bg-transparent text-xs uppercase tracking-widest text-gold-accent font-semibold overflow-hidden group transition-all duration-300 hover:text-studio-black">
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold-accent to-gold-muted transition-all duration-300 ease-out group-hover:w-full -z-10"></span>
                View Full Portfolio
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox / Playback Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-studio-black/95 p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-studio-offwhite hover:text-gold-accent transition-colors z-50 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-studio-darkgray/80 border border-gold-accent/20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-gold-accent/20 border-gold-glow bg-studio-darkgray flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem?.type === "video" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedItem?.youtubeId}?autoplay=1`}
                  title={selectedItem?.title ?? "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedItem?.url ?? ""}
                    alt={selectedItem?.title ?? ""}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                  {/* Title and details at bottom of lightbox */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-studio-black/90 to-transparent">
                    <span className="text-[10px] text-gold-accent uppercase tracking-widest font-semibold">
                      {selectedItem?.category}
                    </span>
                    <h3 className="font-serif text-xl text-studio-offwhite font-bold">
                      {selectedItem?.title}
                    </h3>
                    <p className="text-sm text-studio-gray mt-1">
                      {selectedItem?.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
