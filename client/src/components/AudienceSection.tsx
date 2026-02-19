import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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

export default function AudienceSection() {
  return (
    <section id="audience" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Público Atendido
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Atendemos crianças, adolescentes e adultos com uma abordagem personalizada e baseada em evidências científicas.
          </p>
        </div>

        {/* Age Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="p-8 border-l-4 border-l-secondary hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">
                {audience.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Conditions */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Condições Atendidas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <div key={index}>
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-secondary" />
                  {condition.category}
                </h4>
                <ul className="space-y-2 ml-6">
                  {condition.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-foreground text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-foreground leading-relaxed">
            <strong>No atendimento de adolescentes e adultos</strong>, também trabalhamos o desenvolvimento de habilidades funcionais e atividades da vida diária (AVDs), garantindo atenção integral às necessidades individuais de cada pessoa, promovendo a autonomia e independência.
          </p>
        </div>
      </div>
    </section>
  );
}
