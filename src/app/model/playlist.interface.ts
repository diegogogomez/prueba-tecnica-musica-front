import { Song } from "./song.interface";

export interface Playlist {
    nombre: string;
    descripcion: string;
    canciones: Song[];
  }
  