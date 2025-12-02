import { Link, useLocation } from "react-router-dom";
import { Youtube, Linkedin, Instagram, Facebook, Sun, Moon } from "lucide-react";
import logoHeaderWhite from "@/assets/logoheadsvg.svg";
import logoHeaderColor from "@/assets/logoheadsvgcolor.svg";
import logoHeaderAzul from "@/assets/logoHeaderazul.svg";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const getLogo = () => {
    if (resolvedTheme === "dark") {
      return isHovered ? logoHeaderColor : logoHeaderWhite;
    } else {
      return isHovered ? logoHeaderColor : logoHeaderAzul;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/120 backdrop-blur-lg border-b border-border transition-all">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={getLogo()}
              alt="Logo Rádio 88 FM"
              className="w-14 h-auto transition-transform duration-500 ease-out hover:scale-110"
            />
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className={`text-lg font-semibold transition-colors ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/ouvir"
              className={`text-lg font-semibold transition-colors ${
                isActive("/ouvir") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Ouvir Ao Vivo
            </Link>
            <Link
              to="/assistir"
              className={`text-lg font-semibold transition-colors ${
                isActive("/assistir") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Assistir Ao Vivo
            </Link>
          </nav>

          {/* AÇÕES */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary transition-all duration-300"
              onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            >
              {resolvedTheme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>

            <a href="https://www.youtube.com/@radio88oficial" target="_blank" className="text-foreground hover:text-primary">
              <Youtube size={24} />
            </a>
            <a href="https://www.linkedin.com/company/radio-88-fm/posts/?feedView=all" target="_blank" className="text-foreground hover:text-primary">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/radio88fm" target="_blank" className="text-foreground hover:text-primary">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/radio88oficial/" target="_blank" className="text-foreground hover:text-primary">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
