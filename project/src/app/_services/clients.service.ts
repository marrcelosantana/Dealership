import { ClientModel } from './../_models/client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  listClients():Observable<any>{
    return this.http.get(environment.apiUrl+"clients");
  }

  registerClient(client: ClientModel){
    return this.http.post(environment.apiUrl+"clients", client);
  }

  updateClient(id: any, client: ClientModel):Observable<any>{
    return this.http.put(environment.apiUrl+"clients/".concat(id), client);
  }

  removeClient(id: any){
    return this.http.delete(environment.apiUrl+"clients/".concat(id));
  }
}
