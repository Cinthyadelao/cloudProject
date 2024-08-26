import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private apiUrl = 'https://4c7w1ku9lh.execute-api.eu-north-1.amazonaws.com';  // URL base de tu API Gateway

  constructor(private http: HttpClient) { }

  // Método para obtener todos los álbumes
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/albums`);
  }

  // Método para obtener un álbum por ID
  getAlbumById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/album`, {
      params: { AlbumID: id }
    });
  }

  // Método para obtener todos los artistas
  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/artists`);
  }

  // Método para obtener un artista por ID
  getArtistById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/artist`, {
      params: { ArtisteID: id }
    });
  }
}
