import { MessageCircle, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export function UMKM() {
  const products = [
    {
      name: "Keripik Singkong Balado 'Mang Oding'",
      category: "Kuliner",
      price: "Rp 15.000",
      img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=400",
      seller: "Kang Oding"
    },
    {
      name: "Kaos Sablon Desa Sarinagen",
      category: "Fashion",
      price: "Rp 85.000",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400",
      seller: "Sarinagen Merch"
    },
    {
      name: "Kopi Robusta Asli Desa",
      category: "Kuliner",
      price: "Rp 35.000",
      img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400",
      seller: "Pemuda Tani"
    },
    {
      name: "Kerajinan Tas Anyam Bambu",
      category: "Kerajinan",
      price: "Rp 120.000",
      img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=400",
      seller: "Ibu-ibu PKK & Pemudi"
    },
    {
      name: "Sayur Organik Segar (Paket Ceria)",
      category: "Pertanian",
      price: "Rp 25.000",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
      seller: "Kelompok Tani Muda"
    },
    {
      name: "Sambal Cumi Pete Botolan",
      category: "Kuliner",
      price: "Rp 30.000",
      img: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?auto=format&fit=crop&q=80&w=400",
      seller: "Dapur Teh Nita"
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-kt-gold mb-3">
                 <ShoppingBag size={14} />
                 <span>Marketplace Mini</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tighter text-kt-black mb-4">UMKM PEMUDA</h1>
              <p className="text-gray-500 font-medium text-lg leading-snug">
                Lebih dari 3 tahun membina 40+ wirausaha muda Desa Sarinagen. Dukung karya mereka dengan memesan langsung melalui WhatsApp penjual.
              </p>
           </div>
           <div className="flex flex-wrap gap-2">
              {["Semua", "Kuliner", "Fashion", "Kerajinan", "Pertanian"].map(cat => (
                 <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${cat === 'Semua' ? 'bg-kt-green border-kt-green text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-kt-green'}`}>
                    {cat}
                 </button>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {products.map((prod, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-kt-green transition-all group flex flex-col"
             >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                   <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-kt-black shadow-sm">
                      {prod.category}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <h3 className="font-heading font-black text-xl text-kt-black mb-2 line-clamp-2 leading-tight">{prod.name}</h3>
                   <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Oleh {prod.seller}</p>
                   
                   <div className="mt-auto flex items-center justify-between">
                      <div className="font-black text-kt-green text-3xl">{prod.price}</div>
                      <a href="#" className="w-12 h-12 rounded-full border-2 border-kt-green text-kt-green flex items-center justify-center hover:bg-kt-green hover:text-white transition-all">
                         <MessageCircle size={20} />
                      </a>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
