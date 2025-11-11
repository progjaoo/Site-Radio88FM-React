const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-20 h-20 bg-foreground rounded-lg flex items-center justify-center">
            <span className="text-background text-3xl font-bold">88</span>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-foreground text-sm">
              Rua Moacyr de Paula Lobo, 104 Limoeiro - Volta Redonda/RJ
            </p>
            <p className="text-foreground text-sm">
              Dep. Comercial: (24) 3338-8820 | comercialvpd@gmail.com
            </p>
            <p className="text-foreground text-sm">
              Atendimento: (24) 3338-8820 / 99868-0088 WhatsApp | producao88fm@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
