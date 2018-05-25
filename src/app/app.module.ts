import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatTableModule, MatButtonModule, MatListModule, MatPaginatorModule } from '@angular/material';

// Temp solution until connected to database
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';

import { InstagramUrlsService } from './services/instagram-urls.service';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AdminComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule
  ],
  providers: [ InstagramUrlsService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
