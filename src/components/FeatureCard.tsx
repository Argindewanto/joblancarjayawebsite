interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group flex flex-col items-start p-6 rounded-2xl bg-mono-50/5 hover:bg-mono-50/10 transition-colors">
      <div className="mb-4 p-3 rounded-xl bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="h5 mb-2">{title}</h3>
      <p className="p-base text-mono-400">{description}</p>
    </div>
  );
}
