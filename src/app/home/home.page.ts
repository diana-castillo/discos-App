import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlbumService } from '../api/album.service';
import { AlbumsService } from '../api/albums.service';
import { CaratulaPage } from '../caratula/caratula.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  albums = []; /*
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
  pantalla;
  albumService: AlbumService;

  constructor(private albumsService: AlbumsService, public navCtrl: NavController) {}

  ngOnInit() {
    this.albumsService.albums.subscribe(albums => {
      this.albums = albums;
    });
    //this.albumsService.getAlbums();
  }

  /*onCaratula(id: number) {
    //this.navCtrl.navigateForward('/caratula');
    this.pantalla = new CaratulaPage(this.albumService, id);
    this.navCtrl.navigateForward(this.pantalla);
  }*/

}
