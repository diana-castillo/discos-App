import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistaService } from '../api/artista.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {
  artista = {};
  data: any;

  constructor(private artistaService: ArtistaService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params:', params);
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });

    this.artistaService.artista.subscribe(artista => {
      this.artista = artista;
    });
    this.artistaService.getArtista(this.data);
  }

}
