import React from 'react';

const PricingSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Harga Layanan</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Tarif/Biaya Layanan di PST BPS Kabupaten Tabanan yang meliputi Akses Produk Statistik pada Website BPS, Rekomendasi Kegiatan Statistik (ROMANTIK), Konsultasi Statistik, dan Perpustakaan adalah
            <strong> 0 rupiah atau tidak dipungut biaya</strong>
            <br />
            Layanan Pembelian Data Mikro/Peta Wilayah Kerja Statistik dan Pembelian Publikasi BPS dikenakan biaya sesuai dengan <strong>Peraturan Pemerintah No. 13 Tahun 2024</strong>
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">JENIS PNBP</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">SATUAN</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-right">TARIF (Rupiah)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">I. PENJUALAN PUBLIKASI ELEKTRONIK</td>
                <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right"></td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">A. Sampai dengan 50 halaman</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">per 50 halaman</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">50.000,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">B. Tambahan per 50 halaman berikutnya</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">per 50 halaman</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">15.000,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">II. PENJUALAN DATA MIKRO</td>
                <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right"></td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">A. Tanpa Proses Data (per dataset)</td>
                <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right"></td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">1. Sampai dengan 1 MB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">1 MB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">20.000,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">2. Tambahan per 1.000 bytes berikutnya</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">1.000 bytes</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">20,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">B. Dengan Proses Data (tabulasi hasil olahan data mikro per tabel)</td>
                <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right"></td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">1. Sampai dengan 1 MB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">1 MB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">22.000,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">2. Tambahan per 1.000 bytes berikutnya</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">1.000 bytes</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">22,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">III. PENJUALAN PETA DIGITAL WILAYAH KERJA STATISTIK</td>
                <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right"></td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">A. Peta Indonesia per kecamatan</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">per peta</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">12.000.000,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">B. Peta Indonesia per desa</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">per peta</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">36.000.000,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">C. Peta Kabupaten/Kota per Kecamatan</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">per peta</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">30.000,00</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">D. Peta Kabupaten/Kota per desa/kelurahan</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">per peta</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-right">70.000,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;
