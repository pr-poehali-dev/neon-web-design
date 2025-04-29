import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Wifi, Tv, Phone, Package, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-electron-dark-blue/95 backdrop-blur-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="text-electron-neon-blue font-bold text-3xl tracking-tight">
              ЭЛЕКТРОН
            </div>
            <div className="absolute -bottom-3 right-0 text-xs text-electron-light-blue font-light tracking-widest">
              ИНТЕРНЕТ • ТВ
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-electron-neon-blue transition-colors">Главная</Link>
          <Link to="/internet" className="text-white hover:text-electron-neon-blue transition-colors flex items-center gap-1">
            <Wifi size={16} />
            <span>Интернет</span>
          </Link>
          <Link to="/tv" className="text-white hover:text-electron-neon-blue transition-colors flex items-center gap-1">
            <Tv size={16} />
            <span>Телевидение</span>
          </Link>
          <Link to="/packages" className="text-white hover:text-electron-neon-blue transition-colors flex items-center gap-1">
            <Package size={16} />
            <span>Пакеты услуг</span>
          </Link>
          <Link to="/contacts" className="text-white hover:text-electron-neon-blue transition-colors flex items-center gap-1">
            <Phone size={16} />
            <span>Контакты</span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/account" className="text-white hover:text-electron-neon-blue transition-colors">
            <User size={20} />
          </Link>
          <Button className="neon-button">
            Подключиться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-2 pb-4 px-4 bg-electron-dark-blue/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-electron-neon-blue transition-colors py-2">Главная</Link>
            <Link to="/internet" className="text-white hover:text-electron-neon-blue transition-colors py-2 flex items-center gap-2">
              <Wifi size={16} />
              <span>Интернет</span>
            </Link>
            <Link to="/tv" className="text-white hover:text-electron-neon-blue transition-colors py-2 flex items-center gap-2">
              <Tv size={16} />
              <span>Телевидение</span>
            </Link>
            <Link to="/packages" className="text-white hover:text-electron-neon-blue transition-colors py-2 flex items-center gap-2">
              <Package size={16} />
              <span>Пакеты услуг</span>
            </Link>
            <Link to="/contacts" className="text-white hover:text-electron-neon-blue transition-colors py-2 flex items-center gap-2">
              <Phone size={16} />
              <span>Контакты</span>
            </Link>
            <Button className="neon-button w-full mt-4">
              Подключиться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
