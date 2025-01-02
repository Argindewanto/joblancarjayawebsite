import FeatureCard from './FeatureCard';

function DocumentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <path d="M14 2v6h6"/>
      <path d="M16 13H8"/>
      <path d="M16 17H8"/>
      <path d="M10 9H8"/>
    </svg>
  );
}

function CustomizeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      <path d="M12 2v2"/>
      <path d="M12 22v-2"/>
      <path d="m17 20.66-1-1.73"/>
      <path d="M11 10.27 7 3.34"/>
      <path d="m20.66 17-1.73-1"/>
      <path d="m3.34 7 1.73 1"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v3"/>
      <path d="M16 2v3"/>
      <path d="M3.5 9.09h17"/>
      <path d="M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"/>
      <path d="M15.5 15.5h.01"/>
      <path d="M15.5 18.5h.01"/>
      <path d="M12 15.5h.01"/>
      <path d="M12 18.5h.01"/>
      <path d="M8.5 15.5h.01"/>
      <path d="M8.5 18.5h.01"/>
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/>
      <line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
      <path d="M22 12A10 10 0 0 0 12 2v10z"/>
    </svg>
  );
}

function ProfitIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20"/>
      <path d="M6 16V8"/>
      <path d="M10 16v-4"/>
      <path d="M14 16v-6"/>
      <path d="M18 16V4"/>
      <path d="m4 12 4-4 6 2 6-6"/>
    </svg>
  );
}

const features = [
  {
    icon: <DocumentIcon />,
    title: "Pembuatan Dokumen",
    description: "Membuat penawaran dan invoice cantik dalam 1 menit"
  },
  {
    icon: <CustomizeIcon />,
    title: "Dokumen Custom",
    description: "Bisa pakai logo dan warna favorit kamu sendiri."
  },
  {
    icon: <CalendarIcon />,
    title: "Kalender Job",
    description: "bikin jadwal job kamu lebih terkelola, hindari tabrakan jadwal dan kelupaan jadwal job."
  },
  {
    icon: <PaymentIcon />,
    title: "Pengelolaan Pembayaran",
    description: "Pantau pembayaran team atau freelance yang bekerja sama dengan job kamu."
  },
  {
    icon: <ReportIcon />,
    title: "Laporan Keuangan",
    description: "Hasil kerja lebih terlihat angka cuannya dengan laporan keuangan otomatis."
  },
  {
    icon: <ProfitIcon />,
    title: "Rekap Keuntungan per-Job",
    description: "lihat berapa cuan bersih yang kamu dapatkan di setiap job kamu"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="h2 text-left md:text-center mb-16 max-w-3xl md:mx-auto">
          Aplikasi ini membuat kamu lebih{' '}
          <span className="text-accent">profesional</span> tanpa harus pusing belajar pengelolaan bisnis.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
