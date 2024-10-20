import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "I Gusti Gde Nyoman Sudarmayasa, SST",
      role: "Supervisor",
      description: "Gusti adalah Pranata Komputer Ahli Muda dengan keahlian dalam komputasi, pengelolaan basis data, dan integrasi statistik di bidang demografi, sosial, ekonomi, serta lingkungan hidup. Keahliannya mendukung penerapan teknologi untuk analisis data yang lebih efektif.",
      imgSrc: "/images/gusti.png",
    },
    {
      name: "Desak Gede Pratiwi Wijayanti, S.Si.",
      role: "Frontliner",
      description: "Seorang Statistisi Ahli Pertama di BPS Kabupaten Tabanan yang ahli dalam statistik ekonomi, berperan penting dalam analisis data untuk mendukung perumusan kebijakan yang efektif.",
      imgSrc: "/images/tiwi.png",
    },
    {
      name: "Zenda Oka Briantiko, S.Tr.Stat.",
      role: "Frontliner",
      description: "Pranata Komputer Ahli Pertama di BPS Kabupaten Tabanan dengan keahlian di bidang statistik demografi dan sosial. Berperan dalam pengelolaan data statistik serta analisis terkait kependudukan dan isu sosial.",
      imgSrc: "/images/zenda.png",
    },
    {
      name: "Naufal Abdul Rafi Zaqi, S.Tr.Stat.",
      role: "Frontliner",
      description: "Statistisi Ahli Pertama di BPS Kabupaten Tabanan yang memiliki keahlian di bidang statistik lingkungan hidup dan multi-domain, Naufal berperan penting dalam analisis data yang kompleks dan relevan dengan isu-isu lingkungan serta berbagai sektor terkait.",
      imgSrc: "/images/naufal.png",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">TIM KAMI</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            PST BPS Kabupaten Tabanan memiliki tim yang terdiri dari seorang Supervisor dan tiga orang Frontliner. Tim kami memiliki kompetensi pada bidang Statistik Demografi dan Sosial, Statistik Ekonomi, serta Statistik Lingkungan Hidup dan Multi-Domain. Untuk informasi lebih lanjut, silakan hubungi kami melalui nomor WhatsApp berikut 085173215102
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div className="p-4 lg:w-1/2" key={index}>
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={member.imgSrc}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
