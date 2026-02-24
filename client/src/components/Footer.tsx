import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* About */}
          <div className="animate-fade-in-up animate-stagger-1">
            <div className="mb-4 animate-bounce-in hover:scale-110 transition-transform duration-300">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316556941/aHaMeTVtEOFZnJco.jpg"
                alt="Instituto Matriz"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
              />
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-4 hover:text-green-300 transition-colors duration-300">
              Instituto Matriz
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed hover:text-white transition-colors duration-300">
              Centro de referência em terapias multidisciplinares, promovendo uma melhor qualidade de vida para TEA, TDAH, Sindrome de Down e tantos outros Transtornos de Neurodesenvolvimento.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animate-stagger-2">
            <h4 className="font-bold text-base sm:text-lg mb-4 hover:text-green-300 transition-colors">Links Rápidos</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100">
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="#home" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="#about" className="hover:text-white transition-colors">
                  Quem Somos
                </a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="#services" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="#audience" className="hover:text-white transition-colors">
                  Público Atendido
                </a>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <a href="#contact" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up animate-stagger-3">
            <h4 className="font-bold text-base sm:text-lg mb-4 hover:text-green-300 transition-colors">Serviços</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100">
              <li className="hover:translate-x-2 transition-transform duration-300">Neuropsicologia e Psicologia</li>
              <li className="hover:translate-x-2 transition-transform duration-300">Fonoaudiologia</li>
              <li className="hover:translate-x-2 transition-transform duration-300">Terapia Ocupacional e Fisioterapia</li>
              <li className="hover:translate-x-2 transition-transform duration-300">Terapias Integradas</li>
              <li className="hover:translate-x-2 transition-transform duration-300">Educação e Aprendizagem</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up animate-stagger-4">
            <h4 className="font-bold text-base sm:text-lg mb-4 hover:text-green-300 transition-colors">Contato</h4>
            <div className="space-y-3 text-xs sm:text-sm text-blue-100">
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300 group">
                <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                <span className="group-hover:text-white transition-colors">(11) 98464-0809</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300 group">
                <Mail size={16} className="group-hover:rotate-12 transition-transform" />
                <span className="group-hover:text-white transition-colors">contato@institutomatriz.com.br</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.facebook.com/CentroEducacionalMatriz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:scale-125 hover:-translate-y-1 duration-300 inline-block"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/institutomatriz_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:scale-125 hover:-translate-y-1 duration-300 inline-block"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/cematriz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:scale-125 hover:-translate-y-1 duration-300 inline-block"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-blue-100">
            <div className="animate-fade-in-up">
              <p>
                © {currentYear} Instituto Matriz de Neurodesenvolvimento. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex gap-4 md:justify-end animate-fade-in-up">
              <a href="/politica-de-privacidade" className="hover:text-white transition-colors hover:underline">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="hover:text-white transition-colors hover:underline">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
