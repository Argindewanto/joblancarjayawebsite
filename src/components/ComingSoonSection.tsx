import StoreButtons from './StoreButtons';

export default function ComingSoonSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="inline-block mb-8">
            <div className="px-4 py-1 rounded-full bg-accent/10 text-accent">
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
          </div>

          {/* Main Content */}
          <h2 className="display-sm md:display-md mb-6">
            Siap-siap untuk{' '}
            <span className="text-accent">Berbisnis</span> dengan lebih{' '}
            <span className="text-accent">Profesional</span>
          </h2>
          <p className="p-lg mb-12 text-mono-600">
            Download aplikasi Job Lancar Jaya sekarang dan dapatkan early access untuk fitur-fitur terbaru.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
