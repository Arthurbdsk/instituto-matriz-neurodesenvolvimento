import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const FAQ_ITEMS = [
  {
    question: "horário funcionamento",
    answer:
      "O Instituto Matriz funciona de segunda a sexta, das 8h às 18h. Agendamentos podem ser feitos através do site, email institutomatriz.adm@gmail.com ou pelo telefone (11) 98464-0809.",
  },
  {
    question: "serviços oferecidos",
    answer:
      "Oferecemos avaliação neuropsicológica, psicologia clínica infantil, fonoaudiologia, psicopedagogia, terapia ocupacional e acompanhamento pedagógico.",
  },
  {
    question: "idade mínima atendimento",
    answer:
      "Atendemos crianças a partir de 2 anos, adolescentes e adultos. Cada caso é avaliado individualmente para determinar a melhor abordagem.",
  },
  {
    question: "agendar consulta",
    answer:
      "Você pode agendar através do botão 'Agendar Consulta' no site, enviar um email para institutomatriz.adm@gmail.com ou ligar para (11) 98464-0809. Responderemos em até 24 horas.",
  },
  {
    question: "convênios",
    answer:
      "Sim, trabalhamos com diversos convênios de saúde. Entre em contato para confirmar se o seu convênio é aceito.",
  },
  {
    question: "localização endereço",
    answer:
      "Estamos localizados em São Paulo. Para informações precisas sobre o endereço e como chegar, entre em contato conosco pelo email institutomatriz.adm@gmail.com ou telefone (11) 98464-0809.",
  },
];

export default function NoraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Olá! Sou a Nora, mascote do Instituto Matriz! Como posso ajudá-lo hoje? Você pode fazer perguntas sobre nossos horários, serviços, agendamentos e muito mais!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatMutation = trpc.chat.ask.useMutation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findRelevantAnswer = (userMessage: string): string | null => {
    const lowerMessage = userMessage.toLowerCase();

    for (const faq of FAQ_ITEMS) {
      const questionKeywords = faq.question.toLowerCase().split(" ");
      const messageWords = lowerMessage.split(" ");

      const matchCount = questionKeywords.filter((keyword) =>
        messageWords.some((word) => word.includes(keyword) || keyword.includes(word))
      ).length;

      if (matchCount >= 1) {
        return faq.answer;
      }
    }

    return null;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const faqAnswer = findRelevantAnswer(input);

      if (faqAnswer) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: faqAnswer,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const response = await chatMutation.mutateAsync({
          message: input,
          context:
            "Você é a Nora, mascote do Instituto Matriz de Neurodesenvolvimento. Responda de forma amigável e profissional sobre o Instituto. Não use asteriscos ou caracteres especiais nas respostas.",
        });

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: response.answer.replace(/\*\*/g, ""),
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content:
          "Desculpe, tive um problema ao processar sua pergunta. Por favor, tente novamente ou entre em contato conosco pelo telefone (11) 98464-0809.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-110"
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
                <h3 className="font-bold">Nora</h3>
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
                onClick={handleSendMessage}
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
