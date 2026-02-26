import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Baby, GraduationCap, Heart, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Reveal } from "./Reveal";

const audiences = [
  {
    title: "Crianças",
    icon: Baby,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    description: "Desenvolvimento integral com foco em aprendizagem, comportamento e habilidades sociais.",
  },
  {
    title: "Adolescentes",
    icon: GraduationCap,
    color: "bg-green-600",
    lightColor: "bg-green-50",
    description: "Acompanhamento durante transições importantes, saúde mental e preparação acadêmica.",
  },
  {
    title: "Adultos",
    icon: Users,
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    description: "Desenvolvimento de habilidades funcionais, atividades da vida diária e qualidade de vida.",
  },
];

const conditions = [
  {
    category: "Transtornos do Neurodesenvolvimento",
    items: ["TEA", "TDAH", "TOD", "E demais comprometimentos Neurológicos"],
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    category: "Transtornos de Aprendizagem",
    items: ["DPAC", "Dislexia", "Discalculia", "Disgrafia", "Disortografia"],
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    category: "Transtornos de Saúde Mental",
    items: ["Depressão", "Ansiedade", "Esquizofrenia", "Outras condições emocionais"],
    color: "bg-rose-600",
    lightColor: "bg-rose-50",
    textColor: "text-rose-700",
  },
  {
    category: "Condições Específicas",
    items: ["Síndrome de Down", "Síndrome Xia-Gibbs", "Síndromes Genéticas Raras"],
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-700",
  },
];

function CounterAnimation({ target, duration = 2700, shouldAnimate }: { target: number; duration?: number; shouldAnimate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    const easeOutQuad = (t: number) => t * (2 - t);
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = easeOutQuad(progress);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, shouldAnimate]);

  return <span>{count}</span>;
}

export default function AudienceSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        else setIsVisible(false);
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => { if (statsRef.current) observer.unobserve(statsRef.current); };
  }, []);

  return (
    <section id="audience" className="py-24 md:py-40 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <Reveal direction="up" delay={0.1} width="100%">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-primary mb-6 sm:mb-10 text-center tracking-tighter leading-[0.9]">
              Público <br className="hidden md:block" /> <span className="text-secondary">Atendido</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl text-foreground/60 leading-tight max-w-3xl mx-auto font-bold">
              Atendemos crianças, adolescentes e adultos com uma abordagem personalizada e baseada em evidências científicas.
            </p>
          </Reveal>
        </div>

        {/* Age Groups (Bento Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-24">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Reveal 
                key={index} 
                direction="up" 
                delay={0.1 * (index + 1)}
                width="100%"
              >
                <Card
                  className={`p-6 sm:p-8 md:p-10 lg:p-12 h-full border-2 border-transparent ${audience.lightColor} hover:shadow-2xl transition-all duration-500 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] hover:scale-[1.02] hover:-translate-y-2 group`}
                >
                  <div className={`p-4 sm:p-5 md:p-6 ${audience.color} text-white rounded-[20px] sm:rounded-[24px] md:rounded-[32px] w-fit mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <Icon size={28} className="sm:w-[32px] md:w-[40px]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-primary mb-3 sm:mb-4 group-hover:text-secondary transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-foreground/60 font-bold leading-tight">
                    {audience.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-24">
          <Reveal direction="left" delay={0.1} width="100%">
            <div className="bg-primary text-white rounded-[24px] sm:rounded-[32px] md:rounded-[48px] p-6 sm:p-8 md:p-12 lg:p-16 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black uppercase tracking-widest opacity-80">Anos de Experiência</p>
                <TrendingUp size={32} className="sm:w-[40px] md:w-[48px] opacity-80" />
              </div>
              <p className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                <CounterAnimation target={20} shouldAnimate={isVisible} />+
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl mt-6 sm:mt-8 font-bold opacity-90">Atuando em saúde, educação e neurodesenvolvimento</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.2} width="100%">
            <div className="bg-secondary text-white rounded-[24px] sm:rounded-[32px] md:rounded-[48px] p-6 sm:p-8 md:p-12 lg:p-16 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black uppercase tracking-widest opacity-80">Famílias Atendidas</p>
                <TrendingUp size={32} className="sm:w-[40px] md:w-[48px] opacity-80" />
              </div>
              <p className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                <CounterAnimation target={1000} shouldAnimate={isVisible} />+
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl mt-6 sm:mt-8 font-bold opacity-90">Com abordagem baseada em evidências científicas</p>
            </div>
          </Reveal>
        </div>

        {/* Conditions (Bento Grid) */}
        <Reveal direction="up" delay={0.3} width="100%">
          <div className="bg-slate-50 rounded-[32px] sm:rounded-[48px] md:rounded-[64px] p-6 sm:p-8 md:p-12 lg:p-24 border-2 border-primary/5 shadow-inner">
            <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center flex-col sm:flex-row">
              <Sparkles className="text-primary" size={28} />
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-primary text-center tracking-tighter">
                Condições Atendidas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className={`hover:translate-x-2 transition-transform duration-300 ${condition.lightColor} p-6 sm:p-8 md:p-10 lg:p-12 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white`}
                >
                  <h4 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black ${condition.textColor} mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 lg:gap-5`}>
                    <div className={`w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl ${condition.color} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <CheckCircle2 size={24} />
                    </div>
                    {condition.category}
                  </h4>
                  <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                    {condition.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-foreground/70 flex items-center gap-3 sm:gap-4"
                      >
                        <div className={`w-2 h-2 rounded-full ${condition.color} opacity-40 flex-shrink-0`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
