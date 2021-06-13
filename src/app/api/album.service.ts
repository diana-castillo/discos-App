import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  album = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.getAlbum();
  }

  getAlbum () {

    this.http.get<any[]>("/api/v1/albums/1").subscribe(data => {
      this.album.next(data);
    })
  }
}
