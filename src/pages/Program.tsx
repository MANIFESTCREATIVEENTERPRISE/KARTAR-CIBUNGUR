import { BookOpen, TreePine, Droplets, Briefcase, HandHeart } from "lucide-react";
import { motion } from "motion/react";

export function Program() {
  const categories = [
    {
      title: "Pengembangan Pemuda",
      icon: BookOpen,
      color: "text-blue-500",
      bg: "bg-blue-50",
      programs: ["Leadership Camp", "Pelatihan Digital & IT", "Pemuda Tanggap Bencana"]
    },
    {
      title: "Sosial Kemasyarakatan",
      icon: HandHeart,
      color: "text-rose-500",
      bg: "bg-rose-50",
      programs: ["Donor Darah Rutin", "Bakti Sosial & Santunan Yatim", "Jumat Berkah Menyapa Warga"]
    },
    {
      title: "Lingkungan Hidup",
      icon: TreePine,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      programs: ["Gerakan Bersih Desa", "Penghijauan & Tanam Pohon", "Pengelolaan Sampah Terpadu"]
    },
    {
      title: "Ekonomi Kreatif",
      icon: Briefcase,
      color: "text-amber-500",
      bg: "bg-amber-50",
      programs: ["Inkubasi UMKM Pemuda", "Pelatihan Pemasaran Digital", "Bazar Desa & Pameran Usaha"]
    },
    {
      title: "Keagamaan",
      icon: Droplets,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      programs: ["Pesantren Kilat Ramadhan", "Peringatan Hari Besar Islam (PHBI)", "Kajian Rutin Pemuda"]
    }
  ];

  return (
    <div className="min-h-screen pt-16 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
           <span className="inline-block mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Pilar Utama Organisasi</span>
           <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tighter text-kt-black mb-6">PROGRAM KERJA</h1>
           <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
             Fokus pergerakan kami terbagi ke dalam 5 pilar utama untuk memastikan dampak yang komprehensif bagi kepemudaan dan masyarakat desa.
           </p>
        </div>

        <div className="space-y-6">
           {categories.map((cat, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-3xl p-8 border-2 border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:border-kt-green transition-colors group"
             >
                <div className="shrink-0 w-24 h-24 rounded-full flex items-center justify-center bg-gray-50 border-2 border-gray-100 hidden md:flex group-hover:border-kt-green group-hover:bg-kt-green/5 transition-all">
                   <cat.icon size={40} className={cat.color} />
                </div>
                <div className="w-full">
                   <div className="flex items-center gap-4 mb-4">
                      <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center md:hidden border-2 border-gray-100 ${cat.bg} ${cat.color}`}>
                         <cat.icon size={24} />
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-black text-kt-black tracking-tight">{cat.title}</h2>
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      {cat.programs.map((prog, j) => (
                         <div key={j} className="flex items-center gap-3 p-4 rounded-xl bg-kt-gray border border-transparent hover:border-kt-green/20 hover:bg-kt-green/5 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-kt-gold shrink-0" />
                            <span className="font-bold text-sm text-gray-700">{prog}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
