import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowedEdit = true;
  value;

  constructor(private serversService: ServersService , private active : ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.active.snapshot.queryParams);
    // console.log(this.active.snapshot.fragment);
    this.active.queryParams.subscribe(
      (querry : Params) => {
        this.value = querry['allowEdit'] ;
        this.allowedEdit = querry['allowEdit'] === '1' ? true : false ;
        
      }
    )
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
