import Image from 'next/image';

interface StoreButtonProps {
  href: string;
  type: 'app-store' | 'play-store';
  className?: string;
}

export function StoreButton({ href, type, className = '' }: StoreButtonProps) {
  const isAppStore = type === 'app-store';
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2.5 rounded-lg bg-mono-950 px-4 py-2 text-mono-50 transition-transform hover:scale-105 active:scale-95 ${className}`}
    >
      <div className="relative w-6 h-6">
        <Image
          src={isAppStore ? '/icons8-app-store.svg' : '/icons8-google-play.svg'}
          alt={isAppStore ? 'App Store' : 'Google Play'}
          fill
          className="brightness-0 invert"
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-[10px] leading-none">Download on</span>
        <span className="text-sm font-semibold leading-tight">
          {isAppStore ? 'App Store' : 'Play Store'}
        </span>
      </div>
    </a>
  );
}

export default function StoreButtons() {
  return (
    <div className="flex gap-3">
      <StoreButton
        href="#"
        type="app-store"
        className="bg-mono-950 text-mono-50"
      />
      <StoreButton
        href="#"
        type="play-store"
        className="bg-mono-950 text-mono-50"
      />
    </div>
  );
}
