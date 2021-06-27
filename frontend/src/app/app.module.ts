import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule}  from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './_pages/home/home.component';
import { ClientsComponent } from './_pages/clients/clients.component';
import { CarsComponent } from './_pages/cars/cars.component';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { ModalEditCarComponent } from './_components/modal-edit-car/modal-edit-car.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalAddCarComponent } from './_components/modal-add-car/modal-add-car.component';
import {MatSelectModule} from '@angular/material/select';
import { ModalAddBrandComponent } from './_components/modal-add-brand/modal-add-brand.component';
import {MatCardModule} from '@angular/material/card';
import { ModalAddClientComponent } from './_components/modal-add-client/modal-add-client.component';
import { ModalEditClientComponent } from './_components/modal-edit-client/modal-edit-client.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ClientsComponent,
    CarsComponent,
    ModalEditCarComponent,
    ModalAddCarComponent,
    ModalAddBrandComponent,
    ModalAddClientComponent,
    ModalEditClientComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
