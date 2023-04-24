import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { GoogleMapsModule } from '@angular/google-maps'
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion'
import { PopularSearchComponent } from './components/popular-search/popular-search.component';
import { LocationComponent } from './components/location/location.component';
import { MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from '../app/app.routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatCardModule} from '@angular/material/card'
import { MatDialogModule} from '@angular/material/dialog'
import {FormsModule} from '@angular/forms';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { ReactiveFormsModule } from '@angular/forms';
import { AccessabilityComponent } from './components/accessability/accessability.component';
import { PhotoComponent } from './components/photo/photo.component';
import { RoutesComponent } from './components/routes/routes.component';
import {MatSelectModule} from '@angular/material/select'
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PopularSearchComponent,
    LocationComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AccessabilityComponent,
    PhotoComponent,
    RoutesComponent,
    
  ],
  entryComponents: [
    LocationComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    GooglePlaceModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    GoogleMapsModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
