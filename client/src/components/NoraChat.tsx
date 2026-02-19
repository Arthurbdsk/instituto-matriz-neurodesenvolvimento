import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "O Instituto Matriz funciona de segunda a sexta das 8h às 19h e aos sábados das 8h às 13h.",
  },
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Oferecemos serviços multidisciplinares: Neuropsicologia, Psicologia, Análise do Comportamento Aplicada (ABA), Fonoaudiologia, Terapia Ocupacional com Integração Sensorial, Fisioterapia Neurofuncional, Psicopedagogia, Neuropedagogia, Musicoterapia, Arteterapia, Terapia Assistida por Equinos e Avaliações Especializadas.",
  },
  {
    question: "Como agendar uma consulta?",
    answer:
      "Você pode agendar através do botão 'Converse no WhatsApp' no site, enviar um email para contato@institutomatriz.com.br ou ligar para (11) 98464-0809.",
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
      "Sim, trabalhamos com diversos convênios de saúde. Entre em contato através do WhatsApp (11) 98464-0809 para confirmar se o seu convênio é aceito.",
  },
];

export default function NoraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white text-primary rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-110 border-2 border-primary"
          aria-label="Abrir chat com Nora"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center sm:justify-end sm:bottom-6 sm:right-6 p-4 sm:p-0">
          {/* Overlay para fechar ao clicar fora (apenas em desktop) */}
          <div
            className="hidden sm:block absolute inset-0 z-0"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative z-10 bg-white rounded-lg shadow-2xl border-2 border-primary w-full sm:w-96 max-h-[85vh] sm:max-h-[600px] overflow-y-auto flex flex-col">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-border p-4 sm:p-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1">
                <img
                  src="/images/nora-mascote.png"
                  alt="Nora"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: "#262626" }}>
                    NORA
                  </h3>
                  <p className="text-xs text-foreground/70 truncate">
                    Assistente do Instituto Matriz
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                aria-label="Fechar chat"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-foreground mb-4 font-semibold">
                Perguntas Frequentes:
              </p>

              <div className="space-y-2">
                {FAQ_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="w-full text-left p-2.5 sm:p-3 bg-primary/10 hover:bg-primary/20 transition-colors flex items-start justify-between gap-2"
                    >
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {item.question}
                      </span>
                      <span className="text-primary flex-shrink-0 text-lg">
                        {expandedIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    {expandedIndex === index && (
                      <div className="p-2.5 sm:p-3 bg-white border-t border-border">
                        <p className="text-xs sm:text-sm text-foreground/80">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-border p-4 sm:p-6">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-xs text-foreground/70 font-semibold mb-2">
                  Contato Direto:
                </p>
                <p className="text-xs text-foreground/70">
                  <strong>Telefone:</strong> (11) 98464-0809
                </p>
                <p className="text-xs text-foreground/70 mt-1">
                  <strong>Email:</strong> contato@institutomatriz.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
