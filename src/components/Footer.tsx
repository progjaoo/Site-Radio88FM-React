import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";

import logoHeaderWhite from "@/assets/logoheadsvg.svg";
import logoHeaderColor from "@/assets/logoheadsvgcolor.svg";
import logoHeaderAzul from "@/assets/logoHeaderazul.svg";

const Footer = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();

  const getLogo = () => {
    if (resolvedTheme === "dark") {
      return isHovered ? logoHeaderColor : logoHeaderWhite;
    } else {
      return isHovered ? logoHeaderColor : logoHeaderAzul;
    }
  };

  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Logo + Endereço */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link
              to="/"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={getLogo()}
                alt="Logo Rádio 88 FM"
                className="w-14 h-auto transition-transform duration-500 ease-out hover:scale-110"
              />
            </Link>

            <div className="space-y-1">
              <a target="_blank" href="https://www.google.com/maps?q=Rua+Moacyr+de+Paula+Lobo,+104">
                <p className="text-foreground text-sm font-medium">
                  Rua Moacyr de Paula Lobo, 104 - Limoeiro, Volta Redonda/RJ
                </p>
              </a>

              <p className="text-muted-foreground text-xs leading-relaxed">
                Departamento Comercial: (24) 3338-8820 | Atendimento: (24) 3338-8820 / (24) 99868-0088 |{" "}
                <a href="mailto:producao88fm@gmail.com" className="hover:underline text-primary">
                  producao88fm@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5524998680088"
            target="_blank"
            className="text-sm font-medium text-primary hover:underline"
          >
            Anuncie conosco
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
