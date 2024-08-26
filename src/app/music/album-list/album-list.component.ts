import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  albums: any[] = [];  // Arreglo para almacenar los álbumes

  constructor(private musicService: MusicService) { }  // Inyectar el servicio

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.musicService.getArtists().subscribe(
      (data) => {
        this.albums = data;  // Asignar los datos recibidos al arreglo de álbumes
      },
      (error) => {
        console.error('Error al obtener los álbumes:', error);  // Manejo de errores
      }
    );
  }

}
