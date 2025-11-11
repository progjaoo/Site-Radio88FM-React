import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                A vitória é do povo de Deus
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                A rádio que você sempre ouviu,<br />agora também pode assistir.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/assistir">
                  <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow transition-all hover:scale-105">
                    Assistir
                  </Button>
                </Link>
                <Link to="/ouvir">
                  <Button size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg transition-all hover:scale-105">
                    Ouvir
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="w-32 h-32 rounded-full bg-team-yellow overflow-hidden">
                    <div className="w-full h-full bg-muted" />
                  </div>
                  <div className="w-32 h-32 rounded-full bg-team-red overflow-hidden">
                    <div className="w-full h-full bg-muted" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="w-32 h-32 rounded-full bg-team-blue overflow-hidden">
                    <div className="w-full h-full bg-muted" />
                  </div>
                  <div className="w-32 h-32 rounded-full bg-team-green overflow-hidden">
                    <div className="w-full h-full bg-muted" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-32 h-32 rounded-full bg-team-purple overflow-hidden">
                    <div className="w-full h-full bg-muted" />
                  </div>
                  <div className="w-32 h-32 rounded-full bg-team-cyan overflow-hidden">
                    <div className="w-full h-full bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Banner */}
      <section className="py-20 bg-primary animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-primary-foreground">
            Anuncie aqui!
          </h2>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-card animate-fade-in">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground max-w-5xl mx-auto leading-relaxed">
            "DAMOS GRAÇAS A DEUS PELO QUE PASSOU PELO DIA DE HOJE E PELO DIA QUE VIRÁ."
          </h3>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                A Rádio 88 FM foi fundada em 1986, em Volta Redonda, porém, a história da
                emissora começou, de fato, em primeiro de agosto de 1994, quando passou a
                ser administrada pelo então operador de áudio Edson Albertassi, se tornou
                genuinamente evangélica e passou a transmitir canções e palavras de amor e
                paz.
              </p>
              <p>
                Em 30 anos de existência, a emissora cresceu, conquistando a maior
                audiências do Sul do Estado. A 88 FM é hoje referência em qualidade de
                programação e responsabilidade social.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-80 bg-muted rounded-lg overflow-hidden shadow-glow">
                <div className="w-full h-full bg-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            A RÁDIO QUE TRANSMITE<br />O SOM DO CÉU
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { bg: "bg-team-blue" },
              { bg: "bg-team-yellow" },
              { bg: "bg-team-green" },
              { bg: "bg-team-purple" },
              { bg: "bg-team-red" },
              { bg: "bg-team-cyan" },
              { bg: "bg-team-yellow" },
              { bg: "bg-team-blue" },
              { bg: "bg-team-green" },
              { bg: "bg-team-purple" },
              { bg: "bg-team-red" },
              { bg: "bg-team-cyan" },
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <div className={`w-full h-full ${item.bg}`}>
                  <div className="w-full h-full bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-background animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-4xl h-64 bg-muted rounded-lg overflow-hidden shadow-glow">
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground text-xl">Imagem de dispositivos</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
