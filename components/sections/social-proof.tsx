const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20HealthyFooDs%2C%20saya%20mau%20pesan!";

const TESTIMONIALS = [
  {
    name: "Rina Wijaya",
    role: "Account Manager, 28 thn",
    text: "Dulu hampir tiap hari beli makan siang di luar, sekarang udah 2 bulan paket Weekly Meal Plan. Rasanya enak, konsisten, dan aku nggak perlu pikirin 'makan apa' setiap hari. Worth it banget.",
  },
  {
    name: "Aditya Pratama",
    role: "Software Engineer, 32 thn",
    text: "Aku pilih Weight Loss Plan karena pengen turunin berat badan tanpa ribet ngatur menu sendiri. Dalam 6 minggu, rasanya lebih enteng dan energiku tetap stabil sepanjang hari. Highly recommended!",
  },
  {
    name: "Sari Indah P.",
    role: "Ibu rumah tangga, 35 thn",
    text: "Pesen Family Healthy Pack buat suami dan anak-anak. Awalnya ragu, tapi ternyata semua suka. Sekarang nggak perlu ribet masak dua kali — sehat dan praktis. Thank you HealthyFooDs!",
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="px-5 md:px-20 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface font-display">
          Pelanggan Kami Sudah Merasakannya
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-surface p-8 rounded-xl border border-surface-container-high shadow-sm text-left"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-on-surface">{t.name}</p>
                <p className="text-xs text-on-surface-variant">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-full text-base font-semibold hover:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            Pesan Sekarang
          </a>
        </div>

        <p className="mt-4 text-xs text-on-surface-variant italic">
          *Testimonial pelanggan nyata. Hasil dapat bervariasi.
        </p>
      </div>
    </section>
  );
}
