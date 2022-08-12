import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/model/playlist.interface';
import { Song } from 'src/app/model/song.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  playlists: Playlist[] = [];

  constructor(private musicService: MusicService, private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.obtenerToken().subscribe( (token) => {
      this.musicService.playLists(token.idToken).subscribe( (data: any) => {
        this.playlists = data['data'];
        console.log(this.playlists);
      });
    });

  }

  borrarPlayList(playlist: Playlist) {

    
    this.authService.obtenerToken().subscribe( (token) => {

      
    this.musicService.deletePlaylist(playlist.nombre, token.idToken).subscribe( () => {
      console.log("borrado");
      this.ngOnInit();
    });

    });

  }

}
