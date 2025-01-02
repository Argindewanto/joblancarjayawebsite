import Image from 'next/image';
import StoreButtons from './StoreButtons';

interface BenefitSectionProps {
  imagePosition?: 'left' | 'right';
  imageSrc: string;
  heading: string;
  body: string;
}

export default function BenefitSection({
  imagePosition = 'left',
  imageSrc,
  heading,
  body
}: BenefitSectionProps) {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative h-[300px] sm:h-[400px] lg:h-[600px] ${
            imagePosition === 'right' ? 'lg:order-last' : ''
          }`}>
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <Image
                src={imageSrc}
                alt="Benefit illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:max-w-xl">
            <h2 className="display-sm md:display-md mb-8">
              {heading}
            </h2>
            <p className="p-lg mb-8 text-mono-600">
              {body}
            </p>
            <StoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
