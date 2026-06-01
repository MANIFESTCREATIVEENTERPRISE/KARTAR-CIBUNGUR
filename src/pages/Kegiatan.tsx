import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Kegiatan() {
  const timeline = [
    {
      year: "2026",
      events: [
        { month: "Mei 26", title: "Pelatihan Digital Marketing UMKM", desc: "Diikuti 45 pelaku UMKM binaan." },
        { month: "Mar 26", title: "Panen Raya Kebun Pemuda", desc: "Keberhasilan program ketahanan pangan desa." },
        { month: "Jan 26", title: "Musyawarah Tahunan & Reshuffle", desc: "Penyegaran struktur untuk 2026." },
      ]
    },
    {
      year: "2025",
      events: [
        { month: "Nov 25", title: "Sarinagen Youth Festival", desc: "Festival seni, budaya, dan produk lokal." },
        { month: "Agt 25", title: "Semarak Kemerdekaan RI ke-80", desc: "Lomba antar dusun penuh kolaborasi." },
        { month: "Mei 25", title: "Program Tebar 1000 Bibit Pohon", desc: "Aksi penghijauan di lahan kritis." },
        { month: "Feb 25", title: "Santunan Yatim Piatu Akbar", desc: "Bakti sosial menyalurkan bantuan ke 300 anak." },
      ]
    },
    {
      year: "2024",
      events: [
        { month: "Okt 24", title: "Deklarasi Pemuda Anti Narkoba", desc: "Kerja sama dengan BNN dan Kepolisian." },
        { month: "Jul 24", title: "Renovasi Lapangan Voli Desa", desc: "Gotong royong pemuda membangun fasilitas olahraga." },
        { month: "Apr 24", title: "Safari Ramadhan Mengajar", desc: "Mengisi pesantren kilat di 8 masjid desa." },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
           <span className="inline-block mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Jejak Langkah</span>
           <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tighter text-kt-black mb-6">KEGIATAN KAMI</h1>
           <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
             Merekam aksi nyata dan perjalanan panjang pengabdian kami selama lebih dari 3 tahun terakhir.
           </p>
        </div>

        <div className="space-y-16">
           {timeline.map((yearGroup, i) => (
             <motion.div 
               key={yearGroup.year}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
                <div className="flex items-center gap-4 mb-8">
                   <h2 className="font-heading text-4xl font-black text-kt-green">{yearGroup.year}</h2>
                   <div className="h-0.5 flex-grow bg-gray-100"></div>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                   {yearGroup.events.map((event, j) => (
                      <div key={j} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                         <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-kt-green text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                            <CheckCircle2 size={20} />
                         </div>
                         <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-kt-gold transition-colors">
                            <div className="flex items-center gap-2 mb-2 text-kt-green font-bold text-[10px] uppercase tracking-widest">
                               <Calendar size={14} />
                               {event.month}
                            </div>
                            <h3 className="font-heading font-bold text-xl text-kt-black mb-2 leading-tight">{event.title}</h3>
                            <p className="text-gray-500 text-sm font-medium">{event.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
