import Image from 'next/image';
import DesignSystemFAB from '@/components/DesignSystemFAB';
import FeaturesSection from '@/components/FeaturesSection';
import StoreButtons from '@/components/StoreButtons';
import BenefitSection from '@/components/BenefitSection';
import ComingSoonSection from '@/components/ComingSoonSection';
import ProfileSection from '@/components/ProfileSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-left">
                <h1 className="display-lg mb-6 leading-tight">
                  Jadilah Seniman yang{' '}
                  <span className="text-accent">Profesional</span> dalam{' '}
                  <span className="text-accent">Berbisnis</span>
                </h1>
                <p className="p-lg mb-12 text-mono-600">
                  Aplikasi management bisnis untuk MUA dan vendor fotografi. Mengelola pekerjaan dalam satu genggaman tangan.
                </p>
                <StoreButtons />
              </div>

              {/* Hero Image */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] order-first lg:order-last">
                <Image
                  src="/Hero-image.png"
                  alt="Job Lancar Jaya App Interface"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features">
          <FeaturesSection />

          {/* Benefit Section 1 */}
          <BenefitSection
            imagePosition="left"
            imageSrc="/illustration1.png"
            heading="Sekarang urusan kerjaan bisa diberesin dalam satu aplikasi saja"
            body="tidak perlu pindah-pindah aplikasi dan semua bisa di-akses lewat handphone."
          />

          {/* Benefit Section 2 */}
          <BenefitSection
            imagePosition="right"
            imageSrc="/illustration2.png"
            heading="Fokus ke Hasil Karya, Urusan Bisnis Otomatis-kan Saja."
            body="jangan buang tenaga da waktu ke hal-hal yang bisa kelar hanya dengan satu aplikasi. fokus ke hasil karya."
          />
        </section>

        {/* Coming Soon Section */}
        <ComingSoonSection />

        {/* Profile Section */}
        <section id="contact">
          <ProfileSection />
        </section>

        {/* Design System FAB */}
        <DesignSystemFAB />
      </main>
      <Footer />
    </>
  );
}
