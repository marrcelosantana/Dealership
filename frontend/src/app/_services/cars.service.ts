import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarModel } from '../_models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  listCars():Observable<any>{
    return this.http.get(environment.apiUrl+"cars");
  }
  registerCars(car: CarModel){
    return this.http.post(environment.apiUrl+"cars", car);
  }
  updateCar(id: any, car: CarModel):Observable<any>{
    return this.http.put(environment.apiUrl+"cars/".concat(id), car);
  }
  removeCar(id: any){
    return this.http.delete(environment.apiUrl+"cars/".concat(id));
  }
}
