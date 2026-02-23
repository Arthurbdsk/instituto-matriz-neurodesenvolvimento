import { Card } from "@/components/ui/card";
import { Brain, Stethoscope, ClipboardList, Dumbbell, BookOpen, ChevronRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Brain,
    title: "Saúde Mental e Neurodesenvolvimento",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-100",
    items: [
      "Neuropsicologia",
      "Psicologia",
      "Análise do Comportamento Aplicada (ABA)",
      "Modelo Denver de Intervenção Precoce (ESDM)",
      "Terapia Cognitivo-Comportamental (TCC)",
      "Reabilitação Cognitiva",
      "Neuromodulação Não-Invasiva",
    ],
  },
  {
    icon: Stethoscope,
    title: "Terapias Integrativas",
    color: "bg-green-600",
    lightColor: "bg-green-50",
    borderColor: "border-green-100",
    items: [
      "Fonoaudiologia",
      "Terapia Ocupacional (Integração Sensorial)",
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
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-100",
    items: [
      "Avaliação Neuropsicológica",
      "Avaliação Interdisciplinar",
      "Avaliação Neuropedagógica",
    ],
  },
  {
    icon: Dumbbell,
    title: "Saúde Física e Nutricional",
    color: "bg-rose-600",
    lightColor: "bg-rose-50",
    borderColor: "border-rose-100",
    items: ["Condicionamento Físico", "Nutrição"],
  },
  {
    icon: BookOpen,
    title: "Educação e Aprendizagem",
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
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
    <section id="services" className="py-24 md:py-40 bg-slate-50">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal direction="up" delay={0.1} width="100%">
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-10 text-center tracking-tighter leading-[0.9]">
              Áreas de <br className="hidden md:block" /> <span className="text-secondary">Atuação</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl md:text-3xl text-foreground/60 leading-tight max-w-3xl mx-auto font-bold">
              O Instituto Matriz atua em todo o espectro do neurodesenvolvimento, promovendo avaliação, acompanhamento e intervenção.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal 
                key={index} 
                direction="up" 
                delay={0.1 * (index % 3)}
                width="100%"
              >
                <Card
                  className={`p-12 h-full hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} ${service.lightColor} hover:scale-[1.02] hover:-translate-y-2 cursor-pointer group relative overflow-hidden rounded-[48px]`}
                >
                  <div className="flex flex-col gap-8">
                    <div className={`p-6 ${service.color} text-white rounded-[32px] w-fit group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                      <Icon size={40} />
                    </div>
                    
                    <h3 className="text-3xl font-black text-primary group-hover:text-primary/80 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <ul className="space-y-5">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-4 text-lg text-foreground/70 group-hover:text-foreground transition-colors duration-300"
                        >
                          <ChevronRight className={`${service.color.replace('bg-', 'text-')} mt-1.5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity`} size={20} />
                          <span className="font-bold leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
