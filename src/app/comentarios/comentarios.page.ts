import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentariosService } from '../api/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  comentarios = [];
  data: any;

  constructor(private comentariosService: ComentariosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });

    this.comentariosService.comentarios.subscribe(comentarios => {
      this.comentarios = comentarios;
    });
    this.comentariosService.getComentarios(this.data);
  }

}
