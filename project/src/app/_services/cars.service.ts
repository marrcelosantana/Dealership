import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { CarsModel } from './../_models/cars';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  listarCarros(): Observable<any>{
    return this.http.get(environment.apiUrl);
  }

  cadastrarCarros(carro: CarsModel):Observable<any>{
    return this.http.post(environment.apiUrl, carro);
  }

  atualizarCarros(id: any, carro: CarsModel):Observable<any>{
    return this.http.put(environment.apiUrl.concat(id), carro);
  }

  removerCarros(id: any){
    return this.http.delete(environment.apiUrl.concat(id));
  }

}
