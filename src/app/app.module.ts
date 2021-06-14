import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumsService } from './api/albums.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumService } from './api/album.service';
import { ArtistaService } from './api/artista.service';
import { TracksService } from './api/tracks.service';
import { ComentariosService } from './api/comentarios.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AlbumsService, AlbumService, ArtistaService, TracksService, ComentariosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
