import { ClientsService } from './../../_services/clients.service';
import { ClientModel } from './../../_models/client';
import { ModalAddBrandComponent } from './../modal-add-brand/modal-add-brand.component';
import { CarsService } from 'src/app/_services/cars.service';
import { CarModel } from 'src/app/_models/car';
import { BrandModel } from './../../_models/brand';
import { BrandService } from './../../_services/brand.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-car',
  templateUrl: './modal-add-car.component.html',
  styleUrls: ['./modal-add-car.component.scss']
})
export class ModalAddCarComponent implements OnInit {

  constructor(private brandService: BrandService, private carsService: CarsService, private clientService: ClientsService ,public dialog: MatDialog) { }

  brand: BrandModel = new BrandModel();
  brands: BrandModel[];

  car: CarModel = new CarModel();
  cars: CarModel[];

  client: ClientModel = new ClientModel();
  clients: ClientModel[];

  ngOnInit(): void {
    this.listBrands();
    this.listClients();
    this.listCars();
  }

  listBrands(){
    this.brandService.listBrands().subscribe(brand => {
      this.brands = brand;
    }, err => {
      console.log("Erro ao listar marcas", err);
    })
  }

  listClients(){
    this.clientService.listClients().subscribe(client => {
      this.clients = client;
    }, err => {
      console.log("Erro ao listar clientes", err);
    })
  }

  listCars(){
    this.carsService.listCars().subscribe(car => {
      this.cars = car;
    }, err => {
      console.log("Erro ao adicionar carro!", err);
    })
  }

  addCar(){
    if(this.car.name == null || this.car.brand == null || this.car.year == null){
      window.alert("Campos não preenchidos, carro não adicionado!!")
      return;
    }

    this.carsService.registerCars(this.car).subscribe((res) => {
      this.car = new CarModel();
      this.listCars();
    }, err => {
      console.log("Erro ao adicionar carro!", err);
    })
  }

  openDialogAddBrand() {
    const dialogRef = this.dialog.open(ModalAddBrandComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
