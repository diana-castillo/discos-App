import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../api/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
})
export class TracksPage implements OnInit {
  tracks = [];
  data: any;

  constructor(private tracksService: TracksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });

    this.tracksService.tracks.subscribe(tracks => {
      this.tracks = tracks;
    });
    this.tracksService.getTracks(this.data);
  }

}
