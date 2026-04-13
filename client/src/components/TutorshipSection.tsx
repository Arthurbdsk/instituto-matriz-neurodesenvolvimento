import { BookOpen, Users, Globe, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const subjects = [
  {
    category: "Ensino Fundamental",
    items: ["Português", "Matemática", "Ciências", "História", "Geografia", "Inglês"],
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
  },
  {
    category: "Ensino Médio",
    items: ["Português", "Matemática", "Física", "Química", "Biologia", "História", "Geografia", "Inglês", "Filosofia"],
    color: "bg-green-600",
    lightColor: "bg-green-50",
  },
  {
    category: "Preparação para Vestibular",
    items: ["ENEM", "Vestibulares", "Reforço Intensivo", "Revisão de Conteúdos"],
    color: "bg-teal-600",
    lightColor: "bg-teal-50",
  },
  {
    category: "Ensino Superior",
    items: ["Disciplinas Acadêmicas", "Reforço Universitário", "Preparação para Provas"],
    color: "bg-cyan-600",
    lightColor: "bg-cyan-50",
  },
];

const modalities = [
  {
    title: "Aulas Online",
    description: "Flexibilidade e comodidade. Aulas ao vivo via plataforma segura, com suporte técnico completo.",
    icon: Globe,
    color: "bg-blue-600",
    benefits: ["Horários flexíveis", "Sem deslocamento", "Acesso de qualquer lugar", "Gravação de aulas"],
  },
  {
    title: "Aulas Presenciais",
    description: "Atendimento personalizado em nosso espaço especializado, com recursos pedagógicos avançados.",
    icon: MapPin,
    color: "bg-green-600",
    benefits: ["Ambiente dedicado", "Interação direta", "Recursos pedagógicos", "Acompanhamento integral"],
  },
];

export default function TutorshipSection() {
  return (
    <section id="tutorship" className="py-24 md:py-40 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal direction="up" delay={0.1} width="100%">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary mb-10 text-center tracking-tighter leading-[0.9]">
              Aulas <br className="hidden md:block" /> <span className="text-secondary">Particulares</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground/60 leading-tight max-w-3xl mx-auto font-bold">
              Reforço escolar especializado para todos os níveis. Do ensino fundamental até a faculdade, com abordagem personalizada e baseada em evidências.
            </p>
          </Reveal>
        </div>

        {/* Modalities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {modalities.map((modality, index) => {
            const Icon = modality.icon;
            return (
              <Reveal key={index} direction={index === 0 ? "left" : "right"} delay={0.1 * (index + 1)} width="100%">
                <Card className="p-8 md:p-12 h-full border-2 border-transparent bg-white hover:shadow-2xl transition-all duration-500 rounded-[32px] md:rounded-[48px] hover:scale-[1.02] hover:-translate-y-2 group">
                  <div className={`p-5 md:p-6 ${modality.color} text-white rounded-[24px] md:rounded-[32px] w-fit mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <Icon size={32} className="md:w-[40px]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">
                    {modality.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-foreground/70 font-bold leading-relaxed mb-8">
                    {modality.description}
                  </p>
                  <ul className="space-y-3 md:space-y-4">
                    {modality.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3 text-sm md:text-base font-bold text-foreground/60">
                        <CheckCircle2 size={20} className={`${modality.color} text-white rounded-full flex-shrink-0`} style={{backgroundColor: modality.color.replace('bg-', '')}} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Subjects Grid */}
        <Reveal direction="up" delay={0.3} width="100%">
          <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-16 lg:p-24 border-2 border-primary/5 shadow-inner mb-24">
            <div className="flex items-center gap-3 md:gap-4 mb-12 md:mb-16 justify-center flex-col sm:flex-row">
              <BookOpen className="text-primary" size={32} />
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-primary text-center tracking-tighter">
                Matérias Oferecidas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className={`hover:translate-x-2 transition-transform duration-300 ${subject.lightColor} p-8 md:p-10 lg:p-12 rounded-[24px] md:rounded-[32px] shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white`}
                >
                  <h4 className={`text-lg md:text-xl lg:text-2xl font-black text-${subject.color.replace('bg-', '')} mb-6 md:mb-8 flex items-center gap-3 md:gap-4`}>
                    <div className={`w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-lg md:rounded-xl ${subject.color} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <CheckCircle2 size={24} />
                    </div>
                    {subject.category}
                  </h4>
                  <ul className="space-y-3 md:space-y-4">
                    {subject.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm md:text-base lg:text-lg font-bold text-foreground/70 flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full ${subject.color} opacity-40 flex-shrink-0`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal direction="up" delay={0.4} width="100%">
          <div className="text-center">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 font-bold mb-8">
              Interessado em aulas particulares? Entre em contato conosco!
            </p>
            <Button
              onClick={() => window.open("https://wa.me/5511984640809", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
