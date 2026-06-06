const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20HealthyFooDs%2C%20saya%20mau%20mulai!";

const BENEFITS = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    title: "Hemat waktu",
    desc: "Tidak perlu masak, belanja, atau rencanakan menu",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Selalu konsisten",
    desc: "Sistem mingguan yang bikin pola makan tidak putus di tengah jalan",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: "Tidak perlu guilt trip",
    desc: "Keluar dari kebiasaan fast food tanpa drama",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    title: "Tetap produktif",
    desc: "Fokusmu tidak terpecah hanya untuk urusan makan",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface font-display">
          Lebih Banyak Waktu, Lebih Mudah Konsisten
        </h2>
        <p className="mt-4 text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Bayangkan tidak perlu lagi pusing tiap hari soal &ldquo;makan apa ya?&rdquo; Waktu dan energi itu bisa kamu pakai untuk hal yang lebih penting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className="bg-surface p-8 rounded-xl border border-surface-container-highest shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-tertiary-fixed w-14 h-14 rounded-full flex items-center justify-center mb-5">
              {b.icon}
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2">{b.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-full text-base font-semibold hover:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          Mulai Sekarang
        </a>
      </div>
    </section>
  );
}
