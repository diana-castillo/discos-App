import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../api/album.service';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.page.html',
  styleUrls: ['./caratula.page.scss'],
})
export class CaratulaPage implements OnInit {
  album = {};
  data: any;

  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params:', params);
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });

    this.albumService.album.subscribe(album => {
      this.album = album;
    });
    this.albumService.getAlbum(this.data);
  }

}
