import { BrandModel } from './../_models/brand';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  listBrands(): Observable<any>{
    return this.http.get(environment.apiUrl+"brands");
  }

  registerBrand(brand: BrandModel){
    return this.http.post(environment.apiUrl+"brands", brand);
  }
}
