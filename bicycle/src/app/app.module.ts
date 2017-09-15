import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginregComponent,
    BrowseComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
