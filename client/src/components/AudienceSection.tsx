import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Reveal } from "./Reveal";

const audiences = [
  {
    title: "Crianças",
    description: "Desenvolvimento integral com foco em aprendizagem, comportamento e habilidades sociais.",
  },
  {
    title: "Adolescentes",
    description: "Acompanhamento durante transições importantes, saúde mental e preparação acadêmica.",
  },
  {
    title: "Adultos",
    description: "Desenvolvimento de habilidades funcionais, atividades da vida diária e qualidade de vida.",
  },
];

const conditions = [
  {
    category: "Transtornos do Neurodesenvolvimento",
    items: ["TEA", "TDAH", "TOD", "E demais comprometimentos Neurológicos"],
  },
  {
    category: "Transtornos de Aprendizagem",
    items: ["DPAC", "Dislexia", "Discalculia", "Disgrafia", "Disortografia"],
  },
  {
    category: "Transtornos de Saúde Mental",
    items: ["Depressão", "Ansiedade", "Esquizofrenia", "Outras condições emocionais"],
  },
  {
    category: "Condições Específicas",
    items: ["Síndrome de Down", "Síndrome Xia-Gibbs", "Síndromes Genéticas Raras"],
  },
];

function CounterAnimation({ target, duration = 1200, shouldAnimate }: { target: number; duration?: number; shouldAnimate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;
    
    const easeOutQuad = (t: number) => t * (2 - t);
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="audience" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Público Atendido
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-lg text-foreground leading-relaxed">
              Atendemos crianças, adolescentes e adultos com uma abordagem personalizada e baseada em evidências científicas.
            </p>
          </Reveal>
        </div>

        {/* Age Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {audiences.map((audience, index) => (
            <Reveal 
              key={index} 
              direction="up" 
              delay={0.1 * (index + 1)}
              width="100%"
            >
              <Card
                className="p-8 h-full border-l-4 border-l-secondary hover:shadow-xl transition-all duration-300 border border-border hover:scale-105 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {audience.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {audience.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Reveal direction="left" delay={0.1} width="100%">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border-2 border-blue-200 hover:border-blue-400">
              <div className="flex items-center justify-between mb-4">
                <p className="text-muted-foreground font-semibold group-hover:text-primary transition-colors">Anos de Experiência</p>
                <TrendingUp className="text-primary group-hover:scale-125 transition-transform" size={24} />
              </div>
              <p className="text-7xl font-black text-primary group-hover:scale-110 transition-transform duration-300 inline-block origin-left">
                <CounterAnimation target={20} shouldAnimate={isVisible} />+
              </p>
              <p className="text-foreground mt-4 font-medium group-hover:text-primary/80 transition-colors">Atuando em saúde, educação e neurodesenvolvimento</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.2} width="100%">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border-2 border-green-200 hover:border-green-400">
              <div className="flex items-center justify-between mb-4">
                <p className="text-muted-foreground font-semibold group-hover:text-secondary transition-colors">Famílias Atendidas</p>
                <TrendingUp className="text-secondary group-hover:scale-125 transition-transform" size={24} />
              </div>
              <p className="text-7xl font-black text-secondary group-hover:scale-110 transition-transform duration-300 inline-block origin-left">
                <CounterAnimation target={1000} shouldAnimate={isVisible} />+
              </p>
              <p className="text-foreground mt-4 font-medium group-hover:text-secondary/80 transition-colors">Com abordagem baseada em evidências científicas</p>
            </div>
          </Reveal>
        </div>

        {/* Conditions */}
        <Reveal direction="up" delay={0.3} width="100%">
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Condições Atendidas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2 group hover:text-secondary transition-colors">
                    <CheckCircle2 size={20} className="text-secondary group-hover:scale-110 transition-transform" />
                    {condition.category}
                  </h4>
                  <ul className="space-y-2 ml-6">
                    {condition.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-foreground text-sm flex items-center gap-2 hover:translate-x-1 transition-transform duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full hover:scale-150 transition-transform"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Additional Info */}
        <Reveal direction="up" delay={0.4} width="100%">
          <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
            <p className="text-foreground leading-relaxed">
              <strong>No atendimento de adolescentes e adultos</strong>, também trabalhamos o desenvolvimento de habilidades funcionais e atividades da vida diária (AVDs), garantindo atenção integral às necessidades individuais de cada pessoa, promovendo a autonomia e independência.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
