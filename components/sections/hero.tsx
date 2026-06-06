import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20HealthyFooDs%2C%20saya%20mau%20pesan!";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 md:pb-32 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h1 className="font-display text-[2.25rem] md:text-5xl font-bold text-on-surface leading-tight tracking-tight">
            Makan Sehat Setiap Hari,{" "}
            <span className="text-primary italic">Tanpa Ribet</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md">
            Makanan bernutrisi, siap santap, langsung diantar ke kamu.
          </p>
          <p className="text-base text-on-surface-variant">
            Tidak perlu masak. Tidak perlu hitung kalori. Tidak perlu bingung pilih menu.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-base text-on-surface-variant">
              <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Pilihan paket sesuai tujuan hidupmu</span>
            </li>
            <li className="flex items-start gap-3 text-base text-on-surface-variant">
              <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Praktis untuk rutinitas yang padat</span>
            </li>
            <li className="flex items-start gap-3 text-base text-on-surface-variant">
              <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Sehat, lezat, dan konsisten setiap hari</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full text-base font-semibold hover:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882l6.198-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981 1.001-3.648-.235-.374A9.869 9.869 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.421 0 9.894 4.474 9.894 9.894 0 5.421-4.473 9.894-9.894 9.894z" />
              </svg>
              Pesan Sekarang
            </a>
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              Lihat Paket
            </a>
          </div>

          <p className="text-sm text-on-surface-variant">
            Langsung terhubung via WhatsApp. Cepat dan tanpa ribet.
          </p>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-10" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/images/hero-image.png"
              alt="Makanan sehat HealthyFooDs dalam kemasan siap santap"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface p-4 rounded-xl shadow-xl flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">100% Organik</p>
              <p className="text-xs text-on-surface-variant">Bahan segar harian</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
