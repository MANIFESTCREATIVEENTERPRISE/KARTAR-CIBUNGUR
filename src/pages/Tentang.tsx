import { motion } from "motion/react";
import { CheckCircle2, HeartHandshake, Users, Lightbulb, Shield, Briefcase } from "lucide-react";

export function Tentang() {
  return (
    <div className="flex flex-col min-h-screen pt-8 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
           <span className="inline-block py-2 px-4 rounded-full bg-kt-gold/10 text-kt-gold font-bold text-[10px] uppercase tracking-widest mb-6">
              Profil Organisasi
           </span>
           <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tighter text-kt-black mb-6">TENTANG KAMI</h1>
           <p className="text-lg text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
             Karang Taruna Desa Sarinagen adalah wadah pembinaan dan pengembangan generasi muda yang tumbuh atas dasar kesadaran dan rasa tanggung jawab sosial dari, oleh, dan untuk masyarakat.
           </p>
        </div>

        {/* Image & Sejarah (Two cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="relative"
           >
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200/50">
                 <img 
                    src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&q=80&w=800" 
                    alt="Sejarah Karang Taruna" 
                    className="w-full h-auto object-cover aspect-4/3"
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-kt-gold text-kt-green-dark p-6 rounded-2xl shadow-lg">
                 <div className="font-heading font-bold text-4xl mb-1">2010</div>
                 <div className="text-sm font-semibold uppercase tracking-wider">Tahun Berdiri</div>
              </div>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
              <h2 className="font-heading text-3xl font-black text-kt-black tracking-tight mb-6">Sejarah & Perjalanan</h2>
              <div className="space-y-4 text-gray-500 font-medium leading-relaxed">
                <p>
                  Didirikan pada tahun 2010, Karang Taruna Desa Sarinagen berawal dari inisiatif sekelompok pemuda yang peduli akan kondisi sosial dan potensi ekonomi desa. Kami menyadari bahwa pemuda adalah aset terbesar bagi kemajuan suatu daerah.
                </p>
                <p>
                  Melalui berbagai fase perjalanan, khususnya lompatan digitalisasi selama 3 tahun terakhir (sejak 2023), organisasi ini terus bertransformasi menjadi ruang yang lebih inklusif dan inovatif. Kami tidak hanya sekadar berkumpul, tetapi aktif menyalurkan Ratusan Program yang menjawab tantangan nyata di masyarakat, mulai dari pemberdayaan UMKM hingga pelestarian lingkungan.
                </p>
                <p>
                  Kini, dengan semangat kolaborasi yang kuat, Karang Taruna Sarinagen siap menjadi motor penggerak inovasi desa di era modern.
                </p>
              </div>
           </motion.div>
        </div>

        {/* Visi & Misi */}
        <div className="bg-kt-gray rounded-3xl p-8 md:p-12 mb-24 border border-gray-200">
           <div className="text-center mb-10 text-kt-black">
              <h2 className="font-heading text-3xl font-black tracking-tight mb-6 text-kt-green">Visi & Misi</h2>
              <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-tight italic">
                 "Mewujudkan pemuda Desa Sarinagen yang kreatif, mandiri, berdaya saing, dan peduli terhadap pembangunan masyarakat."
              </p>
           </div>
           
           <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
              <h3 className="font-heading font-black text-2xl text-kt-black mb-8 flex items-center tracking-tight">
                 <TargetIcon className="mr-3 text-kt-gold" /> Misi Kami
              </h3>
              <ul className="space-y-4">
                 {[
                   "Mengembangkan potensi pemuda melalui berbagai pelatihan dan pembinaan berkelanjutan.",
                   "Mendorong kewirausahaan pemuda dan mendukung UMKM lokal agar lebih berkembang.",
                   "Menumbuhkan kepedulian sosial melalui aksi nyata di bidang kesejahteraan masyarakat.",
                   "Membangun jejaring dan kolaborasi dengan pemerintah desa, instansi, dan pihak swasta.",
                   "Mendukung penuhk program pembangunan desa fisik maupun non-fisik."
                 ].map((misi, i) => (
                    <li key={i} className="flex items-start">
                       <CheckCircle2 className="shrink-0 text-kt-green mt-1.5 mr-4" size={20} />
                       <span className="text-gray-700 leading-relaxed text-lg">{misi}</span>
                    </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Nilai-Nilai */}
        <div>
           <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-black text-kt-black tracking-tight mb-4">Nilai-Nilai Organisasi</h2>
              <p className="text-gray-500 font-medium">Prinsip yang kami pegang teguh dalam setiap langkah dan program kerja.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: Shield, title: "Integritas", desc: "Jujur & dapat dipercaya" },
                { icon: HeartHandshake, title: "Kepedulian", desc: "Solidaritas tinggi" },
                { icon: Users, title: "Kolaborasi", desc: "Kerja sama tim" },
                { icon: Lightbulb, title: "Inovasi", desc: "Ide segar & kreatif" },
                { icon: Briefcase, title: "Profesionalitas", desc: "Bertanggung jawab" }
              ].map((nilai, i) => (
                 <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-kt-green transition-all group">
                    <div className="w-16 h-16 mx-auto bg-gray-50 border-2 border-gray-100 text-kt-green rounded-full flex items-center justify-center mb-6 group-hover:bg-kt-green group-hover:border-kt-green group-hover:text-white transition-all">
                       <nilai.icon size={28} />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-kt-black tracking-tight mb-2">{nilai.title}</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{nilai.desc}</p>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="24" height="24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
