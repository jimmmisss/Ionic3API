import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFilmesPage } from './add-filmes';

@NgModule({
  declarations: [
    AddFilmesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFilmesPage),
  ],
})
export class AddFilmesPageModule {}
