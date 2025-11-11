import React from 'react';
import logoHeader from "@/assets/logoHeader.png"
const Footer = () => {
  return (
    // 1. Reduzido o padding vertical de py-12 para py-6 para ficar mais compacto
    <footer className="bg-card border-t border-border py-0">
      <div className="container mx-20 px-0">
        {/* 2. Alterado para layout flex horizontal (em telas md+) com justify-between */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-1">
          
          {/* Lado Esquerdo: Logo e Informações */}
          <div className="flex flex-col md:flex-row items-center gap-20 text-center md:text-center">
            {/* 3. Logo diminuído para se ajustar ao layout compacto */}
          <a href='/Home'>
            <img src={logoHeader} className="w-12 h-13"></img>
          </a>
          

            <div className="flex flex-col gap-0">
              <a target="_blank" href="https://www.google.com/maps?q=Rua+Moacyr+de+Paula+Lobo,+104,+Limoeiro+-+Volta+Redonda+-+RJ">
                <p className="text-foreground text-sm font-medium">
                  Rua Moacyr de Paula Lobo, 104 Limoeiro - Volta Redonda/RJ
                </p>
              </a>
              <p className="text-muted-foreground text-xs">
                Departamento Comercial: (24) 3338-8820 | Atendimento: (24) 3338-8820 / (24) 99868-0088 | <a href="mailto: producao88fm@gmail.com">producao88fm@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
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