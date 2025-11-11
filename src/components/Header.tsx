import { Link, useLocation } from "react-router-dom";
import { Youtube, Linkedin, Instagram, Facebook } from "lucide-react";
import logoHeader from "@/assets/logoHeader.png";
const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoHeader} className="w-12 h-13"></img>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
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
              Ouvir Ao vivo
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@radio88oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/radio-88-fm/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/radio88fm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/radio88oficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
