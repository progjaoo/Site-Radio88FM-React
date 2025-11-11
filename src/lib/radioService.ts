export interface RadioInfo {
  status: string;
  musica_atual: string;
  proxima_musica?: string;
  capa_musica?: string | null;
  titulo?: string;
  genero?: string;
}

const STREAM_URL = "https://stm39.srvstm.com:9776/stream";
const API_URL = "https://radiovox.conectastm.com/api-json/VkRGU2FrMHdOVzVRVkRBOStS";

class RadioService {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private listeners: ((playing: boolean) => void)[] = [];

  constructor() {
    if (typeof window !== "undefined") {
      this.audio = new Audio(STREAM_URL);
      this.audio.preload = "none";
    }
  }

  subscribe(callback: (playing: boolean) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.isPlaying));
  }

  async play() {
    if (!this.audio) return;
    try {
      await this.audio.play();
      this.isPlaying = true;
      this.notify();
    } catch (error) {
      console.error("Erro ao reproduzir rádio:", error);
    }
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  setVolume(volume: number) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }

  getPlayingState() {
    return this.isPlaying;
  }

  activateGlobalPlayer() {
    // Método vazio para compatibilidade com código existente
  }
}

export const radioService = new RadioService();

export async function getRadioInfo(): Promise<RadioInfo | null> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao buscar dados da rádio");

    const data = await response.json();

    let musica = "-";
    if (typeof data.musica_atual === "string" && data.musica_atual.trim() !== "") {
      musica = data.musica_atual;
    } else if (typeof data.musica_atual === "object" && data.musica_atual !== null) {
      const { titulo } = data.musica_atual;
      musica = titulo ? titulo : "-";
    }

    let capaValida: string | null = null;

    if (data.capa_musica && typeof data.capa_musica === "string") {
      const url = data.capa_musica.trim();

      const ehValida =
        url.startsWith("https://") &&
        !url.toLowerCase().includes("default.jpg") &&
        !url.toLowerCase().includes("no-cover") &&
        !url.toLowerCase().includes("radio fm 88") &&
        !url.toLowerCase().includes("generic");

      if (ehValida) capaValida = url;
    }

    return {
      status: data.status,
      musica_atual: musica,
      proxima_musica: data.proxima_musica || "",
      capa_musica: capaValida,
      titulo: data.titulo || "",
      genero: data.genero || "",
    };
  } catch (error) {
    console.error("Erro na API da rádio:", error);
    return null;
  }
}
