import PortfolioShowcase from "@/components/PortfolioShowcase";

export default function PortfolioPage() {
  return (
    <div className="bg-studio-black min-h-screen">
      {/* Banner Header */}
      <div className="relative py-20 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] border-b border-gold-accent/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
            Discover Our Work
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-studio-offwhite font-bold tracking-tight">
            The Studio Portfolio
          </h1>
          <p className="text-studio-gray text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Take a walk through our timeless captures. From romantic pre-weddings along Gomti Riverfront to regal wedding vows and studio portraits.
          </p>
        </div>
      </div>

      {/* Render the core portfolio filter container */}
      <PortfolioShowcase showSearch={true} />
    </div>
  );
}
