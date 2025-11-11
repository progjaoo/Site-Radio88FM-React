import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { radioService, getRadioInfo } from "@/lib/radioService";

const Ouvir = () => {
  const [isPlaying, setIsPlaying] = useState(radioService.getPlayingState());
  const [volume, setVolume] = useState([70]);
  const [musica, setMusica] = useState("Rádio 88 FM");
  const [artista, setArtista] = useState("");
  const [capa, setCapa] = useState<string>("");

  useEffect(() => {
    const unsubscribe = radioService.subscribe((playing) => setIsPlaying(playing));

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
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

        if (
          data.musica_atual.includes("Radio 88") ||
          data.musica_atual.includes("88 FM")
        ) {
          setMusica("Rádio 88 FM");
          setArtista("");
          setCapa("");
        } else if (data.musica_atual.includes(" - ")) {
          const [titulo, artistaNome] = data.musica_atual.split(" - ");
          setMusica(titulo.trim());
          setArtista(artistaNome.trim());
          setCapa(data.capa_musica || "");
        } else {
          setMusica(data.musica_atual);
          setArtista("");
          setCapa(data.capa_musica || "");
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
              <div className="flex justify-center">
                {capa ? (
                  <img
                    src={capa}
                    alt={musica}
                    className="w-64 h-64 rounded-2xl shadow-glow object-cover"
                  />
                ) : (
                  <div className="w-64 h-64 rounded-2xl shadow-glow bg-card border border-border flex items-center justify-center">
                    <div className="w-32 h-32 bg-foreground rounded-lg flex items-center justify-center">
                      <span className="text-background text-5xl font-bold">88</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">{musica}</h2>
                {artista && <p className="text-lg text-muted-foreground">{artista}</p>}
              </div>

              <div className="flex items-center justify-center gap-8">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-primary hover:bg-primary-light text-primary-foreground flex items-center justify-center transition-all hover:scale-110 shadow-glow"
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                </button>
              </div>

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
