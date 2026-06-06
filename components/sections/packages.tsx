const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20HealthyFooDs%2C%20saya%20mau%20pesan!";

const PACKAGES = [
  {
    name: "Weekly Meal Plan",
    tagline: "Pilihan terbaik untuk konsistensi mingguan",
    badge: null,
  },
  {
    name: "Daily Balance",
    tagline: "Untuk kamu yang mau mulai bertahap",
    badge: null,
  },
  {
    name: "Weight Loss Plan",
    tagline: "Fokus pada target penurunan berat badan",
    badge: "Populer",
  },
  {
    name: "High Protein Plan",
    tagline: "Dukung aktivitas dan latihan fisikmu",
    badge: null,
  },
  {
    name: "Family Healthy Pack",
    tagline: "Solusi sehat untuk seluruh keluarga",
    badge: null,
  },
];

export default function PackagesSection() {
  return (
    <section id="paket" className="py-16 md:py-24 bg-surface-container-lowest">
      <div className="px-5 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-on-surface font-display">
            Pilih Paket yang Pas Buat Kamu
          </h2>
          <p className="mt-3 text-lg text-on-surface-variant">
            Setiap kebutuhan punya solusinya.
          </p>
          <p className="mt-2 text-base text-on-surface-variant max-w-xl mx-auto">
            Mau mulai dari yang simpel atau punya target spesifik? Ada paket yang dirancang untuk berbagai tujuan dan gaya hidup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`bg-surface p-8 rounded-xl border relative flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                pkg.badge ? "border-2 border-primary" : "border-surface-container-high"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold uppercase whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}
              <h3 className="text-xl font-bold text-on-surface font-display">{pkg.name}</h3>
              <p className="mt-2 text-sm text-on-surface-variant flex-grow">{pkg.tagline}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 w-full py-3 rounded-full text-sm font-semibold text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${
                  pkg.badge
                    ? "bg-primary text-on-primary hover:opacity-90 shadow-lg shadow-primary/20"
                    : "border-2 border-primary text-primary hover:bg-primary/5"
                }`}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-on-surface-variant">
          Tidak yakin paket mana yang cocok? Konsultasikan dulu via WhatsApp.
        </p>
      </div>
    </section>
  );
}
