'use client';

import React, { useState } from 'react';

const Hero = () => {
  const [keperluan, setKeperluan] = useState('');

  // Fungsi untuk membuka modal
  const openModal = () => {
    document.getElementById('my_modal_4').showModal();
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    const modal = document.getElementById('my_modal_4');
    if (modal) {
      modal.close();
    }
  };

  // Fungsi handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil data dari form
    const formData = {
      formType: 'BukuTamu',
      nama: e.target.nama.value,
      email: e.target.email.value,
      whatsapp: e.target.whatsapp.value,
      keperluan, // Menggunakan state keperluan
      tanggal: e.target.tanggal.value,
      waktu: e.target.waktu.value,
    };

    console.log('Data yang dikirim:', JSON.stringify(formData, null, 2)); // Debugging

    try {
      const response = await fetch('/api/sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Response dari server:', result); // Debugging

      if (!response.ok) {
        throw new Error(result.message || 'Gagal mengirim data');
      }

      alert('Data berhasil dikirim!');
      closeModal();
      window.location.reload(); // Refresh halaman

    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/images/cover-hero-01.png')",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">PST From Anywhere</h1>
            <p className="mb-5">
              PST From Anywhere merupakan platform yang dimiliki oleh PST BPS Kabupaten Tabanan
              agar konsumen data dapat dengan mudah mendapatkan data kapanpun dan dimanapun.
            </p>
            <button className="btn btn-primary" onClick={openModal}>
              Buku Tamu
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Buku Tamu</h3>
          <form onSubmit={handleSubmit} className="py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input type="text" name="nama" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">No. WhatsApp</span>
              </label>
              <input type="text" name="whatsapp" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Keperluan</span>
              </label>
              <select name="keperluan" className="select select-bordered" value={keperluan} onChange={(e) => setKeperluan(e.target.value)} required>
                <option value="" disabled>Pilih keperluan</option>
                <option value="Umum">Umum</option>
                <option value="Pelayanan Statistik Terpadu (PST)">Pelayanan Statistik Terpadu (PST)</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tanggal</span>
              </label>
              <input type="date" name="tanggal" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Waktu</span>
              </label>
              <input type="time" name="waktu" className="input input-bordered" required />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn" onClick={closeModal}>Close</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Hero;
