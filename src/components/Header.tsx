import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users, HeartHandshake } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/tentang" },
  { name: "Program Kerja", path: "/program" },
  { name: "Kegiatan", path: "/kegiatan" },
  { name: "UMKM Pemuda", path: "/umkm" },
  { name: "Galeri", path: "/galeri" },
  { name: "Berita", path: "/berita" },
  { name: "Pengurus", path: "/pengurus" },
  { name: "Dokumen", path: "/dokumen" },
  { name: "Kontak", path: "/kontak" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/5">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 relative group">
          <div className="w-10 h-10 bg-kt-green rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-5 h-5 border-2 border-white rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-sm tracking-tight text-kt-green uppercase">Karang Taruna Sarinagen</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Berkarya, Berdaya, Mengabdi</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "px-2 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:text-kt-green",
                    location.pathname === link.path ? "text-kt-green" : "text-gray-500"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
           <Link to="/kontak" className="text-xs font-bold uppercase tracking-wider border-2 border-gray-200 text-kt-black hover:bg-gray-100 transition-colors px-4 py-2.5 rounded-lg">
              Hubungi
           </Link>
           <Link to="/relawan" className="text-xs font-bold uppercase tracking-wider bg-kt-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-all">
              Relawan
           </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-kt-green transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-5rem)]">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                   location.pathname === link.path ? "bg-kt-green/10 text-kt-green" : "text-gray-700 hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
               <Link to="/kontak" className="w-full text-center py-3 text-kt-green font-medium rounded-lg border border-kt-green/20 hover:bg-kt-green/5 transition-colors">
                  Hubungi Kami
               </Link>
               <Link to="/relawan" className="w-full text-center py-3 bg-kt-green text-white font-medium rounded-lg hover:bg-kt-green-dark transition-colors shadow-md shadow-kt-green/20">
                  Gabung Relawan
               </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
