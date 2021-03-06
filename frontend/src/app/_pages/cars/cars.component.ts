import { ModalAddCarComponent } from './../../_components/modal-add-car/modal-add-car.component';
import { ModalEditCarComponent } from './../../_components/modal-edit-car/modal-edit-car.component';
import { CarsService } from './../../_services/cars.service';
import { CarModel } from './../../_models/car';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  car: CarModel = new CarModel();
  cars: CarModel [];

  constructor(private carsService: CarsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listCars();
  }

  listCars(){
    this.carsService.listCars().subscribe(car => {
      this.cars = car;
    }, err => {
      console.log("Erro ao adicionar carro!", err);
    })
  }

  removeCars(id: number){
    this.carsService.removeCar(id).subscribe(car => {
      this.car = new CarModel();
      this.listCars();
    }, err => {
      console.log("Erro ao deletar carro!");
    })
  }

  openDialogEditCar(car: CarModel) {
    const dialogRef = this.dialog.open(ModalEditCarComponent);
    dialogRef.componentInstance.car = car;
    dialogRef.afterClosed().subscribe(result => {
      this.listCars();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAddCar() {
    const dialogRef = this.dialog.open(ModalAddCarComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.listCars();
      console.log(`Dialog result: ${result}`);
    });
  }
}
