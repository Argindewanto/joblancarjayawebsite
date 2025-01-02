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
    <main className="min-h-screen p-8 space-y-16 max-w-7xl mx-auto">
      <div>
        <h1 className="h1 mb-4">Design System</h1>
        <p className="p-lg text-mono-600">
          A comprehensive guide to Job Lancar Jaya App's design language
        </p>
      </div>

      {/* Typography */}
      <section>
        <h2 className="h2 mb-8">Typography</h2>
        
        <div className="space-y-8">
          {/* Display */}
          <div>
            <h3 className="h6 mb-4 text-mono-500">Display</h3>
            <div className="space-y-4">
              <p className="display-lg">Display Large</p>
              <p className="display-sm">Display Small</p>
            </div>
          </div>

          {/* Headings */}
          <div>
            <h3 className="h6 mb-4 text-mono-500">Headings</h3>
            <div className="space-y-4">
              <h1 className="h1">Heading 1</h1>
              <h2 className="h2">Heading 2</h2>
              <h3 className="h3">Heading 3</h3>
              <h4 className="h4">Heading 4</h4>
              <h5 className="h5">Heading 5</h5>
              <h6 className="h6">Heading 6</h6>
            </div>
          </div>

          {/* Paragraphs */}
          <div>
            <h3 className="h6 mb-4 text-mono-500">Paragraphs</h3>
            <div className="space-y-4">
              <p className="p-lg">Large Paragraph - The quick brown fox jumps over the lazy dog</p>
              <p className="p-base">Base Paragraph - The quick brown fox jumps over the lazy dog</p>
              <p className="p-sm">Small Paragraph - The quick brown fox jumps over the lazy dog</p>
              <p className="p-xs">Extra Small Paragraph - The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>

          {/* Labels */}
          <div>
            <h3 className="h6 mb-4 text-mono-500">Labels</h3>
            <div className="space-y-4">
              <p className="label-lg">Large Label</p>
              <p className="label-base">Base Label</p>
              <p className="label-sm">Small Label</p>
              <p className="label-xs">Extra Small Label</p>
            </div>
          </div>

          {/* Overline */}
          <div>
            <h3 className="h6 mb-4 text-mono-500">Overline</h3>
            <div className="space-y-4">
              <p className="overline-lg">Large Overline</p>
              <p className="overline-sm">Small Overline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section>
        <h2 className="h2 mb-8">Colors</h2>
        
        <div className="space-y-8">
          {/* Accent */}
          <div>
            <h3 className="h6 mb-4 text-mono-500">Accent</h3>
            <ColorSwatch color="#d8c09d" name="Accent" />
          </div>

          {/* Monochrome */}
          <div>
            <h3 className="h6 mb-4 text-mono-500">Monochrome</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <ColorSwatch color="#fafafa" name="50" />
              <ColorSwatch color="#f5f5f5" name="100" />
              <ColorSwatch color="#e5e5e5" name="200" />
              <ColorSwatch color="#d4d4d4" name="300" />
              <ColorSwatch color="#a3a3a3" name="400" />
              <ColorSwatch color="#737373" name="500" />
              <ColorSwatch color="#525252" name="600" />
              <ColorSwatch color="#404040" name="700" />
              <ColorSwatch color="#262626" name="800" />
              <ColorSwatch color="#171717" name="900" />
              <ColorSwatch color="#0a0a0a" name="950" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section>
        <h2 className="h2 mb-8">CTA Buttons</h2>
        
        <div>
          <h3 className="h6 mb-4 text-mono-500">Store Buttons</h3>
          <StoreButtons />
        </div>
      </section>
    </main>
  );
}
