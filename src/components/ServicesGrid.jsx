import { Snowflake, Wrench, Building2, Droplets, ShieldCheck } from 'lucide-react';

const baseServices = [
  {
    key: 'ac',
    title: 'Air Conditioners',
    desc: 'Split, window, and VRF systems — sales, installation, gas charging, and maintenance.',
    icon: Snowflake,
    perks: ['Same-day repair', 'Genuine parts', 'Seasonal service plans'],
  },
  {
    key: 'refrigerator',
    title: 'Refrigerators & Freezers',
    desc: 'Domestic and commercial units — diagnostics, compressor, thermostat, leaks.',
    icon: ShieldCheck,
    perks: ['On-site fix', 'Warranty support', 'Door-to-door pickup'],
  },
  {
    key: 'coldrooms',
    title: 'Cold Rooms',
    desc: 'Design, build, and service for walk-in cold rooms and deep freezers.',
    icon: Building2,
    perks: ['Custom sizes', 'Energy efficient', '24/7 monitoring'],
  },
  {
    key: 'dispensers',
    title: 'Water Dispensers',
    desc: 'Hot and cold dispensers — filters, taps, and cooling module repairs.',
    icon: Droplets,
    perks: ['Filter plans', 'Quick swap parts', 'Affordable AMC'],
  },
];

export default function ServicesGrid({ serviceStatus }) {
  const services = baseServices.filter((s) => serviceStatus[s.key]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Our Services</h3>
          <p className="text-white/70 mt-1">Sales, installation, and expert repair with transparent pricing.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-white/70">
          <Wrench className="size-5" />
          <span>Certified technicians</span>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ key, title, desc, icon: Icon, perks }) => (
          <div key={key} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="size-11 rounded-lg bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <Icon className="size-6" />
              </div>
              <span className="text-xs text-white/50">Available</span>
            </div>
            <h4 className="mt-4 text-lg font-semibold">{title}</h4>
            <p className="mt-1 text-sm text-white/70 flex-1">{desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan-300" /> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
