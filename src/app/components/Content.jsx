import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      title: "Jumlah Penduduk 2023",
      value: "471,3 juta"
    },
    {
      title: "Laju Pertumbuhan Penduduk 2023",
      value: "1,08%"
    },
    {
      title: "Angka Melek Huruf Usia 15+",
      value: "95,61%"
    },
    {
      title: "TPAK 2023",
      value: "76,16%"
    },
    {
      title: "Penduduk Miskin 2023",
      value: "21,42 juta"
    },
    {
      title: "Persentase Penduduk Miskin 2023",
      value: "4,70%"
    },
    {
      title: "IPM 2023",
      value: "77,87"
    },
    {
      title: "PDRB Harga Berlaku 2023",
      value: "25.530,93"
    },
    {
      title: "Laju Pertumbuhan Ekonomi 2023",
      value: "3,56%"
    },
    {
      title: "Jumlah Penduduk 2023",
      value: "471,3 juta"
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Indikator Makro Statistik
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Indikator Makro Statistik di Kabupaten Tabanan disajikan pada statistik berikut.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-center">
              <div className="border-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-full h-48 flex flex-col justify-center items-center px-4 py-6 rounded-lg">
                <h2 className="title-font font-bold text-3xl text-gray-900">{stat.value}</h2>
                <p className="leading-relaxed text-gray-600 mt-2 text-center">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
