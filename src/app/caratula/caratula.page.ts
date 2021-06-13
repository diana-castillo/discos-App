import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../api/album.service';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.page.html',
  styleUrls: ['./caratula.page.scss'],
})
export class CaratulaPage implements OnInit {
  album = {};

  constructor(private albumService: AlbumService, id: number) { console.log(id ) }

  ngOnInit() {
    this.albumService.album.subscribe(album => {
      this.album = album;
    });
  }

}
