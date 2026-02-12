import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 md:py-20">
      <div className="container">
        {/* Logo no topo, centralizado em mobile, canto superior direito em desktop */}
        <div className="flex justify-center md:justify-end mb-8 md:mb-12">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/logo-matriz.png"
              alt="Logo Instituto Matriz"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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

          {/* Right Space - Empty on desktop for balance */}
          <div className="hidden md:block"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}
