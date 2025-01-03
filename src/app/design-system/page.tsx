import StoreButtons from '@/components/StoreButtons';

function ColorSwatch({ color, name }: { color: string; name: string }) {
  return (
    <div className="flex flex-col items-start">
      <div
        className="h-20 w-20 rounded-lg shadow-md"
        style={{ backgroundColor: color }}
      />
      <span className="mt-2 text-sm">{name}</span>
      <span className="text-mono-500 text-sm">{color}</span>
    </div>
  );
}

export default function DesignSystem() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="container mx-auto space-y-32">
        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Typography</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-mono-500 mb-4">Display Large</p>
              <p className="display-lg">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-mono-500 mb-4">Display Medium</p>
              <p className="display-md">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-mono-500 mb-4">Display Small</p>
              <p className="display-sm">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-mono-500 mb-4">Paragraph Large</p>
              <p className="p-lg">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-mono-500 mb-4">Paragraph Medium</p>
              <p className="p-md">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-mono-500 mb-4">Paragraph Small</p>
              <p className="p-sm">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accent Colors */}
            <div className="space-y-4">
              <p className="text-sm text-mono-500">Accent</p>
              <div className="space-y-2">
                <div className="h-12 rounded-lg bg-accent" />
                <div className="h-12 rounded-lg bg-accent/80" />
                <div className="h-12 rounded-lg bg-accent/60" />
                <div className="h-12 rounded-lg bg-accent/40" />
                <div className="h-12 rounded-lg bg-accent/20" />
                <div className="h-12 rounded-lg bg-accent/10" />
                <div className="h-12 rounded-lg bg-accent/5" />
              </div>
            </div>

            {/* Monochrome Colors */}
            <div className="space-y-4">
              <p className="text-sm text-mono-500">Monochrome</p>
              <div className="space-y-2">
                <div className="h-12 rounded-lg bg-mono-950" />
                <div className="h-12 rounded-lg bg-mono-900" />
                <div className="h-12 rounded-lg bg-mono-800" />
                <div className="h-12 rounded-lg bg-mono-700" />
                <div className="h-12 rounded-lg bg-mono-600" />
                <div className="h-12 rounded-lg bg-mono-500" />
                <div className="h-12 rounded-lg bg-mono-400" />
                <div className="h-12 rounded-lg bg-mono-300" />
                <div className="h-12 rounded-lg bg-mono-200" />
                <div className="h-12 rounded-lg bg-mono-100" />
                <div className="h-12 rounded-lg bg-mono-50" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section>
          <h2 className="text-2xl font-bold mb-8">CTA Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-outline">Outline Button</button>
          </div>
        </section>
      </div>
    </main>
  );
}
