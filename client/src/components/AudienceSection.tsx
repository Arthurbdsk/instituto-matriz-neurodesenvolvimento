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
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal direction="up" delay={0.1} width="100%">
            <h2 className="text-5xl md:text-8xl font-black text-primary mb-10 text-center tracking-tighter leading-[0.9]">
              Público <br className="hidden md:block" /> <span className="text-secondary">Atendido</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl md:text-3xl text-foreground/60 leading-tight max-w-3xl mx-auto font-bold">
              Atendemos crianças, adolescentes e adultos com uma abordagem personalizada e baseada em evidências científicas.
            </p>
          </Reveal>
        </div>

        {/* Age Groups (Bento Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
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
                  className={`p-12 h-full border-2 border-transparent ${audience.lightColor} hover:shadow-2xl transition-all duration-500 rounded-[48px] hover:scale-[1.02] hover:-translate-y-2 group`}
                >
                  <div className={`p-6 ${audience.color} text-white rounded-[32px] w-fit mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <Icon size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-xl text-foreground/60 font-bold leading-tight">
                    {audience.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <Reveal direction="left" delay={0.1} width="100%">
            <div className="bg-primary text-white rounded-[48px] p-12 md:p-16 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-xl font-black uppercase tracking-widest opacity-80">Anos de Experiência</p>
                <TrendingUp size={48} className="opacity-80" />
              </div>
              <p className="text-8xl md:text-9xl font-black tracking-tighter">
                <CounterAnimation target={20} shouldAnimate={isVisible} />+
              </p>
              <p className="text-2xl mt-8 font-bold opacity-90">Atuando em saúde, educação e neurodesenvolvimento</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.2} width="100%">
            <div className="bg-secondary text-white rounded-[48px] p-12 md:p-16 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-xl font-black uppercase tracking-widest opacity-80">Famílias Atendidas</p>
                <TrendingUp size={48} className="opacity-80" />
              </div>
              <p className="text-8xl md:text-9xl font-black tracking-tighter">
                <CounterAnimation target={1000} shouldAnimate={isVisible} />+
              </p>
              <p className="text-2xl mt-8 font-bold opacity-90">Com abordagem baseada em evidências científicas</p>
            </div>
          </Reveal>
        </div>

        {/* Conditions (Bento Grid) */}
        <Reveal direction="up" delay={0.3} width="100%">
          <div className="bg-slate-50 rounded-[64px] p-12 md:p-24 border-2 border-primary/5 shadow-inner">
            <div className="flex items-center gap-4 mb-16 justify-center">
              <Sparkles className="text-primary" size={40} />
              <h3 className="text-4xl md:text-7xl font-black text-primary text-center tracking-tighter">
                Condições Atendidas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className={`hover:translate-x-2 transition-transform duration-300 ${condition.lightColor} p-12 rounded-[48px] shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white`}
                >
                  <h4 className={`text-3xl font-black ${condition.textColor} mb-8 flex items-center gap-5`}>
                    <div className={`w-16 h-16 rounded-2xl ${condition.color} text-white flex items-center justify-center shadow-lg`}>
                      <CheckCircle2 size={32} />
                    </div>
                    {condition.category}
                  </h4>
                  <ul className="space-y-5">
                    {condition.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-xl font-bold text-foreground/70 flex items-center gap-4"
                      >
                        <div className={`w-3 h-3 rounded-full ${condition.color} opacity-40`}></div>
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
