import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "O Instituto Matriz funciona de segunda a sexta das 8h às 19h e aos sábados das 8h às 12h.",
  },
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Oferecemos avaliação neuropsicológica, psicologia clínica infantil, fonoaudiologia, psicopedagogia, terapia ocupacional e acompanhamento pedagógico.",
  },
  {
    question: "Como agendar uma consulta?",
    answer:
      "Você pode agendar através do botão 'Agendar Consulta' no site, enviar um email para institutomatriz.adm@gmail.com ou ligar para (11) 98464-0809.",
  },
  {
    question: "Qual é o endereço?",
    answer:
      "Estamos localizados em Alameda Madeira, 222 - Conjunto 92, Barueri, Brazil 06454-010.",
  },
  {
    question: "Atendemos qual faixa etária?",
    answer:
      "Atendemos crianças a partir de 2 anos, adolescentes e adultos. Cada caso é avaliado individualmente para determinar a melhor abordagem.",
  },
  {
    question: "Vocês trabalham com convênios?",
    answer:
      "Sim, trabalhamos com diversos convênios de saúde. Entre em contato para confirmar se o seu convênio é aceito.",
  },
];

export default function NoraChat() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-96 border-2 border-primary max-h-[600px] overflow-y-auto">
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/images/nora-mascote.png"
            alt="Nora"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold" style={{ color: "#ffffff" }}>
              NORA
            </h3>
            <p className="text-xs text-foreground/70">Assistente do Instituto Matriz</p>
          </div>
        </div>

        <p className="text-sm text-foreground mb-4 font-semibold">
          Perguntas Frequentes:
        </p>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full text-left p-3 bg-primary/10 hover:bg-primary/20 transition-colors flex items-start justify-between gap-2"
              >
                <span className="text-sm font-medium text-foreground">
                  {item.question}
                </span>
                <span className="text-primary flex-shrink-0 text-lg">
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </button>

              {expandedIndex === index && (
                <div className="p-3 bg-white border-t border-border">
                  <p className="text-sm text-foreground/80">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-xs text-foreground/70 font-semibold mb-2">Contato Direto:</p>
          <p className="text-xs text-foreground/70">
            <strong>Telefone:</strong> (11) 98464-0809
          </p>
          <p className="text-xs text-foreground/70 mt-1">
            <strong>Email:</strong> institutomatriz.adm@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
