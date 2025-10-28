import Spline from '@splinetool/react-spline';
import { Phone, Wrench } from 'lucide-react';

export default function Hero3D({ bannerText }) {
  return (
    <section className="relative h-[85vh] md:h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/30 to-neutral-950/80" />

      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-200 text-xs font-medium mb-4">
            <span className="size-2 rounded-full bg-cyan-300 animate-pulse" /> Cold specialists
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight drop-shadow">Keep it cool. We sell, install, and repair — fast.</h2>
          <p className="mt-4 text-white/80 text-lg">{bannerText}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors">
              <Phone className="size-5" /> Call for a quote
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition-colors">
              <Wrench className="size-5" /> See services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
