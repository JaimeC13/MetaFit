import Link from "next/dist/client/link";
import { ArrowDown, 
  Dumbbell, 
  Utensils, 
  MessageSquareText, 
  Activity} from "lucide-react";
import StatsSection from "./components/StatsSection";
import PrimaryButton from "./components/Button";




  const features = [
  {
    title: "AI-Generated Workouts",
    description: "Dynamic routines that evolve based on your daily performance and biometrics.",
    icon: <Dumbbell className="w-6 h-6 text-white" />,
  },
  {
    title: "Smart Recovery",
    description: "Personalized rest and nutrition plans tailored to your body's recovery rate.",
    icon: <Activity className="w-6 h-6 text-white" />,
  },
  {
    title: "Precision Nutrition",
    description: "Smart meal plans designed by AI to fuel your specific goals, from fat loss to muscle gain.",
    icon: <Utensils className="w-6 h-6 text-white" />,
  },
  {
    title: "24/7 AI Assistant",
    description: "Instant answers to your fitness questions and constant motivation whenever you need it.",
    icon: <MessageSquareText className="w-6 h-6 text-white" />,
  },
];



export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">

     <section className=" min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 text-center max-w-4xl mx-auto">
        
        <div className="p-5">
          <a href="#" className="bg-amber-400 ">IMAGE</a>
        </div>

        <h1 className="text-5xl md:text-7xl tracking-tight leading-none mb-8 text-[#E9E9E9] font-bold">
          Elevate your  <br />
          <span>workout</span>
        </h1>

        <p className="text-lg md:text-base text-[#BDBDBD] leading-relaxed mb-7 text-left">
          MetaFit is an advanced AI-powered fitness platform designed to adapt to your unique body, goals, and performance level. Every workout and nutrition plan is dynamically generated based on your data, ensuring that your training evolves as you do.
          <span className="hidden md:inline"> Our intelligent system monitors your form and helps you train with precision.</span>
          This isn’t just training it’s optimized evolution.
        </p>

        <p className="text-lg md:text-base text-[#BDBDBD] leading-relaxed mb-10 text-left">
         Our intelligent system analyzes your movements in real time, helping you correct your form and prevent injuries. With built-in AI assistance, you can ask questions, receive instant feedback, and gain clarity about every exercise, rep, and strategy.
         <br />
          <span className="font-bold hidden md:block mt-4">Ready to take control of your progress?</span>
        </p>

       

        <div className="flex gap-4">
          <Link 
            href="/register" 
           className="w-16 h-16 bg-[#343434] rounded-full font-bold text-slate-950 hover:bg-[#555555] hover:scale-105 transition-all shadow-lg shadow-[#E9E9E9]-500/20 flex items-center justify-center"
          >
           <ArrowDown size={24} className="text-[#FFFFFF]" />
          </Link>
        </div>

      </section>

      <div>
        <StatsSection />
      </div>

      <section className="mt-24 w-full py-24 flex flex-col items-center">
        
        <div className="text-center max-w-4xl mx-auto px-6 mb-16 md:mb-20">
    <h1 className="text-5xl md:text-7xl tracking-tight leading-none mb-6 text-[#E9E9E9] font-bold">
      Inside the ecosystem.
    </h1>
    <p className="text-lg text-[#BDBDBD] leading-relaxed">
      Dynamic workout generation based on your biometrics to injury prevention through AI form correction, everything you need is here.
    </p>
    
    </div>

 
  <div className="mt-6 w-full max-w-6xl mx-auto px-16 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
    {features.map((feature, index) => (
      <div key={index} className="flex items-start gap-5">
        
  
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#C89674] flex items-center justify-center text-white">
          {feature.icon}
        </div>
        
        <div className="text-left mt-1">
          <h3 className="text-[#E9E9E9] text-xl font-semibold mb-2">
            {feature.title}
          </h3>
          <p className="text-[#BDBDBD] leading-relaxed text-base">
            {feature.description}
          </p>
        </div>

      </div>
    ))}
  </div>

  
  <div className="mt-30 flex justify-center">
    <PrimaryButton 
      text="Start Now" 
      className="!px-26 !py-4 !bg-[#C89674] !text-black hover:!bg-white" 
      href="/auth/register" 
    />
  </div>

</section>

      

      


    </main>
  );
}
