import Image from "next/image";

export default function SolutionSection() {
  return (
    <section id="solusi" className="py-16 md:py-24 bg-surface-container-low">
      <div className="px-5 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/supporting-image.png"
              alt="Makanan sehat HealthyFooDs yang siap santap"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-on-surface font-display leading-tight">
              HealthyFooDs: Makan Sehat Tanpa Harus Dipikirin
            </h2>
            <p className="text-lg md:text-xl text-primary font-semibold">
              Kami urus semuanya, kamu tinggal makan.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Dari pemilihan menu, penyusunan nutrisi, hingga pengiriman langsung ke tanganmu. HealthyFooDs hadir sebagai partner harian yang bikin pola makan sehatmu berjalan sendiri.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-base text-on-surface-variant">
                <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Menu disiapkan dengan nutrisi yang sudah diperhitungkan</span>
              </li>
              <li className="flex items-start gap-3 text-base text-on-surface-variant">
                <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Tersedia dalam paket mingguan untuk konsistensi jangka panjang</span>
              </li>
              <li className="flex items-start gap-3 text-base text-on-surface-variant">
                <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Diantar sesuai jadwal, tanpa perlu kamu kejar-kejar</span>
              </li>
            </ul>
            <div>
              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full text-base font-semibold hover:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                Lihat Paket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
