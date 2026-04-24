import { Button } from "@/components/ui/button";
import { BookOpen, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Split Screen Container */}
      <div className="flex flex-col md:flex-row flex-1 relative">
        {/* Left Column - Aulas Particulares (Aprendizado) */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 flex flex-col justify-center items-center p-8 md:p-16 lg:p-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float" style={{ animationDelay: "2s" }}></div>

          <Reveal direction="left" delay={0.1} width="100%">
            <div className="max-w-xl text-center md:text-left z-10">
              {/* Label */}
              <div className="inline-block mb-6 px-5 py-2 bg-blue-200/80 text-blue-900 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase">
                📚 Aprendizado
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-900 mb-6 leading-tight">
                Aulas Particulares e Reforço Escolar
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 leading-relaxed">
                Apoio pedagógico personalizado para destravar o potencial de aprendizado. Do ensino fundamental à faculdade, com abordagem baseada em evidências científicas.
              </p>

              {/* CTA Button */}
              <Reveal direction="up" delay={0.2}>
                <Button
                  onClick={() => document.getElementById("tutorship")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl py-6 px-10 font-bold text-lg rounded-full"
                >
                  <BookOpen size={24} />
                  Quero Aprender
                </Button>
              </Reveal>
            </div>
          </Reveal>
        </div>

        {/* Right Column - Terapias (Bem-estar) */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 flex flex-col justify-center items-center p-8 md:p-16 lg:p-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float" style={{ animationDelay: "2s" }}></div>

          <Reveal direction="right" delay={0.1} width="100%">
            <div className="max-w-xl text-center md:text-right z-10">
              {/* Label */}
              <div className="inline-block mb-6 px-5 py-2 bg-green-200/80 text-green-900 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase">
                💚 Bem-estar
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-green-900 mb-6 leading-tight">
                Terapias Integrativas e Acolhimento
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 leading-relaxed">
                Cuidado completo multidisciplinar para a saúde da mente e do corpo. Neuropsicologia, fonoaudiologia, terapia ocupacional e muito mais.
              </p>

              {/* CTA Button */}
              <Reveal direction="up" delay={0.2}>
                <Button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl py-6 px-10 font-bold text-lg rounded-full"
                >
                  <Heart size={24} />
                  Quero me Cuidar
                </Button>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
