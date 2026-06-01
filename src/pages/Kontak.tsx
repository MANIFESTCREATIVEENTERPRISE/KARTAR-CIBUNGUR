import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send } from "lucide-react";
import { motion } from "motion/react";

export function Kontak() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
           <span className="inline-block mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Pusat Bantuan & Kolaborasi</span>
           <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tighter text-kt-black mb-6">HUBUNGI KAMI</h1>
           <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
             Punya pertanyaan, ide kolaborasi, atau ingin bergabung bersama kami? Jangan ragu untuk mengirim pesan kepada pengurus.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-6 md:p-12 border-2 border-gray-100">
           
           {/* Info */}
           <div className="bg-kt-gray rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                 <h3 className="font-heading font-black text-2xl text-kt-black mb-10 tracking-tight">Informasi Kontak</h3>
                 
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-kt-gold shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Sekretariat</div>
                          <p className="font-bold text-kt-black text-sm leading-relaxed">
                             Gedung Pemuda,<br />Jl. Raya Sarinagen No. 123,<br />Desa Sarinagen, Kec. Cipongkor,<br />Kab. Bandung Barat
                          </p>
                       </div>
                    </div>
                    
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-kt-gold shrink-0">
                          <Phone size={24} />
                       </div>
                       <div>
                          <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Telepon / WhatsApp</div>
                          <p className="font-bold text-kt-black text-sm">+62 812-3456-7890 (Sekretaris)</p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-kt-gold shrink-0">
                          <Mail size={24} />
                       </div>
                       <div>
                          <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Email</div>
                          <p className="font-bold text-kt-black text-sm">halo@sarinagen.desa.id</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="pt-8 mt-12 border-t border-gray-200">
                 <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Sosial Media Kami</div>
                 <div className="flex gap-3">
                    <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-kt-black hover:border-kt-gold hover:text-kt-gold transition-all">
                       <Instagram size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-kt-black hover:border-kt-gold hover:text-kt-gold transition-all">
                       <Facebook size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-kt-black hover:border-kt-gold hover:text-kt-gold transition-all">
                       <Youtube size={20} />
                    </a>
                 </div>
              </div>
           </div>

           {/* Form */}
           <div className="p-0 md:pl-6 md:py-6">
              <h3 className="font-heading font-black text-2xl text-kt-black mb-8 tracking-tight">Kirim Pesan</h3>
              
              <form className="space-y-6">
                 <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Nama Lengkap</label>
                    <input 
                       type="text" 
                       className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-kt-green outline-none transition-all font-medium text-kt-black"
                       placeholder="Masukkan nama Anda"
                    />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Email</label>
                       <input 
                          type="email" 
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-kt-green outline-none transition-all font-medium text-kt-black"
                          placeholder="alamat@email.com"
                       />
                    </div>
                    <div>
                       <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Nomor HP/WA</label>
                       <input 
                          type="tel" 
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-kt-green outline-none transition-all font-medium text-kt-black"
                          placeholder="08..."
                       />
                    </div>
                 </div>

                 <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Pesan</label>
                    <textarea 
                       rows={5}
                       className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-kt-green outline-none transition-all resize-none font-medium text-kt-black"
                       placeholder="Tuliskan pesan Anda di sini..."
                    ></textarea>
                 </div>

                 <button type="button" className="w-full py-4 bg-kt-black text-white font-black rounded-xl text-sm uppercase tracking-wider hover:bg-gray-800 transition-all shadow-xl shadow-black/5 mt-4">
                    Kirim Pesan Sekarang
                 </button>
              </form>
           </div>

        </div>
      </div>
    </div>
  );
}
