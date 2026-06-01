import { Newspaper, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Berita() {
  const articles = [
    { id: 1, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600", title: "Peluncuran Platform Pemasaran e-Commerce untuk UMKM Desa", date: "28 Mei 2026", cat: "Ekonomi" },
    { id: 2, img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=600", title: "Panen Raya Perdana Kelompok Tani Muda Sarinagen", date: "15 Mar 2026", cat: "Program" },
    { id: 3, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", title: "Karang Taruna Sarinagen Sabet Penghargaan Pemuda Pelopor 2025", date: "24 Nov 2025", cat: "Prestasi" },
    { id: 4, img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600", title: "Sukses Gelar Festival Pemuda Inovatif Tingkat Kecamatan", date: "12 Okt 2025", cat: "Event" },
    { id: 5, img: "https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?auto=format&fit=crop&q=80&w=600", title: "Aksi Bersih Sungai dan Penanaman 1000 Pohon", date: "05 Jun 2025", cat: "Sosial" },
    { id: 6, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", title: "Pelatihan Digital Marketing Bantu 50 UMKM Naik Kelas", date: "20 Mei 2025", cat: "Ekonomi" },
    { id: 7, img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600", title: "Menyongsong Indonesia Emas 2045 dari Desa", date: "28 Okt 2024", cat: "Opini" },
    { id: 8, img: "https://images.unsplash.com/photo-1593113514210-9b37c54defcf?auto=format&fit=crop&q=80&w=600", title: "Buka Jalur Komunikasi, Pemuda Buat Sistem Pelaporan Warga", date: "14 Agu 2024", cat: "Inovasi" },
    { id: 9, img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", title: "Program Bimbingan Belajar Gratis Bagi Siswa SD-SMP", date: "10 Jan 2024", cat: "Pendidikan" },
  ];

  return (
    <div className="min-h-screen pt-16 pb-24 bg-kt-gray">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
           <span className="inline-block mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Pusat Informasi</span>
           <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tighter text-kt-black mb-6">BERITA & ARTIKEL</h1>
           <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
             Update terbaru, liputan kegiatan, dan opini pemuda Karang Taruna selama lebih dari 3 tahun berjalan.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {articles.map((news, i) => (
             <motion.div 
               key={news.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: (i % 3) * 0.1 }}
             >
               <Link 
                 to={`/berita/${news.id}`}
                 className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-kt-green transition-all group flex flex-col cursor-pointer h-full"
               >
                  <div className="relative h-56 overflow-hidden bg-gray-100 shrink-0">
                     <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-kt-black">
                        {news.cat}
                     </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                     <h3 className="font-heading font-black text-2xl text-kt-black mb-4 group-hover:text-kt-green transition-colors leading-tight line-clamp-3">{news.title}</h3>
                     
                     <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        <div className="flex items-center">
                           <Calendar size={14} className="mr-2" />
                           {news.date}
                        </div>
                        <span className="text-kt-green group-hover:translate-x-1 transition-transform">Baca &rarr;</span>
                     </div>
                  </div>
               </Link>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
