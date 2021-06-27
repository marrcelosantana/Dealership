import { ClientsService } from './../../_services/clients.service';
import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/_models/client';

@Component({
  selector: 'app-modal-edit-client',
  templateUrl: './modal-edit-client.component.html',
  styleUrls: ['./modal-edit-client.component.scss']
})
export class ModalEditClientComponent implements OnInit {

  idClient = 0;

  client: ClientModel = new ClientModel();
  clients: ClientModel[];

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
  }

  listClients(){
    this.clientService.listClients().subscribe(client => {
      this.clients = client;
    }, err => {
      console.log("Erro ao listar clientes!!", err);
    })
  }

  updateClients(id: number){
    this.clientService.updateClient(id, this.client).subscribe(client => {
      this.client = new ClientModel();
      this.listClients();
    }, err => {
      console.log("Erro ao atualizar cliente!", err);
    })
  }

}
