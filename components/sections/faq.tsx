"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Apakah makanan sehat HealthyFooDs tetap enak?",
    a: "Ya. Menu kami dirancang supaya bernutrisi sekaligus tetap lezat. Sehat tidak harus hambar.",
  },
  {
    q: "Apakah harganya mahal?",
    a: "Bandingkan dengan biaya makan di luar setiap hari, paket HealthyFooDs justru lebih efisien. Dan kamu tahu persis apa yang kamu makan.",
  },
  {
    q: "Apa bedanya tiap paket?",
    a: "Setiap paket dirancang untuk tujuan berbeda, mulai dari keseimbangan harian, penurunan berat badan, hingga kebutuhan protein tinggi. Detail paket tersedia saat kamu menghubungi kami.",
  },
  {
    q: "Bagaimana sistem pengirimannya?",
    a: "Pengiriman dilakukan secara rutin dan terjadwal. Detail area dan jadwal pengiriman bisa dikonfirmasi via WhatsApp.",
  },
  {
    q: "Bagaimana kalau ternyata tidak cocok?",
    a: "Konsultasikan dulu sebelum berlangganan. Tim kami siap bantu kamu memilih paket yang paling sesuai sebelum kamu memutuskan.",
  },
];

const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20HealthyFooDs%2C%20saya%20mau%20konsultasi!";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface font-display">
          Ada yang Masih Ditanyakan?
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className="bg-surface rounded-xl border border-surface-container-high overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="flex justify-between items-center w-full p-6 text-left font-semibold text-on-surface select-none gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
              aria-expanded={openIndex === i}
            >
              <span className="text-base">{faq.q}</span>
              <svg
                className={`w-5 h-5 shrink-0 text-on-surface-variant transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === i ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 text-base text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
            </div>
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
          Konsultasikan Kebutuhan Anda
        </a>
        <p className="mt-3 text-sm text-on-surface-variant">
          Masih ada pertanyaan lain? Langsung tanya via WhatsApp.
        </p>
      </div>
    </section>
  );
}
