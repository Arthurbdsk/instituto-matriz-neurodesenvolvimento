import { Card } from "@/components/ui/card";
import { Brain, Stethoscope, ClipboardList, Dumbbell, BookOpen } from "lucide-react";

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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            O Instituto Matriz atua em todo o espectro do neurodesenvolvimento, promovendo avaliação, acompanhamento e intervenção voltados para o desenvolvimento cerebral, neuronal e funcional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
