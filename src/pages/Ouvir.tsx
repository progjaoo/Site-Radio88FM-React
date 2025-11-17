import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { radioService, getRadioInfo } from "@/lib/radioService";
import logoMusica from "@/assets/logoMusica.svg"; 

const Ouvir = () => {
  const [isPlaying, setIsPlaying] = useState(radioService.getPlayingState());
  const [volume, setVolume] = useState([70]);
  const [musica, setMusica] = useState("Rádio 88 FM");
  const [artista, setArtista] = useState("");
  const [capa, setCapa] = useState<string>(logoMusica);
  const [isRadio, setIsRadio] = useState(true);

  // Controle do play/pause global
  useEffect(() => {
    const unsubscribe = radioService.subscribe((playing) => setIsPlaying(playing));
    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, []);

  const togglePlay = () => {
    radioService.toggle();
    radioService.activateGlobalPlayer();
  };

  useEffect(() => {
    radioService.setVolume(volume[0] / 100);
  }, [volume]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRadioInfo();
        if (!data) return;

        const nomeMusica = data.musica_atual?.trim() || "";
        const nomeLower = nomeMusica.toLowerCase();

        const invalido =
          nomeLower === "-" ||
          nomeLower === "," ||
          nomeLower === "/" ||
          nomeLower.includes("radio fm 88") ||
          nomeLower.includes("rádio 88") ||
          nomeLower.includes("88.7") ||
          nomeLower.includes("88,7") ||
          nomeLower.includes("volta redonda");

        if (invalido) {
          setMusica("Rádio 88 FM");
          setArtista("O Som do Céu");
          setCapa(logoMusica); 
          setIsRadio(true);
        } else {
          const [titulo, artistaNome] = nomeMusica.split(" - ");
          setMusica(titulo?.trim() || nomeMusica);
          setArtista(artistaNome?.trim() || "");
          setCapa(
            !data.capa_musica ||
              data.capa_musica.includes("img-capa-artista-padrao.png")
              ? logoMusica
              : data.capa_musica
          );
          setIsRadio(false);
        }
      } catch (err) {
        console.error("Erro ao buscar dados da rádio:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-12 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="p-8 md:p-12 bg-card border-border shadow-glow animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Rádio 88 FM
            </h1>

            <div className="space-y-8">
              {/* CAPA */}
              <div className="flex justify-center">
                <img
                  src={capa}
                  alt={musica}
                  className={`w-64 h-64 rounded-2xl shadow-glow object-cover ${
                    isRadio ? "p-6 bg-background" : ""
                  }`}
                />
              </div>

              {/* TÍTULO E ARTISTA */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">{musica}</h2>
                {artista && (
                  <p className="text-lg text-muted-foreground">{artista}</p>
                )}
              </div>

              {/* BOTÃO PLAY/PAUSE */}
              <div className="flex items-center justify-center gap-8">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-primary hover:bg-primary-light text-primary-foreground flex items-center justify-center transition-all hover:scale-110 shadow-glow"
                >
                  {isPlaying ? (
                    <Pause size={32} />
                  ) : (
                    <Play size={32} className="ml-1" />
                  )}
                </button>
              </div>

              {/* VOLUME */}
              <div className="flex items-center gap-4 max-w-xs mx-auto">
                <Volume2 className="text-muted-foreground" size={20} />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ouvir;
