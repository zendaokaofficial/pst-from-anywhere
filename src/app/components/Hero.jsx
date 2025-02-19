'use client';

import React, { useState } from 'react';

const Hero = () => {
  const [keperluan, setKeperluan] = useState('');
  const [jenisKunjungan, setJenisKunjungan] = useState('');

  const openModal = () => {
    document.getElementById('my_modal_4').showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      formType: 'BukuTamu',
      nama: e.target.nama.value,
      email: e.target.email.value,
      whatsapp: e.target.whatsapp.value,
      instansi: e.target.instansi.value,
      keperluan,
      jenisKunjungan,
      tanggal: e.target.tanggal.value,
      waktu: e.target.waktu.value,
    };
  
    try {
      const response = await fetch('/api/sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log(result);
      document.getElementById('my_modal_4').close();
      
      window.location.reload();
  
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };  
  
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url('/images/cover-hero-01.png')" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">PST From Anywhere</h1>
            <p className="mb-5">
              PST From Anywhere merupakan Platform yang dimiliki oleh PST BPS Kabupaten Tabanan yang bertujuan agar konsumen data dapat dengan mudah mendapatkan data kapanpun dan dimanapun.
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
              <label className="label"><span className="label-text">Nama</span></label>
              <input type="text" name="nama" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">No. WhatsApp</span></label>
              <input type="text" name="whatsapp" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Instansi/Institusi</span></label>
              <input type="text" name="instansi" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Keperluan</span></label>
              <select name="keperluan" className="select select-bordered" value={keperluan} onChange={(e) => setKeperluan(e.target.value)} required>
                <option value="" disabled>Pilih keperluan</option>
                <option value="Umum">Umum</option>
                <option value="Pelayanan Statistik Terpadu (PST)">Pelayanan Statistik Terpadu (PST)</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Jenis Kunjungan</span></label>
              <select name="jenisKunjungan" className="select select-bordered" value={jenisKunjungan} onChange={(e) => setJenisKunjungan(e.target.value)} required>
                <option value="" disabled>Pilih jenis kunjungan</option>
                <option value="Kunjungan Langsung">Kunjungan Langsung</option>
                <option value="Kunjungan Tidak Langsung (Online)">Kunjungan Tidak Langsung (Online)</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Tanggal</span></label>
              <input type="date" name="tanggal" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Waktu</span></label>
              <input type="time" name="waktu" className="input input-bordered" required />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn" onClick={() => document.getElementById('my_modal_4').close()}>Close</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Hero;
