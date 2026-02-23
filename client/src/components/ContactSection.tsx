import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
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
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Entre em Contato
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-lg text-foreground leading-relaxed">
              Estamos aqui para responder suas dúvidas e agendar sua consulta.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Reveal direction="left" delay={0.1} width="100%">
              <Card className="p-8 border-border hover:shadow-lg transition-shadow">
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
              <Card className="p-8 border-border hover:shadow-lg transition-shadow">
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
              <Card className="p-8 border-border hover:shadow-lg transition-shadow">
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
                className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                size="lg"
              >
                <MessageCircle size={20} />
                Conversar no WhatsApp
              </Button>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal direction="right" delay={0.2} width="100%">
            <Card className="p-8 border-border h-full">
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
    </section>
  );
}
