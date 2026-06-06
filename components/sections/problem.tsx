export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface font-display leading-tight">
          Selalu Berniat Makan Sehat, Tapi Selalu Gagal Konsisten?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-primary font-semibold">
          Kamu tidak sendirian.
        </p>
        <p className="mt-6 text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          Setelah hari yang panjang, siapa yang masih punya waktu dan energi untuk masak makanan sehat? Ujung-ujungnya pesan fast food lagi, dan rasa bersalah itu datang lagi.
        </p>
        <ul className="mt-8 space-y-4 text-left max-w-lg mx-auto">
          <li className="flex items-start gap-3 text-base text-on-surface-variant">
            <svg className="w-5 h-5 mt-0.5 text-on-surface-variant/50 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Tidak sempat belanja bahan makanan segar setiap hari</span>
          </li>
          <li className="flex items-start gap-3 text-base text-on-surface-variant">
            <svg className="w-5 h-5 mt-0.5 text-on-surface-variant/50 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Bingung menyusun menu yang benar-benar bernutrisi</span>
          </li>
          <li className="flex items-start gap-3 text-base text-on-surface-variant">
            <svg className="w-5 h-5 mt-0.5 text-on-surface-variant/50 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Niat sehat ada, tapi realita rutinitas selalu menang</span>
          </li>
        </ul>
        <div className="mt-10">
          <a
            href="#solusi"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full text-base font-semibold hover:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            Lihat Solusinya
          </a>
        </div>
      </div>
    </section>
  );
}
