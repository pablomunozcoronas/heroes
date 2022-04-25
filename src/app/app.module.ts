import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input"
import { HeroesService } from './services/heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DialogAddHeroeComponent } from './components/dialog-add-user/dialog-add-user.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteHeroeComponent } from './components/dialog-delete-heroe/dialog-delete-heroe.component';
import { DialogEditHeroeComponent } from './components/dialog-edit-heroe/dialog-edit-heroe.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    DialogAddHeroeComponent,
    DialogDeleteHeroeComponent,
    DialogEditHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
