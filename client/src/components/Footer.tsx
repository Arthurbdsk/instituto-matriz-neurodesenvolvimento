import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316556941/aHaMeTVtEOFZnJco.jpg"
                alt="Instituto Matriz"
                className="h-24 w-auto"
              />
            </div>
            <h3 className="font-bold text-lg mb-4">
              Instituto Matriz
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Centro de referência em terapias multidisciplinares, promovendo uma melhor qualidade de vida para TEA, TDAH, Sindrome de Down e tantos outros Transtornos de Neurodesenvolvimento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#audience" className="hover:text-white transition-colors">
                  Público Atendido
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Neuropsicologia e Psicologia</li>
              <li>Fonoaudiologia</li>
              <li>Terapia Ocupacional e Fisioterapia</li>
              <li>Terapias Integradas</li>
              <li>Educação e Aprendizagem</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 98464-0809</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@institutomatriz.com.br</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.facebook.com/CentroEducacionalMatriz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/institutomatriz_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/cematriz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-100">
            <div>
              <p>
                © {currentYear} Instituto Matriz de Neurodesenvolvimento. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex gap-4 md:justify-end">
              <a href="/politica-de-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
