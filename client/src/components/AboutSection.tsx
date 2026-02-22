import { Card } from "@/components/ui/card";
import { Brain, Heart, Users, Award, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Ciência Aplicada",
    description: "Práticas e intervenções baseadas em evidências e dados avaliativos.",
  },
  {
    icon: Heart,
    title: "Humanidade",
    description: "Cada pessoa é única, respeitada integralmente em sua singularidade.",
  },
  {
    icon: Users,
    title: "Interdisciplinaridade",
    description: "Integração real entre saúde, educação e terapias especializadas.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Equipe qualificada, atualização contínua e práticas de alto padrão técnico.",
  },
  {
    icon: Target,
    title: "Individualização",
    description: "Intervenções planejadas de forma personalizada, respeitando ritmo e contexto.",
  },
  {
    icon: Brain,
    title: "Ética e Responsabilidade",
    description: "Conduta profissional rigorosa em todas as ações.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            O Instituto Matriz de Neurodesenvolvimento é um centro especializado em saúde, educação e desenvolvimento humano, com atuação interdisciplinar e baseada em evidências científicas.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Com mais de <strong>20 anos de experiência</strong>, o Instituto Matriz é a consolidação de uma prática madura, ética e responsável, tendo acompanhado mais de <strong>1.000 famílias</strong>, inclusive em projetos internacionais.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            const staggerClass = `animate-stagger-${(index % 5) + 1}`;
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-300 border-border animate-fade-in-up ${staggerClass} hover:scale-105 hover:-translate-y-2`}
                style={{borderColor: '#9e9e9e'}}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center animate-fade-in-up animate-stagger-1 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
            <p className="text-foreground leading-relaxed">
              Proporcionar desenvolvimento humano integral por meio da integração de ciência, saúde mental, educação e terapias especializadas.
            </p>
          </div>
          <div className="text-center animate-fade-in-up animate-stagger-2 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
            <p className="text-foreground leading-relaxed">
              Ser referência nacional e internacional em intervenções de neurodesenvolvimento, saúde mental e educação.
            </p>
          </div>
          <div className="text-center animate-fade-in-up animate-stagger-3 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary mb-4">Compromisso</h3>
            <p className="text-foreground leading-relaxed">
              Cada pessoa é respeitada em sua singularidade, história e tempo. Aprender é processo, não produto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
