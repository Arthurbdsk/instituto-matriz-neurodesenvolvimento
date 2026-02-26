import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <Reveal direction="left" delay={0.1}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                  Instituto Matriz de Neurodesenvolvimento
                </h1>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium">
                  Ciência, neurodesenvolvimento e humanidade integrados.
                </p>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.3}>
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed max-w-lg">
                Há mais de 20 anos atuando nas áreas de saúde, educação e neurodesenvolvimento humano, o Instituto Matriz oferece acompanhamento interdisciplinar especializado em Transtornos do Neurodesenvolvimento, como: <strong>TEA, TDAH, TOD, Síndrome de Down, entre outras.</strong>
                <br /><br />
                Já acompanhamos mais de 1.000 famílias com uma abordagem baseada em evidências científicas, aliando rigor técnico, escuta qualificada e planejamento individualizado.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col gap-3 sm:gap-4 pt-4">
                <Button
                  onClick={() => window.open("https://wa.me/5511984640809", "_blank")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg py-6 sm:py-8"
                >
                  <MessageCircle size={20} />
                  Converse no WhatsApp
                </Button>
                <Button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 py-6 sm:py-8"
                >
                  Saiba Mais
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center items-center">
            <Reveal direction="right" delay={0.2} distance={100}>
              <div className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-2xl animate-float">
                <img
                  src="/images/logo-matriz.png"
                  alt="Logo Instituto Matriz"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
}
