import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddClientComponent } from 'src/app/_components/modal-add-client/modal-add-client.component';
import { ModalEditClientComponent } from 'src/app/_components/modal-edit-client/modal-edit-client.component';
import { ClientModel } from 'src/app/_models/client';
import { ClientsService } from 'src/app/_services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  client: ClientModel = new ClientModel();
  clients: ClientModel[];

  constructor(private clientService: ClientsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listClients();

  }

  listClients(){
    this.clientService.listClients().subscribe(client => {
      this.clients = client;
    }, err => {
      console.log("Erro ao listar clientes!!", err);
    })
  }


  removeClient(id: number){
    this.clientService.removeClient(id).subscribe(client => {
      this.client = new ClientModel();
      this.listClients();
    }, err => {
      console.log("Erro ao remover cliente!", err);
    })
  }

  openDialogAddClient() {
    const dialogRef = this.dialog.open(ModalAddClientComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.listClients();
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEditClient() {
    const dialogRef = this.dialog.open(ModalEditClientComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.listClients();
      console.log(`Dialog result: ${result}`);
    });
  }
}
