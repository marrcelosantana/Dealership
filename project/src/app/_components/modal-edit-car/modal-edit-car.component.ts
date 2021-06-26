import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/_models/car';
import { CarsService } from 'src/app/_services/cars.service';

@Component({
  selector: 'app-modal-edit-car',
  templateUrl: './modal-edit-car.component.html',
  styleUrls: ['./modal-edit-car.component.scss']
})
export class ModalEditCarComponent implements OnInit {

  car: CarModel = new CarModel();
  cars: CarModel [];

  constructor(private carsService: CarsService) { }

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

  updateCars(id: number){
    this.carsService.updateCar(id, this.car).subscribe(car => {
      this.car = new CarModel();
      this.listCars();
    }, err => {
      console.log("Erro ao editar carro!", err);
    })
  }

}
