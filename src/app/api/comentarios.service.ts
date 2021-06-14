import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  comentarios = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  getComentarios(id: number) {
    this.http.get<any[]>("/api/v1/comentarios/" + id).subscribe(data => {
      this.comentarios.next(data);
    })
  }
}
