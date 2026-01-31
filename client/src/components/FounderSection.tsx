export default function FounderSection() {
  const specializations = [
    {
      title: "Neurocientista",
      description: "Especialista em funcionamento do cérebro e desenvolvimento neurológico",
    },
    {
      title: "Neuropedagoga",
      description: "Integra neurociência com práticas educacionais",
    },
    {
      title: "Pedagogia (USP)",
      description: "Formação em Pedagogia pela Universidade de São Paulo",
    },
    {
      title: "Neurociência",
      description: "Especialista pela Faculdade de Ciências Médicas da Santa Casa de São Paulo",
    },
    {
      title: "Psiquiatria Infantil",
      description: "Especialista em Psiquiatria e Saúde Mental da Infância e Adolescência pelo Child Behavior Institute of Miami",
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
            Excelência científica, rigor técnico e humanidade integrados em cada atendimento
          </p>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Michelle Bedeschi
              </h3>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                Fundadora do Instituto Matriz, Michelle Bedeschi é uma profissional de excelência com formação em múltiplas disciplinas que convergem para o desenvolvimento neurológico saudável.
              </p>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                Neurocientista e neuropedagoga, Michelle combina rigor científico com uma abordagem humanizada. Sua expertise garante que todos os programas, intervenções e avaliações sejam planejados com precisão, individualização e acompanhamento contínuo.
              </p>
              <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                <p className="text-foreground font-semibold">
                  "Cada criança é única. Nosso compromisso é entender sua história neurológica e potencializar seu desenvolvimento de forma integral."
                </p>
              </div>
            </div>

            {/* Right: Specializations */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-6">Especializações</h4>
              <div className="space-y-4">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-secondary/20 rounded-lg p-4 hover:border-secondary/50 transition-colors"
                  >
                    <h5 className="font-bold text-primary mb-1">{spec.title}</h5>
                    <p className="text-sm text-foreground/70">{spec.description}</p>
                  </div>
                ))}
              </div>
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
                Formação nas mais prestigiadas universidades da América Latina
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">Especialistas</div>
              <p className="text-foreground/80">
                Profissionais com expertise em suas respectivas áreas de atuação
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">Dedicados</div>
              <p className="text-foreground/80">
                Comprometidos com o desenvolvimento integral de cada paciente
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
            <p className="text-foreground/90">Email: institutomatriz.adm@gmail.com</p>
            <p className="text-sm text-foreground/70 mt-3">Segunda a sexta: 8h às 19h | Sábado: 8h às 12h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
