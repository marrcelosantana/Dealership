import { Component, OnInit } from '@angular/core';
import { BrandModel } from 'src/app/_models/brand';
import { CarModel } from 'src/app/_models/car';
import { BrandService } from 'src/app/_services/brand.service';
import { CarsService } from 'src/app/_services/cars.service';

@Component({
  selector: 'app-modal-edit-car',
  templateUrl: './modal-edit-car.component.html',
  styleUrls: ['./modal-edit-car.component.scss']
})
export class ModalEditCarComponent implements OnInit {

  idCar = 0;

  car: CarModel = new CarModel();
  cars: CarModel [];

  brand: BrandModel = new BrandModel();
  brands: BrandModel[];

  constructor(private carsService: CarsService, private brandService: BrandService) { }

  ngOnInit(): void {
    this.listBrands();
  }

  listBrands(){
    this.brandService.listBrands().subscribe(brand => {
      this.brands = brand;
    }, err => {
      console.log("Erro ao listar marcas", err);
    })
  }

  updateCars(id: number){
    if(this.car.name == null || this.car.brand == null || this.car.year == null){
      window.alert("Campos vazios, carro não atualizado!!");
      return;
    }
    this.carsService.updateCar(id, this.car).subscribe(car => {
      this.car = new CarModel();
    }, err => {
      console.log("Erro ao editar carro!", err);
    })
  }

}
