import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const FAQ_ITEMS = [
  {
    id: "horarios",
    keywords: ["horário", "hora", "funciona", "abre", "fecha", "quando", "atende", "expediente"],
    answer:
      "O Instituto Matriz funciona de segunda a sexta das 8h às 19h e aos sábados das 8h às 12h. Agendamentos podem ser feitos através do site, email institutomatriz.adm@gmail.com ou pelo telefone (11) 98464-0809.",
  },
  {
    id: "servicos",
    keywords: ["serviço", "oferece", "atendimento", "terapia", "avaliação", "faz", "oferecemos"],
    answer:
      "Oferecemos avaliação neuropsicológica, psicologia clínica infantil, fonoaudiologia, psicopedagogia, terapia ocupacional e acompanhamento pedagógico.",
  },
  {
    id: "idade",
    keywords: ["idade", "criança", "bebê", "adolescente", "adulto", "anos", "quanto"],
    answer:
      "Atendemos crianças a partir de 2 anos, adolescentes e adultos. Cada caso é avaliado individualmente para determinar a melhor abordagem.",
  },
  {
    id: "agendar",
    keywords: ["agendar", "marcar", "consulta", "agendamento", "marcação", "como agendar"],
    answer:
      "Você pode agendar através do botão 'Agendar Consulta' no site, enviar um email para institutomatriz.adm@gmail.com ou ligar para (11) 98464-0809. Responderemos em até 24 horas.",
  },
  {
    id: "convenio",
    keywords: ["convênio", "plano", "saúde", "aceita", "particular", "tabela"],
    answer:
      "Sim, trabalhamos com diversos convênios de saúde. Entre em contato para confirmar se o seu convênio é aceito.",
  },
  {
    id: "endereco",
    keywords: ["localização", "endereço", "onde", "fica", "local", "morada", "rua"],
    answer:
      "Estamos localizados em Alameda Madeira, 222 - Conjunto 92, Barueri, Brazil 06454-010. Para informações sobre como chegar, entre em contato conosco pelo email institutomatriz.adm@gmail.com ou telefone (11) 98464-0809.",
  },
  {
    id: "contato",
    keywords: ["contato", "telefone", "email", "whatsapp", "ligar", "enviar mensagem"],
    answer:
      "Você pode nos contatar por: Telefone: (11) 98464-0809 | Email: institutomatriz.adm@gmail.com | Endereço: Alameda Madeira, 222 - Conjunto 92, Barueri, Brazil 06454-010",
  },
];

const QUICK_QUESTIONS = [
  "Qual é o horário de funcionamento?",
  "Quais serviços vocês oferecem?",
  "Como agendar uma consulta?",
  "Qual é o endereço?",
];

export default function NoraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Olá! Sou a Nora, mascote do Instituto Matriz! Como posso ajudá-lo hoje? Clique em uma das perguntas abaixo ou digite sua dúvida.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findRelevantAnswer = (userMessage: string): string | null => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Remove acentos para melhor compatibilidade
    const normalizedMessage = lowerMessage
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    let bestMatch = null;
    let bestMatchCount = 0;

    for (const faq of FAQ_ITEMS) {
      let matchCount = 0;
      
      for (const keyword of faq.keywords) {
        const normalizedKeyword = keyword
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        
        if (normalizedMessage.includes(normalizedKeyword)) {
          matchCount++;
        }
      }

      if (matchCount > bestMatchCount) {
        bestMatchCount = matchCount;
        bestMatch = faq.answer;
      }
    }

    return bestMatch;
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const faqAnswer = findRelevantAnswer(textToSend);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content:
          faqAnswer ||
          "Desculpe, não consegui encontrar uma resposta para sua pergunta. Por favor, entre em contato conosco pelo telefone (11) 98464-0809 ou email institutomatriz.adm@gmail.com.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  const showQuickQuestions = messages.length === 1;

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-110 border-2 border-primary"
          aria-label="Abrir chat com Nora"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/nora-mascote.png"
                alt="Nora"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold" style={{color: '#ffffff'}}>Nora</h3>
                <p className="text-xs opacity-90">Assistente do Instituto Matriz</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20 p-1 rounded transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.type === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-white text-foreground border border-border rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.type === "user" ? "opacity-70" : "opacity-50"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {showQuickQuestions && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-foreground/60 font-semibold">Perguntas frequentes:</p>
                {QUICK_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left text-sm p-2 bg-primary/10 hover:bg-primary/20 rounded border border-primary/20 hover:border-primary/50 transition-all text-foreground"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-foreground border border-border px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-border bg-white">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !isLoading) {
                    handleSendMessage();
                  }
                }}
                placeholder="Digite sua pergunta..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
