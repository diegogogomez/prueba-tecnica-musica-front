import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/model/playlist.interface';
import { Song } from 'src/app/model/song.interface';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  playlists: Playlist[] = [];

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.playLists().subscribe( (data: any) => {
      this.playlists = data['data'];
      console.log(this.playlists);
    });
  }

  borrarPlayList(playlist: Playlist) {

    this.musicService.deletePlaylist(playlist.nombre).subscribe( () => {
      console.log("borrado");
      this.ngOnInit();
    });
  }

}
