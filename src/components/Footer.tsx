import logoHeaderWhite from "@/assets/logoheadsvg.svg";
import logoHeaderColor from "@/assets/logoheadsvgcolor.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
const Footer = () => {
const location = useLocation();
   const [isHovered, setIsHovered] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;
  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Logo + Endereço */}
          <div className="flex flex-col md:flex-row items-center gap-6">
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

            <div className="space-y-1">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.google.com/maps?q=Rua+Moacyr+de+Paula+Lobo,+104,+Limoeiro+-+Volta+Redonda+-+RJ"
              >
                <p className="text-foreground text-sm font-medium">
                  Rua Moacyr de Paula Lobo, 104 - Limoeiro, Volta Redonda/RJ
                </p>
              </a>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Departamento Comercial: (24) 3338-8820 | Atendimento: (24) 3338-8820 / (24) 99868-0088 |{" "}
                <a 
                  href="mailto:producao88fm@gmail.com" 
                  className="hover:underline text-primary"
                >
                  producao88fm@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Botão WhatsApp */}
          <div className="mt-2 md:mt-0">
            <a 
              href="https://wa.me/5524998680088" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Anuncie conosco
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
