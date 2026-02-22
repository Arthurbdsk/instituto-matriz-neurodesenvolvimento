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
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O Diferencial do Instituto Matriz
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Neurociência, excelência científica e cuidado humano em cada atendimento, para crianças e adultos.
          </p>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          {/* Mobile Layout - Image with name below */}
          <div className="md:hidden mb-8">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316556941/RckQuGRTgLfCkIgm.jpg"
                  alt="Michelle Bedeschi"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-secondary mt-4 text-center">
                Michelle Bedeschi
              </h3>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Image */}
            <div className="flex justify-center md:order-2">
              <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316556941/RckQuGRTgLfCkIgm.jpg"
                  alt="Michelle Bedeschi"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Michelle Bedeschi
              </h3>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                Fundadora e Diretora do Instituto Matriz de Neurodesenvolvimento, Michelle Bedeschi é uma profissional de excelência com formação em múltiplas disciplinas que convergem para o desenvolvimento neurológico saudável.
              </p>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                Como especialista em Neurociência e Neuropsicopedagoga, ela alia rigor científico à abordagem humana e acolhedora, garantindo que cada avaliação, intervenção e programa seja planejado de forma individualizada, acompanhada de perto e voltada para resultados reais na vida das pessoas e famílias.
              </p>
              <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                <p className="text-foreground font-semibold">
                  “Cada pessoa é única. Nosso compromisso é compreender sua história e potencializar seu desenvolvimento de forma completa e integrada.”
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Text Content */}
          <div className="md:hidden">
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Fundadora e Diretora do Instituto Matriz de Neurodesenvolvimento, Michelle Bedeschi é uma profissional de excelência com formação em múltiplas disciplinas que convergem para o desenvolvimento neurológico saudável.
            </p>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              Como especialista em neurociência e neuropedagoga, ela alia rigor científico à abordagem humana e acolhedora, garantindo que cada avaliação, intervenção e programa seja planejado de forma individualizada, acompanhada de perto e voltada para resultados reais na vida das pessoas e famílias.
            </p>
            <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
              <p className="text-foreground font-semibold">
                "Cada pessoa é única. Nosso compromisso é compreender sua história e potencializar seu desenvolvimento de forma completa e integrada."
              </p>
            </div>
          </div>

          {/* Specializations - Below the main content */}
          <div className="mt-12 pt-8 border-t border-secondary/20">
            <h4 className="text-xl font-bold text-primary mb-6">Especializações</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-secondary/20 rounded-lg p-4 hover:border-secondary/50 transition-colors"
                >
                  <h5 className="font-bold text-primary mb-2 text-sm">{spec.title}</h5>
                  <p className="text-xs text-foreground/70">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary mb-6">Nossa Equipe</h3>
          <p className="text-foreground/90 mb-6 leading-relaxed">
            O Instituto Matriz é composto por profissionais de alto nível, selecionados por critérios rigorosos de excelência técnica, ética profissional e alinhamento científico.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">Renomadas</div>
              <p className="text-foreground/80">
                Formação nas mais prestigiadas universidades da América Latina.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">Especialistas</div>
              <p className="text-foreground/80">
                Profissionais com expertise em suas respectivas áreas de atuação.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">Dedicados</div>
              <p className="text-foreground/80">
                Comprometidos com o desenvolvimento integral de cada paciente.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-secondary/10 rounded-lg border-l-4 border-secondary">
            <p className="text-foreground/90 leading-relaxed">
              Cada membro da equipe compartilha da missão do Instituto: oferecer atendimento de excelência, baseado em evidências científicas, com sensibilidade às necessidades individuais de cada criança, adolescente e adulto atendido.
            </p>
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg">
            <h4 className="text-lg font-bold text-primary mb-3">Visite-nos</h4>
            <p className="text-foreground/90 mb-2">Alameda Madeira, 222 - Conjunto 92, Barueri, Brazil 06454-010</p>
            <p className="text-foreground/90 mb-2">Telefone: (11) 98464-0809</p>
            <p className="text-foreground/90">Email: contato@institutomatriz.com.br</p>
            <p className="text-sm text-foreground/70 mt-3">Segunda à sexta: 8h às 19h | Sábado: 8h às 13h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
