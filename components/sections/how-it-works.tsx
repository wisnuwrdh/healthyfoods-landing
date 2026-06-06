const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20HealthyFooDs%2C%20saya%20mau%20konsultasi%20paket!";

const STEPS = [
  {
    number: "1",
    title: "Pilih paket",
    desc: "Tentukan paket yang sesuai kebutuhan dan tujuanmu",
  },
  {
    number: "2",
    title: "Konfirmasi via WhatsApp",
    desc: "Tanya, konsultasi, lalu selesaikan pemesanan",
  },
  {
    number: "3",
    title: "Terima dan nikmati",
    desc: "Makanan dikirim sesuai jadwal, tinggal santap",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="py-16 md:py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface font-display">
          Tiga Langkah Untuk Mulai
        </h2>
        <p className="mt-3 text-lg text-on-surface-variant">
          Semudah chat WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
        {STEPS.map((step, i) => (
          <div key={step.number} className="text-center space-y-5">
            <div className="relative inline-block">
              <div className="bg-primary text-on-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg relative z-10 font-display">
                {step.number}
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-[100%] w-[calc(100%-1rem)] h-0.5 bg-outline-variant -z-10" />
              )}
            </div>
            <h3 className="text-xl font-bold text-on-surface">{step.title}</h3>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-xs mx-auto">{step.desc}</p>
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882l6.198-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981 1.001-3.648-.235-.374A9.869 9.869 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.421 0 9.894 4.474 9.894 9.894 0 5.421-4.473 9.894-9.894 9.894z" />
          </svg>
          Hubungi WhatsApp
        </a>
        <p className="mt-3 text-sm text-on-surface-variant">
          Proses pemesanan cepat. Tidak perlu akun, tidak perlu checkout panjang.
        </p>
      </div>
    </section>
  );
}
