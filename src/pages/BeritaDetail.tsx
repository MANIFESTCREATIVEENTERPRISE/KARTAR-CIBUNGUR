import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";

export function BeritaDetail() {
  const { id } = useParams();

  // Simulated article data based on ID, in reality you'd fetch this from an API
  const article = {
    id,
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    title: "Peluncuran Platform Pemasaran e-Commerce untuk UMKM Desa",
    date: "28 Mei 2026",
    cat: "Ekonomi",
    author: "Humas KT Sarinagen",
    content: `
      <p>Desa Sarinagen kembali menorehkan prestasi melalui inovasi yang diinisiasi oleh kelompok pemuda Karang Taruna. Pada hari Kamis (28/05), Karang Taruna Desa Sarinagen secara resmi meluncurkan platform pemasaran berbasis e-commerce yang dirancang khusus untuk memfasilitasi UMKM desa agar dapat merambah pasar yang lebih luas.</p>
      
      <p>Kegiatan peluncuran yang dilaksanakan di Balai Desa Sarinagen ini dihadiri oleh Kepala Desa, jajaran perangkat desa, puluhan pelaku UMKM lokal, serta tokoh masyarakat setempat. Dalam sambutannya, Ketua Karang Taruna menyampaikan bahwa platform ini merupakan wujud nyata kontribusi pemuda dalam mendorong kemandirian ekonomi desa di era digital.</p>
      
      <h3>Pemberdayaan Berkelanjutan</h3>
      
      <p>"Kami menyadari bahwa banyak produk UMKM desa kita yang memiliki kualitas unggul, namun terkendala pada aspek pemasaran. Melalui platform ini, kami berharap produk-produk tersebut dapat dikenal tidak hanya di tingkat lokal, tetapi juga menjangkau pasar nasional bahkan internasional," ujar Ketua Karang Taruna.</p>
      
      <p>Selama tiga tahun terakhir, Karang Taruna Desa Sarinagen memang telah fokus pada berbagai program pemberdayaan dan pengembangan kapasitas pemuda serta masyarakat. Peluncuran platform ini dinilai sebagai langkah strategis untuk memperkuat pondasi ekonomi lokal yang sempat terdampak oleh dinamika ekonomi makro.</p>
      
      <h3>Pendampingan Khusus</h3>
      
      <p>Tidak sekadar membuatkan platform, Karang Taruna juga berkomitmen untuk memberikan pendampingan lanjutan bagi para pelaku UMKM. Pendampingan ini akan mencakup tata cara penggunaan platform, strategi pemasaran digital, hingga pengemasan produk yang menarik.</p>
      
      <p>Semoga dengan langkah ini, pertumbuhan ekonomi Desa Sarinagen semakin pesat dan memberikan kesejahteraan bagi seluruh warga. Pemuda yang berdaya, desa yang maju.</p>
    `
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/berita" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-kt-green transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Kembali ke Berita
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white"
        >
           <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-kt-green/10 text-kt-green font-bold text-[10px] uppercase tracking-widest rounded-full mb-6">
                 {article.cat}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-kt-black mb-6 leading-tight">
                 {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-500 py-4 border-y border-gray-100">
                 <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-kt-gold" />
                    {article.date}
                 </div>
                 <div className="flex items-center">
                    <User size={14} className="mr-2 text-kt-gold" />
                    {article.author}
                 </div>
              </div>
           </div>

           <div className="w-full h-64 md:h-[400px] rounded-3xl overflow-hidden mb-12 bg-gray-100">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
           </div>

           <div className="prose prose-lg prose-gray max-w-none text-gray-600 font-medium leading-relaxed prose-headings:font-heading prose-headings:font-black prose-headings:text-kt-black prose-p:mb-6 prose-a:text-kt-green">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
           </div>
        </motion.div>
      </div>
    </div>
  );
}
