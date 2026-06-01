import { Link } from "react-router-dom";
import { Users, HeartHandshake, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 mt-0 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="col-span-1 lg:col-span-1 border-r-0 lg:border-r border-black/5 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-4 relative group mb-6">
              <div className="w-10 h-10 bg-kt-green rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                <div className="w-5 h-5 border-2 border-white rotate-45"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xs tracking-tight text-kt-green uppercase">Karang Taruna Sarinagen</span>
              </div>
            </Link>
            <p className="text-gray-500 font-medium text-xs leading-relaxed mb-6">
              Organisasi sosial kepemudaan yang menjadi wadah pengembangan generasi muda dalam bidang sosial, ekonomi, pendidikan, dan pembangunan masyarakat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-6">Menu Cepat</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-kt-black hover:text-kt-green transition-colors text-xs font-bold uppercase tracking-wider">Beranda</Link></li>
              <li><Link to="/tentang" className="text-kt-black hover:text-kt-green transition-colors text-xs font-bold uppercase tracking-wider">Profil Kami</Link></li>
              <li><Link to="/program" className="text-kt-black hover:text-kt-green transition-colors text-xs font-bold uppercase tracking-wider">Program Kerja</Link></li>
              <li><Link to="/berita" className="text-kt-black hover:text-kt-green transition-colors text-xs font-bold uppercase tracking-wider">Berita & Artikel</Link></li>
              <li><Link to="/kontak" className="text-kt-black hover:text-kt-green transition-colors text-xs font-bold uppercase tracking-wider">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-6">Kontak Sekretariat</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <MapPin size={16} className="text-kt-gold shrink-0 mt-0.5" />
                <span className="text-xs font-semibold leading-relaxed text-kt-black">Jl. Raya Sarinagen No. 123,<br />Desa Sarinagen, Kec. Cipongkor,<br />Kab. Bandung Barat</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={16} className="text-kt-gold shrink-0" />
                <span className="text-xs font-semibold text-kt-black">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={16} className="text-kt-gold shrink-0" />
                <span className="text-xs font-semibold text-kt-black">halo@sarinagen.desa.id</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-6">Ikuti Kami</h4>
            <p className="text-xs font-medium text-gray-500 mb-6">Dapatkan update terbaru kegiatan pemuda.</p>
            <div className="flex items-center gap-4">
               <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-kt-black hover:bg-kt-green hover:border-kt-green hover:text-white transition-all">
                  <Instagram size={16} />
               </a>
               <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-kt-black hover:bg-kt-green hover:border-kt-green hover:text-white transition-all">
                  <Facebook size={16} />
               </a>
               <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-kt-black hover:bg-kt-green hover:border-kt-green hover:text-white transition-all">
                  <Youtube size={16} />
               </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center md:text-left">
              &copy; {new Date().getFullYear()} Karang Taruna Desa Sarinagen. All Rights Reserved.
           </p>
           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
             Berkarya, Berdaya, Mengabdi.
           </p>
        </div>
      </div>
    </footer>
  );
}
