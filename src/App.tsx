/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Tentang } from "./pages/Tentang";
import { Program } from "./pages/Program";
import { UMKM } from "./pages/UMKM";
import { Kontak } from "./pages/Kontak";
import { Kegiatan } from "./pages/Kegiatan";
import { Berita } from "./pages/Berita";
import { BeritaDetail } from "./pages/BeritaDetail";
import { Galeri } from "./pages/Galeri";
import { Placeholder } from "./pages/Placeholder";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-kt-gray">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/program" element={<Program />} />
            <Route path="/umkm" element={<UMKM />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/berita/:id" element={<BeritaDetail />} />
            <Route path="/galeri" element={<Galeri />} />
            
            {/* Catch-all for other requested pages using placeholder for now */}
            <Route path="/pengurus" element={<Placeholder />} />
            <Route path="/dokumen" element={<Placeholder />} />
            <Route path="/relawan" element={<Placeholder />} />
            <Route path="*" element={<Placeholder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
