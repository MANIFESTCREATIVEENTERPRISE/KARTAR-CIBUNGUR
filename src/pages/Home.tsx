import { motion } from "motion/react";
import { ArrowRight, HeartHandshake, Lightbulb, TrendingUp, Users, Calendar, MapPin, ChevronRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-kt-gray pt-24 pb-16">
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-2 bg-kt-gold/10 text-kt-gold font-bold text-[10px] uppercase tracking-widest rounded-full mb-8">
              Organisasi Kepemudaan Desa
            </span>
            <h1 className="font-heading text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter text-kt-green mb-8 text-balance">
              PEMUDA<br/>BERGERAK,<br/>DESA MAJU.
            </h1>
            <p className="font-sans text-lg text-gray-600 font-medium mb-12 max-w-xl mx-auto leading-snug">
              Wadah kolaborasi, inovasi, dan pengabdian sosial bagi generasi muda Desa Sarinagen yang progresif.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/program" className="w-full sm:w-auto px-8 py-4 bg-kt-black text-white font-bold rounded-lg text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
                Lihat Program
              </Link>
              <Link to="/relawan" className="w-full sm:w-auto px-8 py-4 border-2 border-gray-200 text-kt-black font-bold rounded-lg text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
                Daftar Anggota
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 pb-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-200 max-w-5xl mx-auto">
          {[
            { label: "Anggota Aktif", value: "324" },
            { label: "Program Terlaksana", value: "86+" },
            { label: "Penerima Manfaat", value: "4.5K" },
            { label: "Mitra Kolaborasi", value: "28" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-kt-green mb-2">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
             <div>
               <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Fokus Utama</h2>
               <h3 className="font-heading font-black text-3xl md:text-4xl text-kt-black">Program Unggulan</h3>
             </div>
             <Link to="/program" className="hidden md:inline-block text-[10px] font-bold text-kt-green underline underline-offset-4 uppercase tracking-widest hover:text-kt-green-dark">
               Lihat Seluruh Program
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: HeartHandshake,
                title: "Bakti Sosial",
                category: "Bidang Sosial",
                desc: "Kegiatan rutin santunan yatim dan bantuan warga kurang mampu.",
                color: "text-kt-green",
                bg: "bg-kt-green/10"
              },
              {
                icon: Lightbulb,
                title: "Kelas Digital",
                category: "Bidang Kepemudaan",
                desc: "Pelatihan skill digital, desain, dan coding untuk pemuda.",
                color: "text-kt-gold",
                bg: "bg-kt-gold/20"
              },
              {
                icon: TrendingUp,
                title: "Wirausaha Desa",
                category: "Bidang Ekonomi",
                desc: "Inkubasi dan pendampingan UMKM milik pemuda Sarinagen.",
                color: "text-kt-black",
                bg: "bg-gray-100"
              }
            ].map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-kt-green hover:bg-kt-green/5 transition-all group flex flex-col"
              >
                <div className={`w-14 h-14 rounded-full ${prog.bg} ${prog.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                   <prog.icon size={28} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">{prog.category}</div>
                <h3 className="font-heading font-black text-2xl text-kt-black mb-4 group-hover:text-kt-green transition-colors leading-tight">{prog.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 flex-grow">{prog.desc}</p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider text-kt-green">
                  Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/program" className="inline-block text-[10px] font-bold text-kt-green underline underline-offset-4 uppercase tracking-widest">
               Lihat Seluruh Program
             </Link>
          </div>
        </div>
      </section>

      {/* Agenda & Berita (Split Section) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Agenda */}
             <div className="bg-kt-green rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col">
                <div className="relative z-10 flex items-center justify-between mb-12">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Agenda Terdekat</h2>
                  <Link to="/kegiatan" className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-4 hover:text-kt-gold transition-colors">Lihat Semua</Link>
                </div>
                
                <div className="space-y-4 relative z-10 flex-grow">
                  {[
                    { date: "12", month: "Jun", title: "Workshop Pertanian Organik", loc: "Balai Desa" },
                    { date: "20", month: "Jun", title: "Rapat Triwulan Pengurus", loc: "Sekretariat KT" },
                    { date: "05", month: "Jul", title: "Turnamen Futsal Kemerdekaan", loc: "Lapangan Sari" }
                  ].map((agenda, i) => (
                    <div key={i} className="flex gap-6 items-center group cursor-pointer border-b border-white/10 pb-4 last:border-0 hover:border-white/30 transition-colors">
                       <div className="shrink-0 flex flex-col items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                          <span className="font-heading font-black text-3xl leading-none">{agenda.date}</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">{agenda.month}</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-lg leading-tight mb-2 group-hover:text-kt-gold transition-colors">{agenda.title}</h4>
                          <div className="flex items-center text-white/70 text-xs font-semibold uppercase tracking-wider">
                             <MapPin size={12} className="mr-1 shrink-0" />
                             {agenda.loc}
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
                
                {/* Decorative Element */}
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
             </div>

             {/* Berita */}
             <div className="bg-kt-gray rounded-3xl p-8 md:p-12 flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Berita Terbaru</h2>
                  <Link to="/berita" className="text-[10px] font-bold uppercase tracking-widest text-kt-green underline underline-offset-4 hover:text-kt-green-dark">Lihat Semua</Link>
                </div>

                <div className="space-y-8 flex-grow">
                   {[
                     {
                       img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
                       title: "Peluncuran Platform Pemasaran untuk UMKM Desa",
                       date: "28 Mei 2026"
                     },
                     {
                       img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=400",
                       title: "Panen Raya Perdana Kelompok Tani Muda Sarinagen",
                       date: "15 Mar 2026"
                     },
                     {
                       img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
                       title: "Karang Taruna Sarinagen Sabet Penghargaan Pemuda Pelopor",
                       date: "24 Nov 2025"
                     }
                   ].map((news, i) => (
                      <Link to={`/berita/${i + 1}`} key={i} className="flex flex-col sm:flex-row gap-6 group cursor-pointer block">
                         <div className="shrink-0 w-full sm:w-32 h-40 sm:h-32 rounded-2xl overflow-hidden bg-white">
                            <img src={news.img} alt={news.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                         </div>
                         <div className="flex flex-col justify-center">
                            <div className="flex items-center text-[10px] font-black tracking-[0.2em] text-kt-gold mb-3 uppercase">
                               <Newspaper size={12} className="mr-1.5" />
                               Berita
                            </div>
                            <h4 className="font-heading font-black text-xl text-kt-black leading-tight group-hover:text-kt-green transition-colors mb-4 line-clamp-3">
                               {news.title}
                            </h4>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center mt-auto">
                               <Calendar size={12} className="mr-1.5" />
                               {news.date}
                            </div>
                         </div>
                      </Link>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kt-green text-white py-24 relative overflow-hidden">
         {/* Simple abstract bg shapes */}
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-3xl mix-blend-screen pointer-events-none" />
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-kt-gold/10 blur-3xl mix-blend-screen pointer-events-none" />
         
         <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-heading text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter mb-8">
               MARI BERKARYA<br />BERSAMA KAMI.
            </h2>
            <p className="font-sans font-medium text-lg mb-12 max-w-xl mx-auto opacity-90 leading-snug">
               Jadilah bagian dari perubahan positif di Desa Sarinagen. Dedikasikan waktu, tenaga, dan pikiranmu untuk aksi yang bermakna.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/relawan" className="w-full sm:w-auto px-10 py-5 bg-white text-kt-green font-black rounded-xl text-sm uppercase tracking-wider hover:bg-kt-gold hover:text-white transition-all shadow-xl shadow-black/10">
                Gabung Sekarang
              </Link>
              <Link to="/kontak" className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 text-white font-bold rounded-xl text-sm uppercase tracking-wider hover:bg-white/10 transition-all">
                Hubungi Pengurus
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
