interface StatItem {
  label: string;
  value: string;
  description: string;
}

const stats: StatItem[] = [
  { label: "Active Users", value: "12K+", description: "Training daily with IA" },
  { label: "AI Analysis", value: "1M+", description: "Posture corrections made" },
  { label: "Experience", value: "5+", description: "Years of fitness innovation" },
  { label: "Success Rate", value: "98%", description: "User goal completion" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#1C1C1B]/30 border-y border-[#343434]/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:text-left space-y-2">
              <span className="text-4xl md:text-5xl font-extrabold text-[#C7926D] tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#BDBDBD]">
                {stat.label}
              </span>
              <p className="text-sm text-[#B5A193] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}