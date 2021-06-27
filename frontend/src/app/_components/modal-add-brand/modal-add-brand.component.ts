import { BrandModel } from './../../_models/brand';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/_services/brand.service';

@Component({
  selector: 'app-modal-add-brand',
  templateUrl: './modal-add-brand.component.html',
  styleUrls: ['./modal-add-brand.component.scss']
})
export class ModalAddBrandComponent implements OnInit {

  constructor(private brandService: BrandService) { }

  brand: BrandModel = new BrandModel();
  brands: BrandModel[];

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

  addBrand(){
    if(this.brand.name == null){
      window.alert("Campos vazios, marca não adicionada!!");
      return;
    }
    this.brandService.registerBrand(this.brand).subscribe((res) => {
      this.brand = new BrandModel();
      this.listBrands();
    }, err => {
      console.log("Erro ao adicionar Marca!!", err);
    })
  }

}
