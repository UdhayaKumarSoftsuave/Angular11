import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService ,
     private route : ActivatedRoute,
     private routes : Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (value : Params) => {
        this.server = this.serversService.getServer(+value["id"]);
      }
    )
  }

  onEdit(){
    // console.log(this.route);
    // console.log(this.routes.navigate(['edit'] , {relativeTo : this.route , queryParamsHandling : 'preserve'}));
    this.routes.navigate(['edit'] , {relativeTo : this.route , queryParamsHandling : 'preserve'});
  }

}
