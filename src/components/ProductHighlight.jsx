import { Snowflake, Droplets } from 'lucide-react';

export default function ProductHighlight({ activeServices }) {
  const showAC = !!activeServices.ac;
  const showDisp = !!activeServices.dispensers;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        {showAC && (
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-900/30 to-slate-900/40">
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(600px 200px at 20% 10%, rgba(34,211,238,0.25), transparent), radial-gradient(600px 200px at 80% 90%, rgba(59,130,246,0.15), transparent)'
            }} />
            <div className="p-6 md:p-8 relative">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-200 text-xs font-medium">
                <Snowflake className="size-4" /> Summer Bestsellers
              </div>
              <h4 className="mt-3 text-2xl font-bold">Inverter ACs with 5-star efficiency</h4>
              <p className="mt-2 text-white/80">Lower noise, lower bills. Professional installation included with every purchase.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md bg-white/10 text-sm">1.0 / 1.5 / 2.0 Ton</span>
                <span className="px-2 py-1 rounded-md bg-white/10 text-sm">Copper condenser</span>
                <span className="px-2 py-1 rounded-md bg-white/10 text-sm">Free site survey</span>
              </div>
              <a href="tel:+1234567890" className="mt-6 inline-block px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors">Get pricing</a>
            </div>
          </div>
        )}

        {showDisp && (
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-900/30 to-slate-900/40">
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(500px 200px at 80% 20%, rgba(125,211,252,0.22), transparent), radial-gradient(400px 200px at 10% 80%, rgba(56,189,248,0.16), transparent)'
            }} />
            <div className="p-6 md:p-8 relative">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-200 text-xs font-medium">
                <Droplets className="size-4" /> Office Favorite
              </div>
              <h4 className="mt-3 text-2xl font-bold">Hot & Cold Water Dispensers</h4>
              <p className="mt-2 text-white/80">Easy filter replacements and quick service turnaround. Perfect for homes and offices.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md bg-white/10 text-sm">Child lock</span>
                <span className="px-2 py-1 rounded-md bg-white/10 text-sm">Low noise</span>
                <span className="px-2 py-1 rounded-md bg-white/10 text-sm">Annual maintenance</span>
              </div>
              <a href="tel:+1234567890" className="mt-6 inline-block px-4 py-2 rounded-lg bg-sky-400 text-black font-semibold hover:bg-sky-300 transition-colors">Enquire now</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
