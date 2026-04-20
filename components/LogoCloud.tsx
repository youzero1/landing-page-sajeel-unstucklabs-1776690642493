export default function LogoCloud() {
  const companies = [
    { name: 'Stripe', letter: 'S' },
    { name: 'Airbnb', letter: 'A' },
    { name: 'Vercel', letter: 'V' },
    { name: 'Linear', letter: 'L' },
    { name: 'Figma', letter: 'F' },
    { name: 'Notion', letter: 'N' },
  ];

  return (
    <section className="py-16 border-t border-b border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600 uppercase tracking-widest font-medium mb-10">
          Trusted by teams at world-class companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-300 transition-colors group cursor-default"
            >
              <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:border-violet-500/40 group-hover:text-violet-400 transition-all">
                {company.letter}
              </div>
              <span className="text-lg font-semibold tracking-tight">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
