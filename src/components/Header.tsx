import { Link, useLocation } from "react-router-dom";
import { Youtube, Linkedin, Instagram, Facebook, Sun, Moon, Monitor } from "lucide-react";
import logoHeaderWhite from "@/assets/logoheadsvg.svg";
import logoHeaderColor from "@/assets/logoheadsvgcolor.svg";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all">
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
              src={
                resolvedTheme === 'dark' 
                  ? (isHovered ? logoHeaderColor : logoHeaderWhite)
                  : logoHeaderColor
              }
              alt="Logo Rádio 88 FM"
              className="w-14 h-auto transition-transform duration-500 ease-out hover:scale-110"
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-lg font-semibold transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/ouvir"
              className={`text-lg font-semibold transition-colors ${
                isActive("/ouvir")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Ouvir Ao Vivo
            </Link>
          </nav>

          {/* SOCIAL ICONS & THEME TOGGLE */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Sun size={20} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon size={20} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Alternar tema</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun size={16} className="mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon size={16} className="mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor size={16} className="mr-2" />
                  Auto
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
