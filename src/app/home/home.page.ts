import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlbumsService } from '../api/albums.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  albums = [];
  /*
    {
      titulo: "Birthplace",
      anio_prod: 2018,
      caratula: "https://images-na.ssl-images-amazon.com/images/I/91yN4MZDQqL._SL1500_.jpg",
      artista: "Novo Amor"
    },
    {
      titulo: "Woodgate, NY",
      anio_prod: 2014,
      caratula: "https://i1.sndcdn.com/artworks-000180525777-uz7n6q-t500x500.jpg",
      artista: "Novo Amor"
    }
  ];*/

  constructor(private albumsService: AlbumsService, private router: Router, public navCtrl: NavController) {}

  ngOnInit() {
    this.albumsService.albums.subscribe(albums => {
      this.albums = albums;
    });
    //this.albumsService.getAlbums();
  }

  listaN(n: number) {
    let lista = []
    for( let i = 0; i < n; i++){
      lista.push(i);
    }
    return lista;
  }

  onCaratula(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id)
      }
    }
    this.router.navigate(['/caratula'], navigationExtras);
    //this.navCtrl.navigateForward('/caratula');
  }

  onArtista(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id)
      }
    }
    this.router.navigate(['/artista'], navigationExtras);
  }

  onTracks(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id)
      }
    }
    this.router.navigate(['/tracks'], navigationExtras);
  }

  onComentarios(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id)
      }
    }
    this.router.navigate(['/comentarios'], navigationExtras);
  }

}
