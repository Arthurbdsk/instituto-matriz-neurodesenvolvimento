import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", id: "home" },
    { label: "Quem Somos", id: "about" },
    { label: "Áreas de Atuação", id: "services" },
    { label: "Público Atendido", id: "audience" },
    { label: "Contato", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-lg py-3" 
          : "bg-white border-b border-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick("home")}
        >
          <div className="relative transition-transform duration-500 group-hover:scale-110">
            <img
              src="/images/logo-instituto-matriz.png"
              alt="Instituto Matriz"
              className="h-12 sm:h-16 md:h-24 lg:h-28 w-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-5 py-3 text-lg font-bold text-foreground/80 hover:text-primary transition-all rounded-full hover:bg-primary/5"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => window.open('https://wa.me/5511984640809', '_blank')}
            className="hidden md:flex bg-green-500 hover:bg-green-600 text-white gap-3 px-8 py-8 rounded-full text-lg font-black shadow-xl shadow-green-100 transition-all hover:-translate-y-1 active:translate-y-0"
          >
            <MessageCircle size={24} />
            Dê o primeiro passo. Fale no WhatsApp
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-4 bg-white hover:bg-primary/5 rounded-full transition-all border border-primary/10 shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={32} className="text-primary" /> : <Menu size={32} className="text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-4 right-4 mt-4 border border-primary/10 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-[32px] overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-8 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-6 py-5 text-left text-xl font-black text-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="grid grid-cols-1 gap-4 mt-6">
              <Button
                onClick={() => window.open('https://wa.me/5511984640809', '_blank')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-8 rounded-2xl gap-2 text-xl font-black shadow-2xl shadow-green-100"
              >
                <MessageCircle size={24} />
                Fale no WhatsApp
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
