import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo-instituto-matriz.png"
            alt="Instituto Matriz"
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <Button
            onClick={() => window.open('https://wa.me/5511984640809', '_blank')}
            className="hidden sm:inline-flex bg-green-500 hover:bg-green-600 text-white gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-2 text-left text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/5511984640809', '_blank')}
              className="w-full bg-green-500 hover:bg-green-600 text-white mt-2 gap-2"
            >
              <MessageCircle size={18} />
              Converse no WhatsApp
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
