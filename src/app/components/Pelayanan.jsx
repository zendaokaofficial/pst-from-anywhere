import React from 'react';

const Section = () => {
  const items = [
    "Pembelian Data Mikro/Peta Wilayah Kerja Statistik",
    "Akses Produk Statistik pada Website BPS",
    "Rekomendasi Kegiatan Statistik (ROMANTIK)",
    "Pembelian Publikasi BPS",
    "Konsultasi Statistik",
    "Perpustakaan",
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Layanan Utama
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Penyelenggaraan Standar Pelayanan Statistik Terpadu di lingkungan Badan Pusat Statistik merupakan implementasi dari Pelaksanaan tugas dan fungsi Badan Pusat Statistik, yang bersifat pelayanan langsung (offline) dan tidak langsung (online), yang meliputi:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {items.map((item, index) => (
            <div className="p-2 sm:w-1/2 w-full" key={index}>
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
