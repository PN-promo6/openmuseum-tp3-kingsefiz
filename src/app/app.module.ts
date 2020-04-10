import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// Service contenant le JSON de tous les musées et les méthodes associées
import { MuseumListService } from './services/museumList.service';
// Liste des musée : inclue SingleMuseumComponent
import { MuseumListComponent } from './museum-list/museum-list.component';
// Un musée dans la liste
import { AddMuseumComponent } from './add-museum/add-museum.component';
// Un musée dans la liste
import { NotFoundComponent } from './not-found/not-found.component';
// Un musée dans la liste
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';

import { SingleMuseumComponent } from './single-museum/single-museum.component';

const appRoutes: Routes = [
{ path: 'singleMuseum', component: SingleMuseumComponent },
{ path: 'addMuseum', component: AddMuseumComponent },
{ path: 'museum/:ref_musee', component: MuseumDetailComponent},
{ path: '', component: MuseumListComponent},
{ path: 'not-found', component: NotFoundComponent },
{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MuseumListComponent,
    NotFoundComponent,
    MuseumDetailComponent,
    AddMuseumComponent,
    SingleMuseumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
