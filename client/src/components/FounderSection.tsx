import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, Clock, Star, Users, Heart } from "lucide-react";

export default function FounderSection() {
  const specializations = [
    {
      title: "Conquistas",
      description: "Membro da Sociedade Brasileira de Neurociências e Comportamento - SBNeC. Colaboradora da Sociedade Brasileira de Neuropsicopedagogia - SBNPp.",
    },
    {
      title: "Consultoria",
      description: "Palestrante, Consultora Educacional e Atuação em Orientação Parental em Saúde Mental e Neurodesenvolvimento.",
    },
    {
      title: "Licenciatura",
      description: "Graduação em Pedagogia pela Faculdade de Educação da Universidade de São Paulo - FEUSP.",
    },
    {
      title: "Neurociência",
      description: "Especialista em Transtornos de Neurodesenvolvimento pela Faculdade de Ciências Médicas da Santa Casa de São Paulo - FCMSCSP.",
    },
    {
      title: "Saúde Mental",
      description: "Especialista em Psiquiatria e Saúde Mental da Infância e Adolescência pelo Child Behavior Institute of Miami.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              O Diferencial do Instituto Matriz
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-medium">
              Neurociência, excelência científica e cuidado humano em cada atendimento, para crianças e adultos.
            </p>
          </Reveal>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 mb-20 border border-primary/5">
          {/* Mobile Layout - Image with name below */}
          <div className="md:hidden mb-12">
            <Reveal direction="up" delay={0.1} width="100%">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary/20">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316556941/RckQuGRTgLfCkIgm.jpg"
                    alt="Michelle Bedeschi"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-3xl font-black text-secondary mt-6 text-center">
                  Michelle Bedeschi
                </h3>
              </div>
            </Reveal>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="flex justify-center md:order-2">
              <Reveal direction="right" delay={0.2} distance={80}>
                <div className="relative w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl border-8 border-secondary/10">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316556941/RckQuGRTgLfCkIgm.jpg"
                    alt="Michelle Bedeschi"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right: Text */}
            <div className="md:order-1">
              <Reveal direction="left" delay={0.1}>
                <h3 className="text-4xl md:text-5xl font-black text-primary mb-8">
                  Michelle Bedeschi
                </h3>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                <p className="text-xl text-foreground/80 mb-6 leading-relaxed font-medium">
                  Fundadora e Diretora do Instituto Matriz de Neurodesenvolvimento, Michelle Bedeschi é uma profissional de excelência com formação em múltiplas disciplinas que convergem para o desenvolvimento neurológico saudável.
                </p>
              </Reveal>
              <Reveal direction="left" delay={0.3}>
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed font-medium">
                  Como especialista em Neurociência e Neuropsicopedagoga, ela alia rigor científico à abordagem humana e acolhedora, garantindo que cada avaliação, intervenção e programa seja planejado de forma individualizada.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.4}>
                <div className="bg-secondary/10 border-l-8 border-secondary p-8 rounded-3xl shadow-inner">
                  <p className="text-xl text-primary font-bold italic leading-relaxed">
                    "Cada pessoa é única. Nosso compromisso é compreender sua história e potencializar seu desenvolvimento de forma completa e integrada."
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Mobile Text Content */}
          <div className="md:hidden space-y-6">
            <Reveal direction="up" delay={0.2}>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Fundadora e Diretora do Instituto Matriz de Neurodesenvolvimento, Michelle Bedeschi é uma profissional de excelência com formação em múltiplas disciplinas que convergem para o desenvolvimento neurológico saudável.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Como especialista em neurociência e neuropedagoga, ela alia rigor científico à abordagem humana e acolhedora, garantindo que cada avaliação, intervenção e programa seja planejado de forma individualizada.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-2xl">
                <p className="text-lg text-primary font-bold italic">
                  "Cada pessoa é única. Nosso compromisso é compreender sua história e potencializar seu desenvolvimento de forma completa e integrada."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Specializations */}
          <div className="mt-20 pt-12 border-t border-slate-100">
            <Reveal direction="up" delay={0.1}>
              <h4 className="text-2xl font-black text-primary mb-10 flex items-center gap-3">
                <Star className="text-secondary fill-secondary" size={28} />
                Especializações
              </h4>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {specializations.map((spec, index) => (
                <Reveal 
                  key={index} 
                  direction="up" 
                  delay={0.1 * (index + 1)}
                  width="100%"
                >
                  <div
                    className="bg-slate-50 border-2 border-transparent hover:border-secondary/30 rounded-3xl p-6 h-full transition-all hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <h5 className="font-black text-primary mb-3 text-base group-hover:text-secondary transition-colors">{spec.title}</h5>
                    <p className="text-sm text-foreground/70 font-bold leading-snug">{spec.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <Reveal direction="up" delay={0.1} width="100%">
          <div className="bg-white rounded-[48px] shadow-2xl p-8 md:p-20 border border-primary/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Users size={32} />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-primary">Nossa Equipe</h3>
              </div>
              
              <p className="text-xl text-foreground/70 mb-12 leading-relaxed font-bold max-w-4xl">
                O Instituto Matriz é composto por profissionais de alto nível, selecionados por critérios rigorosos de excelência técnica, ética profissional e alinhamento científico.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Reveal direction="up" delay={0.2} width="100%">
                  <div className="bg-blue-50/50 border border-blue-100 rounded-[32px] p-10 h-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                    <div className="text-4xl font-black text-primary mb-4 group-hover:scale-105 transition-transform origin-left">Renomadas</div>
                    <p className="text-lg text-foreground/70 font-bold leading-tight">
                      Formação nas mais prestigiadas universidades da América Latina.
                    </p>
                  </div>
                </Reveal>
                <Reveal direction="up" delay={0.3} width="100%">
                  <div className="bg-green-50/50 border border-green-100 rounded-[32px] p-10 h-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                    <div className="text-4xl font-black text-secondary mb-4 group-hover:scale-105 transition-transform origin-left">Especialistas</div>
                    <p className="text-lg text-foreground/70 font-bold leading-tight">
                      Profissionais com expertise em suas respectivas áreas de atuação.
                    </p>
                  </div>
                </Reveal>
                <Reveal direction="up" delay={0.4} width="100%">
                  <div className="bg-amber-50/50 border border-amber-100 rounded-[32px] p-10 h-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                    <div className="text-4xl font-black text-amber-600 mb-4 group-hover:scale-105 transition-transform origin-left">Dedicados</div>
                    <p className="text-lg text-foreground/70 font-bold leading-tight">
                      Comprometidos com o desenvolvimento integral de cada paciente.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal direction="up" delay={0.5} width="100%">
                <div className="mt-12 p-10 bg-secondary/10 rounded-[32px] border-l-[12px] border-secondary shadow-xl">
                  <p className="text-xl md:text-2xl text-primary font-black leading-relaxed">
                    Cada membro da equipe compartilha da missão do Instituto: oferecer atendimento de excelência, baseado em evidências científicas, com sensibilidade às necessidades individuais.
                  </p>
                </div>
              </Reveal>

              {/* Visit Us Section - MOBILE FIXED */}
              <Reveal direction="up" delay={0.6} width="100%">
                <div className="mt-12 p-8 md:p-16 bg-primary text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mb-48 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12 md:items-center">
                    {/* Contact Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Heart className="text-secondary fill-secondary shrink-0" size={28} />
                        <h4 className="text-2xl md:text-4xl font-black">Visite-nos</h4>
                      </div>
                      <div className="space-y-5">
                        <div className="flex items-start gap-3">
                          <MapPin className="text-secondary shrink-0 mt-1" size={22} />
                          <p className="text-base md:text-xl font-bold leading-snug">
                            Alameda Madeira, 222<br />
                            Conjunto 92, Barueri<br />
                            CEP 06454-010
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="text-secondary shrink-0" size={22} />
                          <p className="text-base md:text-xl font-bold">(11) 98464-0809</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="text-secondary shrink-0 mt-1" size={22} />
                          <p className="text-base md:text-xl font-bold break-all">
                            contato@institutomatriz.com.br
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hours & CTA */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="text-secondary shrink-0" size={22} />
                        <p className="text-lg md:text-xl font-black">Horário de Atendimento</p>
                      </div>
                      <div className="space-y-2 text-base md:text-lg font-bold opacity-90">
                        <p>Segunda à sexta: 8h às 19h</p>
                        <p>Sábado: 8h às 13h</p>
                      </div>
                      <button 
                        onClick={() => window.open('https://wa.me/5511984640809', '_blank')}
                        className="mt-6 w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-2xl text-lg font-black transition-all hover:-translate-y-1 shadow-xl"
                      >
                        Agendar agora
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
