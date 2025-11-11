import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Assistir = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-12 min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl">
          <Card className="p-8 md:p-12 bg-card border-border shadow-glow animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Assista Ao Vivo
            </h1>

            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-glow">
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                title="Rádio 88 FM - Transmissão Ao Vivo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-center text-muted-foreground mt-6">
              Assista nossa transmissão ao vivo 24 horas por dia
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Assistir;
