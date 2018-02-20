import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFilmesPage } from './list-filmes';

@NgModule({
  declarations: [
    ListFilmesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFilmesPage),
  ],
})
export class ListFilmesPageModule {}
