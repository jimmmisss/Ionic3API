import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoFilmesPage } from './info-filmes';

@NgModule({
  declarations: [
    InfoFilmesPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoFilmesPage),
  ],
})
export class InfoFilmesPageModule {}
