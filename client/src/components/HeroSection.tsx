import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Instituto Matriz de Neurodesenvolvimento
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Ciência, desenvolvimento e humanidade integrados.
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed max-w-lg">
              Mais de 20 anos de experiência em saúde, educação e desenvolvimento humano. Acompanhamos mais de 1.000 famílias com uma abordagem interdisciplinar baseada em evidências científicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => window.open("https://wa.me/5511984640809", "_blank")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
              >
                Agendar Consulta
                <ArrowRight size={20} />
              </Button>
              <Button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/logo-matriz.png"
                alt="Logo Instituto Matriz"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}
