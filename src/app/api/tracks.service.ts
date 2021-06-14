import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  tracks = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  getTracks(id: number) {
    this.http.get<any[]>("/api/v1/tracks/" + id).subscribe(data => {
      this.tracks.next(data);
    })
  }
}
