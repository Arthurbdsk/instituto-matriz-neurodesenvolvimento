import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100 relative overflow-hidden">
      {/* Decorative Elements - More prominent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -mr-64 -mt-64 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl -ml-64 -mb-64 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal direction="up" delay={0.1} width="100%">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
              Dê o primeiro passo na evolução e autonomia de quem você ama
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2} width="100%">
            <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-center">
              Estamos aqui para responder suas dúvidas e agendar sua consulta.
            </p>
          </Reveal>
        </div>

        {/* Desktop Layout - Centered Contact Info */}
        <div className="hidden lg:block">
          <Reveal direction="up" delay={0.3} width="100%">
            <div className="max-w-4xl mx-auto">
              {/* Contact Information Grid */}
              <div className="grid grid-cols-3 gap-8 mb-16">
                {/* Telefone */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Phone className="text-primary" size={32} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-3">Telefone</h3>
                  <p className="text-foreground font-semibold mb-2">(11) 98464-0809</p>
                  <p className="text-sm text-muted-foreground">
                    Segunda a sexta: 8h às 19h
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sábado: 8h às 13h
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-100 rounded-2xl">
                      <MessageCircle className="text-green-600" size={32} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-3">WhatsApp</h3>
                  <p className="text-foreground font-semibold mb-2">(11) 98464-0809</p>
                  <p className="text-sm text-muted-foreground">
                    Resposta rápida via WhatsApp
                  </p>
                </div>

                {/* E-mail */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Mail className="text-primary" size={32} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-3">E-mail</h3>
                  <p className="text-foreground font-semibold mb-2">contato@institutomatriz.com.br</p>
                  <p className="text-sm text-muted-foreground">
                    Responderemos em até 24h
                  </p>
                </div>
              </div>

              {/* Large CTA Button */}
              <div className="flex flex-col items-center gap-6">
                <Button
                  onClick={() => window.open("https://wa.me/5511984640809", "_blank")}
                  className="bg-green-600 hover:bg-green-700 text-white text-xl font-black px-16 py-8 rounded-full shadow-2xl shadow-green-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <MessageCircle size={28} />
                  Fale conosco agora no WhatsApp
                </Button>
                

              </div>

              {/* Location Card */}
              <div className="mt-16 bg-white border border-border rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">Visite-nos</h3>
                <p className="text-foreground font-semibold mb-1">Alameda Madeira, 222 - Conjunto 92</p>
                <p className="text-foreground font-semibold">Barueri, São Paulo 06454-010</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mobile Layout - Keep Original */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-8 md:gap-10">
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <Reveal direction="left" delay={0.1} width="100%">
                <Card className="p-4 sm:p-6 md:p-8 border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Telefone</h3>
                      <p className="text-foreground">(11) 98464-0809</p>
                      <p className="text-sm text-muted-foreground">
                        Segunda a sexta: 8h às 19h | Sábado: 8h às 13h
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>

              <Reveal direction="left" delay={0.2} width="100%">
                <Card className="p-4 sm:p-6 md:p-8 border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">E-mail</h3>
                      <p className="text-foreground">contato@institutomatriz.com.br</p>
                      <p className="text-sm text-muted-foreground">
                        Responderemos em até 24 horas
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>

              <Reveal direction="left" delay={0.3} width="100%">
                <Card className="p-4 sm:p-6 md:p-8 border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Localização</h3>
                      <p className="text-foreground">Alameda Madeira, 222 - Conjunto 92</p>
                      <p className="text-foreground">Barueri, Brazil 06454-010</p>
                      <p className="text-sm text-muted-foreground">
                        Visite-nos em nosso endereço
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>

              <Reveal direction="up" delay={0.4} width="100%">
                <Button
                  onClick={() => window.open("https://wa.me/5511984640809", "_blank")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 py-6 sm:py-8"
                >
                  <MessageCircle size={20} />
                  Conversar no WhatsApp
                </Button>
              </Reveal>
            </div>

            {/* Contact Form - Mobile Only */}
            <Reveal direction="right" delay={0.2} width="100%">
              <Card className="p-4 sm:p-6 md:p-8 border-border h-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) XXXXX-XXXX"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos como podemos ajudar..."
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
