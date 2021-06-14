import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  album = new Subject<any[]>();

  constructor(private http: HttpClient) {
    //this.getAlbum();
  }

  getAlbum (id: number) {
    this.http.get<any[]>("/api/v1/albums/" + id).subscribe(data => {
      this.album.next(data);
    })
  }
}
