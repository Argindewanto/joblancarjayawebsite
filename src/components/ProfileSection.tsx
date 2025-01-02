import Image from 'next/image';

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-mono-50/5 hover:bg-mono-50/10 transition-colors"
    >
      <span className="text-accent">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}

export default function ProfileSection() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="lg:max-w-xl">
            <h2 className="display-sm md:display-md mb-6">
              Ikuti Tips dan Update Terbaru Seputar Bisnis MUA dan Wedding
            </h2>
            <p className="p-lg mb-8 text-mono-600">
              Pantau terus social media kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SocialButton
                href="https://www.instagram.com/job.lancarjaya/"
                icon={<InstagramIcon />}
                label="Instagram"
              />
              <SocialButton
                href="https://www.tiktok.com/@job.lancarjaya"
                icon={<TikTokIcon />}
                label="TikTok"
              />
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <Image
                src="/profile-illustration.png"
                alt="Social media illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
