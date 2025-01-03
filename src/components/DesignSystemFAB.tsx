'use client';

export default function DesignSystemFAB() {
  // Only render in development
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <a
      href="/design-system"
      className="fixed bottom-4 right-4 bg-mono-950 text-mono-50 px-4 py-2 rounded-full shadow-lg hover:bg-mono-900 transition-colors"
    >
      Design System
    </a>
  );
}
