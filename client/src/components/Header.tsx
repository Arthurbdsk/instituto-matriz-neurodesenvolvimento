import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
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
          onClick={() => onNavClick("home")}
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
              onClick={() => onNavClick(item.id)}
              className="px-5 py-3 text-lg font-bold text-foreground/80 hover:text-primary transition-all rounded-full hover:bg-primary/5"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => window.open('https://wa.me/5511984640809', '_blank')}
            className="md:hidden bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg shadow-green-100 transition-all hover:scale-110 active:scale-95"
            aria-label="Abrir WhatsApp"
          >
            <MessageCircle size={20} />
          </button>
          <Button
            onClick={() => window.open('https://wa.me/5511984640809', '_blank')}
            className="hidden md:flex bg-green-500 hover:bg-green-600 text-white gap-3 px-8 py-8 rounded-full text-lg font-black shadow-xl shadow-green-100 transition-all hover:-translate-y-1 active:translate-y-0"
          >
            <MessageCircle size={24} />
            Dê o primeiro passo. Fale no WhatsApp
          </Button>
        </div>
      </div>


    </header>
  );
}
