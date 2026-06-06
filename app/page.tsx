import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero";
import TrustSnapshot from "@/components/sections/trust-snapshot";
import ProblemSection from "@/components/sections/problem";
import SolutionSection from "@/components/sections/solution";
import PackagesSection from "@/components/sections/packages";
import BenefitsSection from "@/components/sections/benefits";
import SocialProofSection from "@/components/sections/social-proof";
import HowItWorksSection from "@/components/sections/how-it-works";
import FAQSection from "@/components/sections/faq";
import FinalCTASection from "@/components/sections/final-cta";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSnapshot />
        <ProblemSection />
        <SolutionSection />
        <PackagesSection />
        <BenefitsSection />
        <SocialProofSection />
        <HowItWorksSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />

      <a
        href="https://wa.me/6281234567890?text=Halo%20HealthyFooDs%2C%20saya%20mau%20pesan!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label="Hubungi WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882l6.198-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981 1.001-3.648-.235-.374A9.869 9.869 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.421 0 9.894 4.474 9.894 9.894 0 5.421-4.473 9.894-9.894 9.894z" />
        </svg>
      </a>
    </>
  );
}
