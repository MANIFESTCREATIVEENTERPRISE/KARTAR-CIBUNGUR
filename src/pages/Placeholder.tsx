import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";
import { motion } from "motion/react";

export function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop() || 'Halaman';
  
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-12 pb-24">
       <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         className="text-center px-4 max-w-md"
       >
          <div className="w-24 h-24 bg-kt-gold/10 text-kt-gold rounded-full flex items-center justify-center mx-auto mb-8">
             <Construction size={40} />
          </div>
          <h1 className="font-heading text-3xl font-bold text-gray-900 mb-4 capitalize">
             {pageName.replace('-', ' ')}
          </h1>
          <p className="text-gray-600 mb-8">
             Halaman ini sedang dalam tahap pengembangan. Kami sedang menyiapkan konten terbaik untuk Anda. Silakan kembali lagi nanti.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-kt-green text-white font-medium rounded-full hover:bg-kt-green-dark transition-all">
             <ArrowLeft size={18} /> Kembali ke Beranda
          </Link>
       </motion.div>
    </div>
  );
}
