import { motion } from "motion/react";

export function Galeri() {
  const images = [
    { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&q=80&w=600", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?auto=format&fit=crop&q=80&w=600", span: "md:col-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600", span: "md:col-span-2 md:row-span-2" },
  ];

  return (
    <div className="min-h-screen pt-16 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
           <span className="inline-block mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Dokumentasi 3 Tahun</span>
           <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tighter text-kt-black mb-6">GALERI KARYA</h1>
           <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
             Potret kebersamaan, semangat kolaborasi, dan aksi-aksi pengabdian nyata sejak 2023.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
           {images.map((img, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.span}`}
             >
                <img 
                  src={img.src} 
                  alt={`Galeri ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" 
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-kt-green/20 rounded-3xl transition-colors pointer-events-none z-10" />
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
