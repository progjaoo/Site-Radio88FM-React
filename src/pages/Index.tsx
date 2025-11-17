import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import initialImage from "@/assets/initialImage.png"
import imageEdson from "@/assets/edsonImage.png"
import betin from "@/assets/locutores/betin.png";
import cintia from "@/assets/locutores/cintia.png";
import dario from "@/assets/locutores/dario.png";
import fato from "@/assets/locutores/fato1.png";
import geraldo from "@/assets/locutores/geraldo.png";
import johna from "@/assets/locutores/johna.png";
import leo from "@/assets/locutores/leo.png";
import leticia from "@/assets/locutores/let.png";
import miqueias from "@/assets/locutores/miqueias.png";
import regis from "@/assets/locutores/regis.png";
import vogel from "@/assets/locutores/vogel.png";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className=" space-y-8 animate-fade-in">
              <div className="text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                A vitória é do<br />povo de Deus
              </h1>
              <p className="mt-7 text-xl md:text-2xl text-muted-foreground">
                A rádio que você sempre ouviu,<br />agora também pode assistir.
              </p>
            </div>

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

           <div className="hidden md:flex justify-end items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={initialImage} 
              alt="Locutores Image"
              className="
                w-[400px]         
                h-auto             
                rounded-lg
              "
            />
          </div>
          </div>
        </div>
      </section>

      <section className="py-20 animate-fade-in flex justify-center">
        <div className="bg-primary text-primary-foreground rounded-3xl shadow-xl px-10 py-16 max-w-4xl w-full mx-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold">
            Anuncie aqui!
          </h2>
          
        </div>
      </section>


      <section className="py-20 bg-card animate-fade-in">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground max-w-5xl mx-auto leading-relaxed">
            "DAMOS GRAÇAS A DEUS PELO QUE PASSOU PELO DIA DE HOJE E PELO DIA QUE VIRÁ."
          </h3>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background animate-fade-in">
        <div className="container mx-auto px-7">
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
              <div className="w-full h-30 bg-muted rounded-lg overflow-hidden shadow-glow">
                <img src={imageEdson} className="w-full h-full bg-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Team Section */}
<section className="py-20 bg-card animate-fade-in">
  <div className="w-full overflow-hidden">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
      A RÁDIO QUE TRANSMITE<br />O SOM DO CÉU
    </h2>

    <div className="flex justify-center items-stretch w-full">
      {[
        { name: "Cíntia Miranda", color: "bg-yellow-400", image: cintia },
        { name: "Betinho Albertassi", color: "bg-blue-500", image: betin },
        { name: "Dário Ferreira", color: "bg-green-500", image: dario },
        { name: "Leandro Batista", color: "bg-purple-600", image: fato },
        { name: "Geraldo Albertassi", color: "bg-red-500", image: geraldo },
        { name: "Johnathan Amado", color: "bg-cyan-400", image: johna },
        { name: "Léo Salles", color: "bg-yellow-400", image: leo },
        { name: "Letícia Dantas", color: "bg-blue-500", image: leticia },
        { name: "Miquéias Nechaeff", color: "bg-green-500", image: miqueias },
        { name: "Regis", color: "bg-purple-600", image: regis },
        { name: "Gilberto Vogel", color: "bg-red-500", image: vogel },
      ].map((item, index) => (
        <div
          key={index}
          className={`relative group overflow-hidden ${item.color} transition-all duration-500 ease-out hover:-translate-y-3`}
          style={{
            flex: "1 1 0",
            maxWidth: "calc(100% / 11)",
            height: "480px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />

          <div
            className="
              absolute bottom-4 left-1/2 -translate-x-1/2
              bg-black/70 text-white text-sm font-semibold py-1 px-3
              rounded-full opacity-0 group-hover:opacity-100
              transition-all duration-500
            "
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Index;
