import { useEffect, useMemo, useState } from 'react';
import { Phone } from 'lucide-react';
import Hero3D from './components/Hero3D';
import ServicesGrid from './components/ServicesGrid';
import ProductHighlight from './components/ProductHighlight';
import AdminPanel from './components/AdminPanel';

function App() {
  const [bannerText, setBannerText] = useState('Fast, reliable AC & refrigeration sales and repair — 24/7 support');
  const [serviceStatus, setServiceStatus] = useState({
    ac: true,
    refrigerator: true,
    coldrooms: true,
    dispensers: true,
  });
  const [adminOpen, setAdminOpen] = useState(false);

  // Load saved settings
  useEffect(() => {
    const savedBanner = localStorage.getItem('bannerText');
    const savedStatus = localStorage.getItem('serviceStatus');
    if (savedBanner) setBannerText(savedBanner);
    if (savedStatus) {
      try {
        const parsed = JSON.parse(savedStatus);
        setServiceStatus((prev) => ({ ...prev, ...parsed }));
      } catch {}
    }
  }, []);

  // Persist settings
  useEffect(() => {
    localStorage.setItem('bannerText', bannerText);
  }, [bannerText]);

  useEffect(() => {
    localStorage.setItem('serviceStatus', JSON.stringify(serviceStatus));
  }, [serviceStatus]);

  const activeServices = useMemo(() => {
    return Object.fromEntries(Object.entries(serviceStatus).filter(([, v]) => v));
  }, [serviceStatus]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
              <span className="text-cyan-300 font-bold">AR</span>
            </div>
            <div>
              <p className="text-sm text-white/70 leading-none">Arctic Repair Co.</p>
              <h1 className="text-base font-semibold tracking-tight">AC, Refrigeration & Cold Rooms</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-colors">
              <Phone className="size-4" /> Call Now
            </a>
            <button onClick={() => setAdminOpen(true)} className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-sm">Owner</button>
          </div>
        </div>
      </header>

      <main>
        <Hero3D bannerText={bannerText} />
        <section id="services" className="relative">
          <ServicesGrid serviceStatus={serviceStatus} />
        </section>
        <section id="products" className="relative">
          <ProductHighlight activeServices={activeServices} />
        </section>
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8 text-sm text-white/70">
          <div>
            <p className="font-semibold text-white">Arctic Repair Co.</p>
            <p className="mt-1">ACs, Refrigerators, Cold Rooms & Dispensers — sales, installation, and repair.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Contacts</p>
            <p className="mt-1">Phone: +1 (234) 567-890</p>
            <p>Email: support@arcticrepair.example</p>
          </div>
          <div>
            <p className="font-semibold text-white">Hours</p>
            <p className="mt-1">Mon–Sat: 8:00–20:00</p>
            <p>Emergency support: 24/7</p>
          </div>
        </div>
      </footer>

      <AdminPanel
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        bannerText={bannerText}
        setBannerText={setBannerText}
        serviceStatus={serviceStatus}
        setServiceStatus={setServiceStatus}
      />
    </div>
  );
}

export default App;
