import { Card } from "@/components/ui/card";
import { Brain, Stethoscope, ClipboardList, Dumbbell, BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Brain,
    title: "Saúde Mental e Neurodesenvolvimento",
    items: [
      "Neuropsicologia",
      "Psicologia",
      "Análise do Comportamento Aplicada (ABA)",
      "Modelo Denver de Intervenção Precoce (ESDM – Early Start Denver Model)",
      "Terapia Cognitivo-Comportamental (TCC)",
      "Reabilitação Cognitiva",
      "Neuromodulação Não-Invasiva",
    ],
  },
  {
    icon: Stethoscope,
    title: "Terapias Integrativas",
    items: [
      "Fonoaudiologia",
      "Terapia Ocupacional (Integração Sensorial de Ayres®)",
      "Fisioterapia Neurofuncional e Ortopédica",
      "Psicomotricidade",
      "Arteterapia",
      "Musicoterapia",
      "Terapia Assistida por Equinos",
      "Neuropedagogia",
    ],
  },
  {
    icon: ClipboardList,
    title: "Avaliações Especializadas",
    items: [
      "Avaliação Neuropsicológica",
      "Avaliação Interdisciplinar",
      "Avaliação Neuropedagógica",
    ],
  },
  {
    icon: Dumbbell,
    title: "Saúde Física e Nutricional",
    items: ["Condicionamento Físico", "Nutrição"],
  },
  {
    icon: BookOpen,
    title: "Educação e Aprendizagem",
    items: [
      "Reforço Escolar",
      "Tutoria",
      "Acompanhamento Pedagógico",
      "Psicopedagogia",
      "Alfabetização e Letramento",
      "Preparação para Vestibular",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Áreas de Atuação
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-lg text-foreground leading-relaxed">
              O Instituto Matriz atua em todo o espectro do neurodesenvolvimento, promovendo avaliação, acompanhamento e intervenção voltados para o desenvolvimento cerebral, neuronal e funcional.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={0.1 * (index % 3)}
                width="100%"
              >
                <Card
                  className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-border bg-white hover:scale-105 hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-secondary group-hover:rotate-12 transition-transform duration-300" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-foreground group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <span className="text-secondary font-bold mt-1 group-hover:scale-125 transition-transform duration-300">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
