export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site do Instituto Matriz de Neurodesenvolvimento, você concorda em aceitar e cumprir estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve utilizar este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Uso Licenciado</h2>
            <p>
              É concedida a você uma licença limitada, não exclusiva e não transferível para acessar e usar este site para fins pessoais e informativos. Você não pode reproduzir, distribuir, transmitir, exibir ou vender qualquer conteúdo deste site sem permissão prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Isenção de Responsabilidade</h2>
            <p>
              O conteúdo deste site é fornecido "como está" sem garantias de qualquer tipo, expressas ou implícitas. O Instituto Matriz não garante que o site será ininterrupto, seguro ou livre de erros. Você usa este site por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância o Instituto Matriz será responsável por danos indiretos, incidentais, especiais, consequentes ou punitivos, incluindo perda de lucros, dados ou uso, mesmo que tenha sido avisado sobre a possibilidade de tais danos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Links Externos</h2>
            <p>
              Este site pode conter links para sites de terceiros. O Instituto Matriz não é responsável pelo conteúdo, precisão ou práticas de privacidade de sites externos. O acesso a links externos é por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Modificações dos Termos</h2>
            <p>
              O Instituto Matriz se reserva o direito de modificar estes Termos de Uso a qualquer momento. As modificações entram em vigor imediatamente após a publicação. Seu uso contínuo do site após as modificações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Conteúdo do Usuário</h2>
            <p>
              Qualquer conteúdo que você enviar, postar ou exibir neste site é de sua responsabilidade. Você garante que possui todos os direitos necessários para o conteúdo e que ele não viola nenhuma lei ou direito de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, gráficos, logos, imagens e software, é propriedade do Instituto Matriz ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais internacionais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis do Brasil, sem considerar seus conflitos de disposições legais. Qualquer ação legal ou procedimento relacionado a estes termos será ajuizado exclusivamente nos tribunais competentes de São Paulo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email: contato@institutomatriz.com.br ou telefone: (11) 98464-0809.
            </p>
          </section>

          <section className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground/70">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
