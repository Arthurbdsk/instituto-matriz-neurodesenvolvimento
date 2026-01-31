import { useAuth } from "@/_core/hooks/useAuth";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AudienceSection from "@/components/AudienceSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    handleNavClick("contact");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavClick={handleNavClick} />
      <main className="flex-1">
        <HeroSection onCtaClick={handleCtaClick} />
        <AboutSection />
        <FounderSection />
        <ServicesSection />
        <AudienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
