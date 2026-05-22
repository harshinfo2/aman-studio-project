import Image from "next/image";
import Link from "next/link";
import { Camera, Calendar, Award, MapPin, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-studio-black min-h-screen pb-20">
      
      {/* Banner */}
      <div className="relative py-20 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] border-b border-gold-accent/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
            Our Story & Legacy
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-studio-offwhite font-bold tracking-tight">
            Aman Digital Studio
          </h1>
          <p className="text-studio-gray text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Crafting memories, framing emotions, and documenting weddings across generations in Lucknow since 2002.
          </p>
        </div>
      </div>

      {/* Grid Content: Story & Media */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual frame */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold-accent/15 border-gold-glow">
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
              alt="Aman Digital Studio behind the scenes photographer"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-studio-black/85 border border-gold-accent/20">
              <p className="text-xs uppercase tracking-widest text-gold-accent font-bold">Lucknow, India</p>
              <p className="text-sm font-serif text-studio-offwhite font-semibold mt-1">
                &ldquo;A camera is an instrument that teaches people how to see without a camera.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-studio-offwhite font-bold">
                Capturing Eternal Moments Since 2002
              </h2>
            </div>
            
            <p className="text-sm text-studio-gray leading-relaxed">
              Founded in 2002 in Telibagh, Lucknow, **Aman Digital Studio** was established on the simple belief that life&apos;s special chapters deserve to be captured beautifully. What started as a traditional film studio has evolved into a premier destination for cinematic wedding videography, candid photography, and professional studio portraits.
            </p>
            <p className="text-sm text-studio-gray leading-relaxed">
              For over two decades, we have been based near **B.R. Gop School in Baldev Vihar, Telibagh**. Our local roots run deep—we have shot weddings for parents, and subsequently, their children. This generational trust is our greatest pride and continues to inspire us to deliver highest quality cinematic albums.
            </p>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full border border-gold-accent/20 bg-studio-darkgray flex items-center justify-center text-gold-accent flex-shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-studio-offwhite font-bold">High-End Equipment</h3>
                  <p className="text-xs text-studio-gray mt-1">We utilize state-of-the-art dual-slot mirrorless systems, premium lenses, gimbal stabilizers, and 4K aerial drones.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full border border-gold-accent/20 bg-studio-darkgray flex items-center justify-center text-gold-accent flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-studio-offwhite font-bold">Experienced Team</h3>
                  <p className="text-xs text-studio-gray mt-1">Our photographers, candid artists, and cinematic editors possess a combined experience of over 30 years.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full border border-gold-accent/20 bg-studio-darkgray flex items-center justify-center text-gold-accent flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-studio-offwhite font-bold">Generational Trust</h3>
                  <p className="text-xs text-studio-gray mt-1">Trusted by thousands of families in Lucknow. Our reputation is built on reliability, prompt delivery, and attention to detail.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full border border-gold-accent/20 bg-studio-darkgray flex items-center justify-center text-gold-accent flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-studio-offwhite font-bold">Telibagh Landmark</h3>
                  <p className="text-xs text-studio-gray mt-1">Conveniently located at Daya Market near B.R. Gop School, making us highly accessible for consultations.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/contact">
                <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-accent to-gold-muted text-studio-black font-bold uppercase tracking-wider text-xs hover:scale-105 transition-transform duration-300">
                  Connect With Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
