export default function TrustSnapshot() {
  return (
    <section className="bg-surface-container-low py-12">
      <div className="px-5 md:px-20 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-on-surface font-display">
          <span className="text-primary">3 Tahun</span> Bantu Pelanggan Makan Lebih Sehat
        </h2>
        <p className="mt-4 text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          HealthyFooDs sudah dipercaya untuk mendukung pola makan sehat ribuan pelanggan setiap harinya. Beragam pilihan paket, satu tujuan: bikin sehat jadi lebih mudah dijalankan.
        </p>
        <ul className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-on-surface-variant">
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Berpengalaman 3 tahun di industri makanan sehat
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Tersedia berbagai pilihan paket sesuai kebutuhan
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Menu disusun dengan memperhatikan kandungan nutrisi
          </li>
        </ul>
        <div className="mt-8">
          <a
            href="#paket"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-full text-sm font-semibold hover:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            Lihat Paket
          </a>
        </div>
      </div>
    </section>
  );
}
