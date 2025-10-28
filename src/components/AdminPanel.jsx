import { useEffect, useState } from 'react';
import { Lock, LogIn, LogOut, Settings } from 'lucide-react';

const OWNER_PASSWORD = 'owner@123';

export default function AdminPanel({ isOpen, onClose, bannerText, setBannerText, serviceStatus, setServiceStatus }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [localBanner, setLocalBanner] = useState(bannerText);

  useEffect(() => {
    setLocalBanner(bannerText);
  }, [bannerText, isOpen]);

  useEffect(() => {
    const remembered = sessionStorage.getItem('ownerLoggedIn');
    if (remembered === 'true') setLoggedIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === OWNER_PASSWORD) {
      setLoggedIn(true);
      sessionStorage.setItem('ownerLoggedIn', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem('ownerLoggedIn');
  };

  const toggleService = (key) => {
    setServiceStatus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const saveBanner = () => {
    setBannerText(localBanner);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="absolute right-0 top-0 h-full w-full max-w-xl bg-neutral-950 border-l border-white/10 shadow-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Settings className="size-5 text-cyan-300" />
            <h3 className="font-semibold">Owner Panel</h3>
          </div>
          <div className="flex items-center gap-2">
            {loggedIn ? (
              <button onClick={handleLogout} className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 border border-white/15">
                <LogOut className="size-4" /> Logout
              </button>
            ) : (
              <span className="text-white/60 text-xs">Locked</span>
            )}
            <button onClick={onClose} className="text-white/70 hover:text-white text-sm">Close</button>
          </div>
        </div>

        {!loggedIn ? (
          <form onSubmit={handleLogin} className="p-6">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Lock className="size-4" /> Owner access only
            </div>
            <label className="block text-sm mt-4 mb-1 text-white/80">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter owner password"
              className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:border-cyan-400/60"
            />
            <button type="submit" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 text-black font-semibold hover:bg-cyan-400">
              <LogIn className="size-4" /> Login
            </button>
            <p className="mt-3 text-xs text-white/50">Demo password: owner@123 (client-side only)</p>
          </form>
        ) : (
          <div className="p-6 space-y-8 overflow-y-auto h-[calc(100%-57px)]">
            <section>
              <h4 className="font-semibold">Homepage Banner</h4>
              <p className="text-sm text-white/70">Update the hero message shown over the 3D cover.</p>
              <textarea
                value={localBanner}
                onChange={(e) => setLocalBanner(e.target.value)}
                rows={3}
                className="mt-3 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:border-cyan-400/60"
              />
              <div className="mt-3 flex items-center gap-3">
                <button onClick={saveBanner} className="px-4 py-2 rounded-md bg-cyan-500 text-black font-semibold hover:bg-cyan-400">Save</button>
                <span className="text-xs text-white/60">Autosaves to your browser</span>
              </div>
            </section>

            <section>
              <h4 className="font-semibold">Toggle Services</h4>
              <p className="text-sm text-white/70">Enable or disable categories to show on the site.</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { key: 'ac', label: 'Air Conditioners' },
                  { key: 'refrigerator', label: 'Refrigerators' },
                  { key: 'coldrooms', label: 'Cold Rooms' },
                  { key: 'dispensers', label: 'Water Dispensers' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => toggleService(key)}
                    className={`text-left px-3 py-2 rounded-md border ${serviceStatus[key] ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 text-white/60'}`}
                  >
                    <div className="text-sm font-medium">{label}</div>
                    <div className="text-xs">{serviceStatus[key] ? 'Shown' : 'Hidden'}</div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
