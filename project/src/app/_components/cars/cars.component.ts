import { CarsModel } from './../../_models/cars';
import { CarsService } from './../../_services/cars.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  @Input()
  carro: CarsModel = new CarsModel();
  cars: any = [];

  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.listarCarros();
  }

  listarCarros(){
    this.CarsService.listarCarros().subscribe(cars => {
      this.cars = cars;
    }, err => {
      console.log('Erro ao listar carro!!', err)
    })
  }

  cadastrarCarros(){
    console.log(this.carro);
    this.CarsService.cadastrarCarros(this.carro).subscribe(cars => {
      this.carro = new CarsModel();
      this.listarCarros();
    }, err => {
      console.log('Erro ao cadastrar carro!!!', err)
    })

  }

  atualizarCarros(id: number){
    this.CarsService.atualizarCarros(id, this.carro).subscribe(cars => {
      this.carro = new CarsModel();
      this.listarCarros();
    }, err => {
      console.log('Erro ao atualizar!!!', err);
    })
  }

  removerCarros(id: number){
    this.CarsService.removerCarros(id).subscribe(cars => {
      this.carro = new CarsModel();
      this.listarCarros();
    }, err => {
      console.log('Erro ao deletar!!', err);
    })
  }


}
