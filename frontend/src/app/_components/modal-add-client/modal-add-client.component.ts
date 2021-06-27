import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/_models/client';
import { ClientsService } from 'src/app/_services/clients.service';

@Component({
  selector: 'app-modal-add-client',
  templateUrl: './modal-add-client.component.html',
  styleUrls: ['./modal-add-client.component.scss']
})
export class ModalAddClientComponent implements OnInit {

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

  addClient(){
    this.clientService.registerClient(this.client).subscribe((res) => {
      this.client = new ClientModel();
      this.listClients();
    }, err => {
      console.log("Erro ao adicionar cliente!!", err);
    })
  }

}
